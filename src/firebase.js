import firebase from "firebase/app";
import "firebase/firestore";
import { apiKey, messagingSenderId, appId, measurementId } from "../.env.js";

const config = {
  apiKey,
  authDomain: "my-golf-performance.firebaseapp.com",
  databaseURL: "https://my-golf-performance.firebaseio.com",
  projectId: "my-golf-performance",
  storageBucket: "my-golf-performance.appspot.com",
  messagingSenderId,
  appId,
  measurementId
};
// Initialize Firebase
firebase.initializeApp(config);

export const firestore = firebase.firestore();

firestore.settings({ timestampsInSnapshots: true });

window.firebase = firebase;

export default firebase;
