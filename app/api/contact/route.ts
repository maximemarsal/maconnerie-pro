import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  email: string;
  telephone: string;
  codePostal: string;
  description: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { email, telephone, codePostal, description } = body;

    // Validate required fields
    if (!email || !telephone || !codePostal || !description) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format d'email invalide" },
        { status: 400 }
      );
    }

    // Validate postal code (French format)
    const postalRegex = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/;
    if (!postalRegex.test(codePostal)) {
      return NextResponse.json(
        { error: "Code postal invalide" },
        { status: 400 }
      );
    }

    // Verify environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("SMTP_USER ou SMTP_PASS non configuré");
      return NextResponse.json(
        { error: "Configuration email manquante" },
        { status: 500 }
      );
    }

    // Create email transporter with Railway SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // use TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Determine department from postal code
    const department = codePostal.substring(0, 2);
    const departmentNames: Record<string, string> = {
      "72": "Sarthe",
      "01": "Ain",
      "06": "Alpes-Maritimes",
      "13": "Bouches-du-Rhone",
    };
    const departmentName = departmentNames[department] || `Departement ${department}`;

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      subject: `Nouveau Lead Maconnerie - ${codePostal} (${departmentName})`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #1A1A1A; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #8B4513; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background-color: #FAFAF8; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #8B4513; }
            .value { padding: 10px; background-color: white; border-radius: 5px; margin-top: 5px; }
            .footer { padding: 20px; text-align: center; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nouvelle Demande de Devis</h1>
              <p>Maconnerie Pro</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Email :</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Telephone :</div>
                <div class="value">${telephone}</div>
              </div>
              <div class="field">
                <div class="label">Code Postal :</div>
                <div class="value">${codePostal} - ${departmentName}</div>
              </div>
              <div class="field">
                <div class="label">Description du Projet :</div>
                <div class="value">${description.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <div class="footer">
              <p>Ce message a ete envoye depuis le formulaire de contact du site Maconnerie Pro.</p>
              <p>Date de reception : ${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        Nouvelle Demande de Devis - Maconnerie Pro
        
        Email : ${email}
        Telephone : ${telephone}
        Code Postal : ${codePostal} - ${departmentName}
        
        Description du Projet :
        ${description}
        
        ---
        Date de reception : ${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email envoye avec succes" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email" },
      { status: 500 }
    );
  }
}
