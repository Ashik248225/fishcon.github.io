importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
     apiKey: "AIzaSyA6Ttxd-xrQhriuelpy2C7WLm71c2SRpzk",
     authDomain: "fishcon-436ca.firebaseapp.com",
     projectId: "fishcon-436ca",
     storageBucket: "fishcon-436ca.appspot.com",
     messagingSenderId: "154268067883",
     appId: "1:154268067883:web:9bc8d19fc7c3ee1d10e26e",
     measurementId: "G-HVWZ7S87PP"
   };


firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});