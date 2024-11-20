<script lang="ts">
	import Icon from '@iconify/svelte';

	let { show = $bindable(false), children } = $props();
</script>

{#if show}
	<div class="fixed z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-20">
		<div class="relative flex w-3/4 flex-col rounded bg-white p-2 lg:w-2/4">
			<button
				class="absolute right-0 top-0 w-fit rounded-full p-[3px]"
				onclick={(e) => {
					e.preventDefault();
					e.stopPropagation();
					show = false;
				}}
			>
				<Icon icon="majesticons:multiply" width="20px" />
			</button>
			{@render children()}
		</div>
	</div>
{/if}
