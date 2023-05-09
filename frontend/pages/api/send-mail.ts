import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

// Setting an async function to send a message via nodemailer
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // setting a body of message
  const message = {
    from: `${req.body.email}`,
    to: process.env.SMTP_USER,
    subject: `Message from ${req.body.email}. ${req.body.firstname} ${req.body.lastname}`,
    text: req.body.message,
  };

  // setting a properties for nodemailer
  const transporter = nodemailer.createTransport({
    host: String(process.env.SMTP_HOST),
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // Condition to check content of message

  if (req.method === "POST") {
    if (!req.body.email || !req.body.message || !req.body.firstname) {
      return res.status(400).json({ message: "Bad request!" });
    }
    // defining an async function to send a message
    try {
      await transporter.sendMail(message);
      return res.status(200).json({ success: true });
      //gandling an error
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
  // Returning a http status
  return res.status(400).json({ message: "Bad request!" });
}
