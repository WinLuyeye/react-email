"use client";
import ContactForm from "./api/components/ContactForm";

export default function Home() {
  const handleFormSubmit = async (email: string) => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        console.log("Email envoyé avec succes");
      } else {
        console.log("Erreur lors de l'envoie");
      }
    } catch (error) {
      console.error("Erreur pendant l'envoi du mail", error);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <ContactForm onSubmit={handleFormSubmit} />
    </div>
  );
}
