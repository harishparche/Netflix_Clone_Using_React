import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyB38P9nkqWsWdhDZ1NWdCKpgZSCEan0MhU",
  authDomain: "netflixclone-e2599.firebaseapp.com",
  projectId: "netflixclone-e2599",
  storageBucket: "netflixclone-e2599.appspot.com",
  messagingSenderId: "1065901256103",
  appId: "1:1065901256103:web:838edf8e9b1c5b58a8da82"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };