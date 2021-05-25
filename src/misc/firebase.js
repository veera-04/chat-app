import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyA1Yg1foivhHKaTa4EgC2Gbk_xz4CEja4I',
  authDomain: 'chat-app-1570a.firebaseapp.com',
  projectId: 'chat-app-1570a',
  storageBucket: 'chat-app-1570a.appspot.com',
  messagingSenderId: '831536017055',
  appId: '1:831536017055:web:27ec4e54aab8bd6dbb7caa',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
