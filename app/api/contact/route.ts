import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactFormData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  ville: string;
  codePostal: string;
  description: string;
  source?: string;
}

interface SolutravoResponse {
  error: boolean;
  quotation_id?: number;
  errors?: Record<string, string[]>;
}

// Fonction pour envoyer le lead à Solutravo
async function sendToSolutravo(data: {
  name: string;
  first_name: string;
  tel: string;
  email: string;
  postal_code: string;
  town: string;
  project: string;
}): Promise<{ success: boolean; quotation_id?: number; error?: string }> {
  const token = process.env.SOLUTRAVO_API_TOKEN;
  const activityId = process.env.SOLUTRAVO_ACTIVITY_ID;

  if (!token || !activityId) {
    console.log("[SOLUTRAVO] Token ou Activity ID non configuré, skip envoi");
    return { success: false, error: "Configuration Solutravo manquante" };
  }

  try {
    console.log("[SOLUTRAVO] Envoi du lead...");
    
    const response = await fetch("https://integration-api.solutravo-app.fr/api/quotations/store", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        "User-Agent": "MaconneriePro/1.0",
      },
      body: JSON.stringify({
        activity_id: parseInt(activityId),
        name: data.name,
        first_name: data.first_name,
        tel: data.tel,
        email: data.email,
        address: data.town, // On utilise la ville comme adresse (champ requis par Solutravo)
        postal_code: data.postal_code,
        town: data.town,
        project: data.project,
        customer_type: 1, // Particulier
      }),
    });

    const result: SolutravoResponse = await response.json();
    
    if (result.error) {
      console.error("[SOLUTRAVO] Erreur:", result.errors);
      return { success: false, error: JSON.stringify(result.errors) };
    }

    console.log("[SOLUTRAVO] Lead envoyé avec succès, ID:", result.quotation_id);
    return { success: true, quotation_id: result.quotation_id };
  } catch (error) {
    console.error("[SOLUTRAVO] Erreur lors de l'envoi:", error);
    return { success: false, error: String(error) };
  }
}

export async function POST(request: NextRequest) {
  console.log("[CONTACT API] Requête reçue");
  
  try {
    const body: ContactFormData = await request.json();
    const { nom, prenom, email, telephone, ville, codePostal, description } = body;
    
    console.log("[CONTACT API] Données reçues:", { nom, prenom, email, telephone, ville, codePostal, descLength: description?.length });

    // Validate required fields
    if (!nom || !prenom || !email || !telephone || !ville || !codePostal || !description) {
      console.log("[CONTACT API] Champs manquants");
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }
    
    // Validate nom
    if (nom.length < 2) {
      console.log("[CONTACT API] Nom trop court:", nom);
      return NextResponse.json(
        { error: "Nom invalide" },
        { status: 400 }
      );
    }
    
    // Validate prenom
    if (prenom.length < 2) {
      console.log("[CONTACT API] Prénom trop court:", prenom);
      return NextResponse.json(
        { error: "Prénom invalide" },
        { status: 400 }
      );
    }
    
    // Validate ville
    if (ville.length < 2) {
      console.log("[CONTACT API] Ville invalide:", ville);
      return NextResponse.json(
        { error: "Ville invalide" },
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

    // Verify env var
    if (!process.env.RESEND_API_KEY) {
      console.error("[CONTACT API] RESEND_API_KEY non configuré");
      return NextResponse.json(
        { error: "Configuration email manquante sur le serveur" },
        { status: 500 }
      );
    }
    
    console.log("[CONTACT API] Initialisation Resend...");
    const resend = new Resend(process.env.RESEND_API_KEY);

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
    const emailTo = process.env.EMAIL_TO || "maxime.marsal18@gmail.com";
    
    console.log("[CONTACT API] Envoi email à:", emailTo);
    
    const { data, error } = await resend.emails.send({
      from: "Maconnerie Pro <onboarding@resend.dev>",
      to: [emailTo],
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
                <div class="label">Prénom :</div>
                <div class="value">${prenom}</div>
              </div>
              <div class="field">
                <div class="label">Nom :</div>
                <div class="value">${nom}</div>
              </div>
              <div class="field">
                <div class="label">Email :</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Telephone :</div>
                <div class="value">${telephone}</div>
              </div>
              <div class="field">
                <div class="label">Ville :</div>
                <div class="value">${ville}</div>
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
    });

    if (error) {
      console.error("[CONTACT API] Erreur Resend:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email", details: error.message },
        { status: 500 }
      );
    }

    console.log("[CONTACT API] Email envoyé avec succès:", data?.id);

    // Envoi à Solutravo
    const solutravoResult = await sendToSolutravo({
      name: nom,
      first_name: prenom,
      tel: telephone,
      email,
      postal_code: codePostal,
      town: ville,
      project: description,
    });

    return NextResponse.json(
      { 
        message: "Demande envoyée avec succès", 
        emailId: data?.id,
        solutravo: solutravoResult.success ? { quotation_id: solutravoResult.quotation_id } : null
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CONTACT API] Erreur:", error);
    const err = error as { message?: string };
    return NextResponse.json(
      { 
        error: "Erreur lors de l'envoi",
        message: err.message
      },
      { status: 500 }
    );
  }
}
