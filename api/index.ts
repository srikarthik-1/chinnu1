import express from 'express';
import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// Twilio credentials from environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

let twilioClient: twilio.Twilio | null = null;
if (accountSid && authToken) {
  twilioClient = twilio(accountSid, authToken);
}

// API endpoint to send SMS
app.post('/api/send-sms', (req, res) => {
  if (!twilioClient) {
    return res.status(500).json({ success: false, message: 'Twilio client not configured. Check environment variables.' });
  }

  const { to, body } = req.body;

  if (!to || !body) {
    return res.status(400).json({ success: false, message: 'Missing `to` or `body` in request.' });
  }

  twilioClient.messages
    .create({
      body: body,
      from: twilioPhoneNumber,
      to: to,
    })
    .then(message => {
      console.log('SMS sent successfully:', message.sid);
      res.json({ success: true, sid: message.sid });
    })
    .catch(error => {
      console.error('Error sending SMS:', error);
      res.status(500).json({ success: false, message: 'Failed to send SMS.', error: error.message });
    });
});

export default app;
