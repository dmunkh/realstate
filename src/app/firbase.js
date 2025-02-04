import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC1OxZRE7aCNAdrBwgKn5Uq7dZwVnV6pCQ',
  authDomain: 'myapp-77b70.firebaseapp.com',
  projectId: 'myapp-77b70',
  storageBucket: 'myapp-77b70.firebasestorage.app',
  messagingSenderId: '582877150388',
  appId: '1:582877150388:web:d1b64ee0484a0ce7aeebe1',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
