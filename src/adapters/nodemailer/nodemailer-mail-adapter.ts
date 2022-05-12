import nodemailer from 'nodemailer';

import { MailAdapter, MailAdapterData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "fd5aa4f1afe949",
    pass: "92f961b7621d03"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: MailAdapterData) {
    transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Jordevá Lucas <usuario@gmail.com>',
      subject,
      html: body,
    })
  }
}