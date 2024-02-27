import { nodemailerTransport } from "@/app/[locale]/api/nodemailerTransport";
import { ConstructorModel } from "@/app/[locale]/context/constructorContext";
import { NextResponse, type NextRequest } from "next/server";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const modelsList = (body.modelsInBag as ConstructorModel[]).map((model) => {
    return `<hr/>
      <p><strong>Model: </strong> ${model.model}</p>
      <p><strong>Solar Cell Technology: </strong> ${model.solarCellTechnology}</p>
      <p><strong>Module Specifation: </strong> ${model.moduleSpecification}</p>
      <p><strong>Module Color: </strong> ${model.moduleColor}</p>
      <p><strong>Back Cover: </strong> ${model.backCover}</p>
      <p><strong>Frame Color: </strong> ${model.frameColor}</p>
      <p><strong>Module Dimension: </strong> ${model.moduleDimension.length}x${model.moduleDimension.width} (L,mm)x(W,mm)</p>
      <p><strong>Power Range: </strong> ${model.powerRange.from}-${model.powerRange.to} W</p>
      <p><strong>Applications: </strong> ${model.applications}</p>`;
  });

  const mailOptions: Mail.Options = {
    from: process.env.APP_EMAIL,
    to: process.env.APP_EMAIL,
    subject: `Get a Quote Request`,
    html: `<p><strong>Client information</strong></p>
    <p><strong>Name: </strong> ${body.name}</p>
    <p><strong>Email: </strong> ${body.email}</p>
    <p><strong>Phone number: </strong> ${body.code + body.phone}</p>
    <p><strong>Comment: </strong> ${body.comment}</p>
    <p><strong>Order Information:</strong></p>
    ${modelsList}`,
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
