import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file into process.env

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const replaceEnvVariables = () => {
  const swPath = path.join(__dirname, '../public/firebase-messaging-sw.js');
  let swFile = fs.readFileSync(swPath, 'utf8');

  // Use process.env to access environment variables in Node.js scripts
  swFile = swFile.replace('%%API_KEY%%', process.env.VITE_API_KEY)
                 .replace('%%AUTH_DOMAIN%%', process.env.VITE_AUTH_DOMAIN)
                 .replace('%%PROJECT_ID%%', process.env.VITE_PROJECT_ID)
                 .replace('%%MESSAGING_SENDER_ID%%', process.env.VITE_MESSAGING_SENDER_ID)
                 .replace('%%APP_ID%%', process.env.VITE_APP_ID);

  fs.writeFileSync(swPath, swFile);
};

replaceEnvVariables();