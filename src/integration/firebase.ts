import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBUHraxnV0UQOshxP_4oiqmc6wIpvNnsck',
	authDomain: 'travel-hub-host.firebaseapp.com',
	projectId: 'travel-hub-host',
	storageBucket: 'travel-hub-host.firebasestorage.app',
	messagingSenderId: '584212780241',
	appId: '1:584212780241:web:8df4509b1ccfb07ccc61f0',
	measurementId: 'G-V12HFQ503J'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
