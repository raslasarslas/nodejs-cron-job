require('dotenv').config();
import SparkPost from 'sparkpost';
import { MailMessage } from './MailMessage';
import { emailBody } from './emailBody';

export const sparky = new SparkPost(process.env.SPARK_POST_API_KEY);

export const send = async (message: MailMessage, attachments) => {
  if (message.templateId) {
    return sparky.transmissions.send({
      content: {
        from: 'no-replay@company.com',
        subject: 'Overdue!',
        html: emailBody,
        attachments,
        use_draft_template: false
      },
      options: {
        sandbox: false
      },
      recipients: (typeof message.to === 'string'
        ? [message.to]
        : message.to
      ).map(address => {
        return { address };
      }),
      substitution_data: {
        ...message.substitutionData
      }
    });
  }
};
