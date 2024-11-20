import { oauth2Client } from '$src/server/oauth2';
import { error, json } from '@sveltejs/kit';
import { google } from 'googleapis';

export async function POST({ request }) {
	// TODO: a placeholder method to add events into calendar
	// not tested

	try {
		const eventData = await request.json();
		const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

		const event = await calendar.events.insert({
			calendarId: 'primary',
			requestBody: {
				summary: eventData.title,
				description: eventData.description,
				start: {
					dateTime: eventData.startTime,
					timeZone: 'UTC'
				},
				end: {
					dateTime: eventData.endTime,
					timeZone: 'UTC'
				}
			}
		});

		return json(event.data);
	} catch (err) {
		console.error('Calendar event creation error:', err);
		throw error(500, 'Failed to create calendar event');
	}
}
