<script>
	import { onMount } from 'svelte';

	function isDarkMode() {
		if (import.meta.env.SSR) {
			return false;
		}

		const sessionData = window.sessionStorage.getItem('darkMode');
		if (sessionData) {
			return 'true' === sessionData;
		}

		return window.matchMedia('(prefers-color-scheme: dark)').matches;
	}

	function toggleColorScheme(enableDarkMode = false) {
		if (import.meta.env.SSR) {
			return;
		}
		const sessionData = window.sessionStorage.getItem('darkMode');
		if (sessionData && enableDarkMode === ('true' === sessionData)) {
			return;
		}

		if (enableDarkMode) {
			document.body.classList.remove('light');
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
			document.body.classList.add('light');
		}

		window.sessionStorage.setItem('darkMode', enableDarkMode.toString());
	}

	onMount(() => {
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
			darkMode = e.matches;
		});
	});

	let darkMode = isDarkMode();

	$: {
		toggleColorScheme(darkMode);
	}

	function handleCheckboxChange(event) {
		darkMode = event.target.checked;
	}
</script>

<div class="toggle-switch">
	<label class="switch-label">
		<input
			type="checkbox"
			class="checkbox"
			bind:checked={darkMode}
			on:change={handleCheckboxChange}
		/>
		<span class="slider"></span>
	</label>
</div>

<style lang="scss">
	.toggle-switch {
		position: relative;
		width: 60px;
		--light: hsl(38, 15%, 90%);
		--dark: hsl(188 3% 11%);
	}

	.switch-label {
		position: absolute;
		width: 100%;
		height: 32px;
	}

	.checkbox {
		position: absolute;
		display: none;
	}

	.slider {
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 9999px;
		-webkit-transition: 0.3s;
		transition: 0.3s;
		cursor: pointer;
		border: 1px solid var(--primary-color);
	}

	.checkbox:checked ~ .slider {
		border: 1px solid var(--primary-color);
	}

	.slider::before {
		content: '';
		position: absolute;
		top: 4px;
		left: 4px;
		width: 22px;
		height: 22px;
		border-radius: 50%;
		-webkit-box-shadow: none;
		box-shadow: none;
		background-color: var(--primary-color);
		-webkit-transition: 0.3s;
		transition: 0.3s;
	}

	.checkbox:checked ~ .slider::before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
		background-color: var(--background-color);
		-webkit-box-shadow: inset 12px -4px 0px 0px var(--background-color);
		box-shadow: inset 12px -4px 0px 0px var(--primary-color);
	}
</style>
