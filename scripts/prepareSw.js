const fs = require('fs');
const path = require('path');

const replaceEnvVariables = () => {
  const swPath = path.join(__dirname, '../public/firebase-messaging-sw.js');
  let swFile = fs.readFileSync(swPath, 'utf8');

  swFile = swFile.replace('%%API_KEY%%', process.env.API_KEY)
                 .replace('%%AUTH_DOMAIN%%', process.env.AUTH_DOMAIN)
                 .replace('%%PROJECT_ID%%', process.env.PROJECT_ID)
                 .replace('%%MESSAGING_SENDER_ID%%', process.env.MESSAGING_SENDER_ID)
                 .replace('%%APP_ID%%', process.env.APP_ID);

  fs.writeFileSync(swPath, swFile);
};

replaceEnvVariables();