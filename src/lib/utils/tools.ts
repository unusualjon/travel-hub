import { fetchEvents } from '$src/integration/calendar.svelte';
import { events } from '$lib/stores/local';

export const loadEvents = async () => {
	const eventsData = await fetchEvents();
	events.set(eventsData);
	return eventsData;
};
