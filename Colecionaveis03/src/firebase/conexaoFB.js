import firebase from 'firebase';
import 'firebase/firestore';

 const firebaseConfig = {
    apiKey: "AIzaSyA1fsvlybv8Dno9_5baWQgGfjUhV1RKVCU",
    authDomain: "colecionaveisfb-ac09c.firebaseapp.com",
    databaseURL: "https://colecionaveisfb-ac09c.firebaseio.com",
    projectId: "colecionaveisfb-ac09c",
    storageBucket: "colecionaveisfb-ac09c.appspot.com",
    messagingSenderId: "523535336859",
    appId: "1:523535336859:web:81137eeb9cfcdaf077cd3e",
    measurementId: "G-GH0Y5HFLPB"
  };

 var app = firebase.initializeApp(firebaseConfig);

 export const conexaoFS = app.firestore();