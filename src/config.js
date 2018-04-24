import firebase from 'firebase';


export const appName = "react-adv-code";

export const firebaseConfig = {
  apiKey: "AIzaSyCQ7JGtnq348OFBcv5qWhVQoXuUk4Fld6w",
  authDomain: `${appName}.firebaseapp.com`,
  databaseURL: `https://${appName}.firebaseio.com`,
  projectId: `${appName}`,
  storageBucket: `${appName}.appspot.com`,
  messagingSenderId: "488831070179"
};

firebase.initializeApp(firebaseConfig);