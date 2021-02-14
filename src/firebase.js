import firebase from "firebase/app";
import "firebase/firestore";
import { API_KEY } from "../.env.js";

const config = {
  apiKey: API_KEY,
  authDomain: "my-golf-performance.firebaseapp.com",
  databaseURL: "https://my-golf-performance.firebaseio.com",
  projectId: "my-golf-performance",
  storageBucket: "my-golf-performance.appspot.com",
  messagingSenderId: "452169151108",
  appId: "1:452169151108:web:3fa60e8e502ea366d548d1",
  measurementId: "G-BX2E8K3SS6"
};
// Initialize Firebase
firebase.initializeApp(config);

export const firestore = firebase.firestore();

firestore.settings({ timestampsInSnapshots: true });

window.firebase = firebase;

export default firebase;
