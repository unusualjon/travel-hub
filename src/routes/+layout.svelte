<script lang="ts">
	import '$lib/styles/app.css';
	import Footer from '$src/lib/components/Footer.svelte';
	import Header from '$src/lib/components/Header.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import AddEvent from '$lib/components/AddEvent.svelte';
	import type { EventType } from '$lib/utils/types';
	import { showAddModal, toggleAddEventModal } from '$src/lib/stores/local';
	import { createEvent } from '$src/integration/calendar.svelte';
	import { loadEvents } from '$src/lib/utils/tools';

	let { children } = $props();

	const addTourPlan = async (eventDetails: EventType) => {
		await createEvent(eventDetails);
		await loadEvents();
		toggleAddEventModal();
	};
</script>

<div class="flex h-full w-full flex-col bg-slate-50">
	<Header />
	<main class="mx-auto mt-10 w-full max-w-7xl">
		{@render children()}
	</main>
	<Footer />

	<Modal bind:show={$showAddModal}>
		<AddEvent
			onCancel={() => toggleAddEventModal()}
			onSubmit={(data: EventType) => addTourPlan({ ...data })}
		/>
	</Modal>
</div>
