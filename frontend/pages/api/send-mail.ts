import nodemailer from "nodemailer";
import { Request, Response } from "express";

export default async function handler(req: Request, res: Response) {
  const message = {
    from: `${req.body.email}`,
    to: process.env.SMTP_USER,
    subject: `Message from ${req.body.email}. ${req.body.firstname} ${req.body.lastname}`,
    text: req.body.message,
  };

  const transporter = nodemailer.createTransport({
    host: String(process.env.SMTP_HOST),
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  if (req.method === "POST") {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        res.status(404).json({
          error: `Connection refused at ${err}`,
        });
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  }
}
