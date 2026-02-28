import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

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

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    // Development: Use Vite middleware
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production: Serve static files from 'dist'
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
