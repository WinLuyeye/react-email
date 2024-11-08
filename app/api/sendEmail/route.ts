import { NextResponse } from "next/server";
import nodemailer from "nodemailer"
import {render} from "@react-email/render"
import EmailTemplate from "@/app/api/components/EmailTemplate";
import { ReactElement } from "react";

export async function POST(request : Request){
    try {
        const {email} = await request.json()

        const transporter = nodemailer.createTransport({
            service : 'Gmail',
            auth :{
                user : process.env.GMAIL_USER,
                pass : process.env.GMAIL_PASS,
            }
        });

        const emailHtml = await render(EmailTemplate({email}) as ReactElement)

        await transporter.sendMail({
            from : process.env.GMAIL_USER,
            to : email,

            subject: "Confirmer votre inscription",
            html : emailHtml
        });
        return NextResponse.json({message : "Email envoyé avec successhandleFormSubmit"}, {status : 200})

    } catch (error) {
        console.error("il y a une erreur côté server ")
        return NextResponse.json({message : "Erreur server", error}, {status : 500})
    }
}