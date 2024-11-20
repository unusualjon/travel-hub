import { oauth2Client } from '$src/server/oauth2';
import { error, json } from '@sveltejs/kit';
import { google } from 'googleapis';

export async function GET({ request }) {
	try {
		const authHeader = request.headers.get('Authorization');
		if (!authHeader?.startsWith('Bearer ')) {
			throw error(401, { message: 'No authorization token provided' });
		}

		const accessToken = authHeader.split('Bearer ')[1];

		oauth2Client.setCredentials({
			access_token: accessToken
		});

		const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

		const events = await calendar.events.list({
			calendarId: 'primary',
			timeMin: new Date().toISOString(),
			maxResults: 10,
			singleEvents: true,
			orderBy: 'startTime'
		});

		if (!events.data.items) {
			return json([]);
		}

		return json(events.data.items);
	} catch (err) {
		console.error('Calendar API error:', err);
		return error(500, { message: 'Failed to fetch calendar events' });
	}
}
