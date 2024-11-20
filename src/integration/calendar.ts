import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { auth } from '$src/integration/firebase';

export const initCalendar = (element: HTMLElement) => {
	if (!element) return null;

	const calendar = new Calendar(element, {
		plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
		initialView: 'dayGridMonth',
		headerToolbar: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,listWeek'
		}
	});
	return calendar;
};

export async function fetchEvents() {
	const user = auth.currentUser;
	if (!user) {
		throw new Error('Not authenticated');
	}

	const token = await user.getIdToken();
	console.log({ token });

	const response = await fetch('/api/getEvents', {
		headers: {
			Authorization: `Bearer ${token}`
		}
	});

	if (!response.ok) {
		throw new Error('Failed to fetch events');
	}

	return response.json();
}

export async function createEvent(eventData: {
	title: string;
	description: string;
	startTime: string;
	endTime: string;
}) {
	const user = auth.currentUser;
	if (!user) {
		throw new Error('Not authenticated');
	}

	const token = await user.getIdToken();
	const response = await fetch('/api/setEvents', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(eventData)
	});

	if (!response.ok) {
		throw new Error('Failed to create event');
	}

	return response.json();
}
