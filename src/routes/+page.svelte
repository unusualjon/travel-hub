<script lang="ts">
	import { initCalendar } from '$src/integration/calendar';

	let calendarRef: HTMLElement;

	$effect(() => {
		if (calendarRef) {
			const calendar = initCalendar(calendarRef);
			calendar?.render();
		}
	});
</script>

<svelte:head>
	<title>Travel Hub Host for joining travel group</title>
</svelte:head>

<div class="w-full">
	<div id="calendar" bind:this={calendarRef} class="w-full"></div>
</div>
