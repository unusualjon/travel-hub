<script lang="ts">
	import { initCalendar } from '$src/integration/calendar.svelte';
	import { user } from '$src/lib/stores/auth';
	import { loadEvents } from '$src/lib/utils/tools';

	let calendarRef: HTMLElement;

	$effect(() => {
		if (calendarRef) {
			const calendar = initCalendar(calendarRef);
			calendar?.render();

			if ($user) {
				loadEvents();
			}
		}
	});
</script>

<svelte:head>
	<title>Travel Hub Host for joining travel group</title>
</svelte:head>

<div class="w-full">
	<div id="calendar" bind:this={calendarRef} class="w-full"></div>
</div>
