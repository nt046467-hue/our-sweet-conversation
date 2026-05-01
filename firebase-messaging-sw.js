importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyDfmozB3o0fS2INonOtliAzO4okLWE9Rsk",
  authDomain: "our-sweet-conversation.firebaseapp.com",
  databaseURL: "https://our-sweet-conversation-default-rtdb.firebaseio.com",
  projectId: "our-sweet-conversation",
  storageBucket: "our-sweet-conversation.firebasestorage.app",
  messagingSenderId: "561504998058",
  appId: "1:561504998058:web:6f1819edd37adacdeaf6d3"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || '💌 New message';
  const body = payload.notification?.body || payload.data?.content || '';
  self.registration.showNotification(title, {
    body,
    icon: '/favicon.ico'
  });
});
