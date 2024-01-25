import { nodemailerTransport } from "@/app/[locale]/api/nodemailerTransport";
import { type NextRequest, NextResponse } from "next/server";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { name, interest, budget, email, phone, code, comment } =
    await request.json();

  const mailOptions: Mail.Options = {
    from: process.env.APP_EMAIL,
    to: process.env.APP_EMAIL,
    subject: `Contact Me Request`,
    html: `<p><strong>Client information</strong></p>
    <p><strong>Name: </strong> ${name}</p>
    <p><strong>Email: </strong> ${email}</p>
    <p><strong>Phone number: </strong> ${code + phone}</p>
    <p><strong>Interested in: </strong> ${interest}</p>
    <p><strong>Budget: </strong> ${budget}</p>
    <p><strong>Comment: </strong> ${comment}</p>`,
  };

  const sendMailPromise = async () => {
    try {
      await nodemailerTransport.sendMail(mailOptions);
    } catch (error) {
      throw error;
    }
  };

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
