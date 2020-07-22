import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCczJrEQCwRgJ6B8nmPskinJMKca7_L6fo",
  authDomain: "user-app-be176.firebaseapp.com",
  databaseURL: "https://user-app-be176.firebaseio.com",
  projectId: "user-app-be176",
  storageBucket: "user-app-be176.appspot.com",
  messagingSenderId: "899644117565",
  appId: "1:899644117565:web:ba7efcba10571cfd585054",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
