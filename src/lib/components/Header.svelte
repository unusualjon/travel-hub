<script lang="ts">
	import { login, logout, user } from '$lib/stores/auth';
	import Icon from '@iconify/svelte';
	import { toggleAddEventModal } from '$lib/stores/local';

	const handleAuth = async () => {
		if ($user) {
			await logout();
		} else {
			await login();
		}
	};
</script>

<header class="mt-2">
	<nav
		class="mx-auto flex h-12 w-full max-w-7xl flex-row items-center justify-between rounded-full bg-white px-3 shadow-lg"
	>
		<a href="/" class="text-lg font-bold text-slate-800">Travel Hub</a>
		{#if $user}
			<div class="flex flex-row items-center divide-x divide-slate-400 text-slate-700">
				<button onclick={toggleAddEventModal} class="flex items-center gap-1 px-2">
					<Icon icon="carbon:tour" />
					Add Tour
				</button>
				<button class="flex items-center gap-1 px-2">
					<Icon icon="mdi:chat-outline" />
					Chat
				</button>
			</div>
		{/if}

		<button onclick={handleAuth} class="hover:font-bold">
			{#if $user}
				<Icon icon="uil:signout" width="26px" />
			{:else}
				Log in
			{/if}
		</button>
	</nav>
</header>
