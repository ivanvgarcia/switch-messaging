import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBd4iS29lV9d58nc9FzWfTpf1tQhlgHDSs",
  authDomain: "switch-messaging.firebaseapp.com",
  databaseURL: "https://switch-messaging.firebaseio.com",
  projectId: "switch-messaging",
  storageBucket: "switch-messaging.appspot.com",
  messagingSenderId: "199190315319"
};

firebase.initializeApp(config);

export default firebase;
