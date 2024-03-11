/* eslint-env serviceworker */
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

self.firebase.initializeApp({
  apiKey: "%%API_KEY%%",
  authDomain: "%%AUTH_DOMAIN%%",
  projectId: "%%PROJECT_ID%%",
  messagingSenderId: "%%MESSAGING_SENDER_ID%%",
  appId: "%%APP_ID%%",
});

const messaging = self.firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});