import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { auth, db, FirestoreCollections } from '$src/integration/firebase';
import { addDoc, getDocs } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { events, toggleAddEventModal } from '$src/lib/stores/local';
import { user } from '$src/lib/stores/auth';

export const initCalendar = (element: HTMLElement) => {
	if (!element) return null;

	const calendar = new Calendar(element, {
		plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
		initialView: 'dayGridMonth',
		headerToolbar: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,listWeek'
		},
		selectable: true,
		select: () => {
			toggleAddEventModal();
		}
	});

	const unsubscribe = user.subscribe((logged) => {
		if (logged) {
			events.subscribe((newEvents) => {
				calendar.removeAllEventSources();
				calendar.addEventSource(newEvents);
			});
		}
	});

	$effect(() => {
		return () => {
			unsubscribe();
		};
	});
	return calendar;
};

export async function fetchEvents() {
	const user = auth.currentUser;
	if (!user) {
		throw new Error('Not authenticated');
	}

	// const token = await user.getIdToken();

	const snapshot = await getDocs(collection(db, FirestoreCollections.events));
	const events = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

	return events;
}

export async function createEvent(eventData: {
	title: string;
	description: string;
	start: string;
	end: string;
}) {
	const user = auth.currentUser;
	if (!user) {
		throw new Error('Not authenticated');
	}

	const doc = await addDoc(collection(db, FirestoreCollections.events), eventData);
	//TODO: Add events into calendar API

	// const token = await user.getIdToken();
	// const response = await fetch('/api/setEvents', {
	// 	method: 'POST',
	// 	headers: {
	// 		Authorization: `Bearer ${token}`,
	// 		'Content-Type': 'application/json'
	// 	},
	// 	body: JSON.stringify(eventData)
	// });

	// if (!response.ok) {
	// 	throw new Error('Failed to create event');
	// }
	return doc;
}
