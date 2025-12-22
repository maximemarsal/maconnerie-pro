import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  email: string;
  telephone: string;
  codePostal: string;
  description: string;
}

export async function POST(request: NextRequest) {
  console.log("[CONTACT API] Requête reçue");
  
  try {
    const body: ContactFormData = await request.json();
    const { email, telephone, codePostal, description } = body;
    
    console.log("[CONTACT API] Données reçues:", { email, telephone, codePostal, descLength: description?.length });

    // Validate required fields
    if (!email || !telephone || !codePostal || !description) {
      console.log("[CONTACT API] Champs manquants");
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("[CONTACT API] Email invalide:", email);
      return NextResponse.json(
        { error: "Format d'email invalide" },
        { status: 400 }
      );
    }

    // Validate postal code (French format)
    const postalRegex = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/;
    if (!postalRegex.test(codePostal)) {
      console.log("[CONTACT API] Code postal invalide:", codePostal);
      return NextResponse.json(
        { error: "Code postal invalide" },
        { status: 400 }
      );
    }

    // Verify env vars before creating transporter
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("[CONTACT API] EMAIL_USER ou EMAIL_PASS non configuré");
      console.log("[CONTACT API] EMAIL_USER défini:", !!process.env.EMAIL_USER);
      console.log("[CONTACT API] EMAIL_PASS défini:", !!process.env.EMAIL_PASS);
      return NextResponse.json(
        { error: "Configuration email manquante sur le serveur" },
        { status: 500 }
      );
    }
    
    console.log("[CONTACT API] Config email:", {
      user: process.env.EMAIL_USER?.substring(0, 5) + "***",
      passLength: process.env.EMAIL_PASS?.length
    });

    // Create email transporter - essayer port 587 (TLS) car 465 peut être bloqué
    console.log("[CONTACT API] Création du transporter SMTP...");
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout: 30000, // 30 seconds
      greetingTimeout: 30000,
      socketTimeout: 30000,
      tls: {
        rejectUnauthorized: false
      }
    });
    
    // Verify SMTP connection
    console.log("[CONTACT API] Vérification connexion SMTP...");
    try {
      await transporter.verify();
      console.log("[CONTACT API] Connexion SMTP OK");
    } catch (verifyError) {
      console.error("[CONTACT API] Échec vérification SMTP:", verifyError);
      return NextResponse.json(
        { error: "Impossible de se connecter au serveur email", details: String(verifyError) },
        { status: 500 }
      );
    }

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
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
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
    console.log("[CONTACT API] Envoi de l'email...");
    const result = await transporter.sendMail(mailOptions);
    console.log("[CONTACT API] Email envoyé avec succès:", result.messageId);

    return NextResponse.json(
      { message: "Email envoye avec succes", messageId: result.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CONTACT API] Erreur:", error);
    const err = error as { code?: string; command?: string; message?: string };
    return NextResponse.json(
      { 
        error: "Erreur lors de l'envoi de l'email",
        code: err.code,
        command: err.command,
        message: err.message
      },
      { status: 500 }
    );
  }
}
