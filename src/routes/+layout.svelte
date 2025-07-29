<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '../styles/app.css';
	import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
	setBasePath('/node_modules/@shoelace-style/shoelace/dist');

	import '@shoelace-style/shoelace/dist/themes/light.css';

	import '@shoelace-style/shoelace/dist/components/button/button.js';
	import '@shoelace-style/shoelace/dist/components/icon/icon.js';
	import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
	import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
	import '@shoelace-style/shoelace/dist/components/menu/menu.js';
	import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
</script>

<slot />
