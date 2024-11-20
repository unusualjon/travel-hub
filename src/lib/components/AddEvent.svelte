<script lang="ts">
	import type { EventType } from '$lib/utils/types';

	const { onCancel, onSubmit }: { onCancel: Function; onSubmit: Function } = $props();

	const event = $state<EventType>({
		title: '',
		description: '',
		start: '',
		end: '',
		location: '',
		maxParticipants: 0
	});

	let error = $state('');
</script>

<div class="w-full rounded-lg bg-white shadow-xl">
	<div class="flex items-center justify-between border-b p-4">
		<h2 class="text-xl font-semibold">Add Tour Event</h2>
	</div>

	<div class="p-4">
		<form class="space-y-4" onsubmit={() => onSubmit(event)}>
			{#if error}
				<div
					class="flex items-center gap-2 rounded border border-red-200 bg-red-50 px-4 py-3 text-red-700"
				>
					<p>{error}</p>
				</div>
			{/if}

			<div>
				<label for="title" class="mb-1 block text-sm font-medium text-gray-700"> Title * </label>
				<input
					type="text"
					id="title"
					bind:value={event.title}
					class="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500"
					required
				/>
			</div>

			<div>
				<label for="description" class="mb-1 block text-sm font-medium text-gray-700">
					Description
				</label>
				<textarea
					id="description"
					bind:value={event.description}
					rows="3"
					class="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500"
				></textarea>
			</div>

			<div class="grid grid-cols-2 gap-4">
				<div>
					<label for="startDate" class="mb-1 block text-sm font-medium text-gray-700">
						Start Date *
					</label>
					<input
						type="date"
						id="startDate"
						bind:value={event.start}
						class="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500"
						required
					/>
				</div>
				<div>
					<label for="endDate" class="mb-1 block text-sm font-medium text-gray-700">
						End Date *
					</label>
					<input
						type="date"
						id="endDate"
						bind:value={event.end}
						class="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500"
						required
					/>
				</div>
			</div>

			<div class="grid grid-cols-2 gap-4">
				<div>
					<label for="location" class="mb-1 block text-sm font-medium text-gray-700">
						Location
					</label>
					<input
						type="text"
						id="location"
						bind:value={event.location}
						class="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				<div>
					<label for="maxParticipants" class="mb-1 block text-sm font-medium text-gray-700">
						Maximum Participants
					</label>
					<input
						type="number"
						id="maxParticipants"
						bind:value={event.maxParticipants}
						min="1"
						class="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500"
					/>
				</div>
			</div>

			<div class="flex justify-end gap-2">
				<button
					onclick={() => (onCancel ? onCancel() : '')}
					type="button"
					class="rounded-md bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200"
				>
					Cancel
				</button>
				<button
					type="submit"
					class="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
				>
					Create Event
				</button>
			</div>
		</form>
	</div>
</div>
