importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBC1z1-LWxPMExp2SmxZhIQFpL2cYjz9KM",
  authDomain: "pwa-escolar-7a9d2.firebaseapp.com",
  projectId: "pwa-escolar-7a9d2",
  storageBucket: "pwa-escolar-7a9d2.firebasestorage.app",
  messagingSenderId: "444090664948",
  appId: "1:444090664948:web:521b7ead26b987c2a79ba1"
});

const messaging = firebase.messaging();
