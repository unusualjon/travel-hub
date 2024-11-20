import { google } from 'googleapis';
import { AUTH_CLIENT_ID, AUTH_CLIENT_SECRET } from '$env/static/private';

export const oauth2Client = new google.auth.OAuth2(
	AUTH_CLIENT_ID,
	AUTH_CLIENT_SECRET,
	'http://localhost:5173/api/auth/callback'
);
