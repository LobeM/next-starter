import nodemailer from "nodemailer";

import { env } from "@/env/server";

const transporter = nodemailer.createTransport({
  host: "smpt.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: env.NODEMAILER_USER,
    pass: env.NODEMAILER_APP_PASSWORD,
  },
});

export default transporter;
