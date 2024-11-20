import { get, writable } from 'svelte/store';

export const showAddModal = writable(false);
export const events = writable<{ id: string }[] | []>([]);

export const toggleAddEventModal = () => {
	showAddModal.set(!get(showAddModal));
};
