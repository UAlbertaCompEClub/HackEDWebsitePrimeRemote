importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

var config = {
  apiKey: "AIzaSyDYW4bWAQUA8UmKW_rWK3rJn0e-cJ3aRyk",
  authDomain: "hackedwebapp.firebaseapp.com",
  databaseURL: "https://hackedwebapp.firebaseio.com",
  projectId: "hackedwebapp",
  storageBucket: "hackedwebapp.appspot.com",
  messagingSenderId: "598906308344"
};
  firebase.initializeApp(config);

const messaging = firebase.messaging();