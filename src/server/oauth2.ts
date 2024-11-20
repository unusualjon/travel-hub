import { google } from 'googleapis';
import { AUTH_CIENT_ID, AUTH_CIENT_SECRET } from '$env/static/private';

export const oauth2Client = new google.auth.OAuth2(
	AUTH_CIENT_ID,
	AUTH_CIENT_SECRET,
	'http://localhost:5173/api/auth/callback'
);
