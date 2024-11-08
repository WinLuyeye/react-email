import * as Raect from "react";

import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Link,
} from "@react-email/components";

interface EmailTemplateProps {
  email: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ email }) => {
  return (
    <html>
      <head>
        <Preview>Confirmez votre abonnement à notre newsletter</Preview>
        <body className="bg-gray-100 text-gray-500">
          <Container className="bg-white rounded-lg shadow-md p-6">
            <Heading className="text-xl font-bold mb-4">
              Bienvenu à notre newsletter
            </Heading>
            <Text className="mt-4">Bonjour, merci pour votre inscription</Text>
            <Text className="mt-4">
              Veuillez confirmer votre abonnement en cliquant sur le lien
              cièdessous
            </Text>
            <Link className="text-blue-600 underline" href="https://google.com">
              Confirmer votre abonnement
            </Link>

            <Text className="mt-4">
              Si vous ne vous êtes pas inscrit, veuillez ignorer cet email.
            </Text>
          </Container>
        </body>
      </head>
    </html>
  );
};

export default EmailTemplate;
