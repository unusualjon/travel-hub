import { writable } from 'svelte/store';
import { auth, provider } from '$src/integration/firebase';
import {
	signInWithPopup,
	signOut,
	onAuthStateChanged,
	type User,
	GoogleAuthProvider
} from 'firebase/auth';

export const user = writable<User | null>(null);

provider.addScope('https://www.googleapis.com/auth/calendar.readonly');
provider.addScope('https://www.googleapis.com/auth/calendar.events');

export const login = async () => {
	try {
		const result = await signInWithPopup(auth, provider);
		user.set(result.user);

		const credential = GoogleAuthProvider.credentialFromResult(result);
		if (credential) {
			return credential.accessToken;
		}
	} catch (error) {
		console.error('Login error:', error);
	}
};

export const logout = async () => {
	try {
		await signOut(auth);
		user.set(null);
	} catch (error) {
		console.error('Logout error:', error);
	}
};

onAuthStateChanged(auth, (firebaseUser) => {
	user.set(firebaseUser);
});
