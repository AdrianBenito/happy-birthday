<script lang="ts">
	const images = [
		'./assets/images/dina1.jpg',
		'./assets/images/dina2.jpg',
		'./assets/images/dina3.jpg',
		'./assets/images/dina4.jpg',
		'./assets/images/dinaa2.jpg',
		'./assets/images/dinaa3.jpg',
		'./assets/images/dinaa4.jpg'
	];
	const images2 = [
		'./assets/images/dinaaa.jpg',
		'./assets/images/d5.jpg',
		'./assets/images/d6.jpg',
		'./assets/images/d7.jpg',
		'./assets/images/d9.jpg',
		'./assets/images/d10.jpg',
		'./assets/images/d11.jpg'
	];
	const images3 = [
		'./assets/images/dinaa5.jpg',
		'./assets/images/d12.jpg',
		'./assets/images/d13.jpg',
		'./assets/images/d14.jpg',
		'./assets/images/d15.jpg',
		'./assets/images/d16.jpg',
		'./assets/images/d17.jpg'
	];

	const sweetWords = [
		'Tesoro',
		'Amor mío',
		'Mi luz',
		'Preciosa',
		'Mi paz',
		'Dulzura',
		'Estrellita',
		'Mi alegría',
		'Corazón',
		'Cariño'
	];

	const flirtyWords = [
		'Bebé',
		'Tentación',
		'Guapísima',
		'Mi diosa',
		'Sexy',
		'Bombón',
		'🔥',
		'Tuya',
		'Delicia',
		'Misteriosa'
	];

	const poeticWords = [
		'Encanto',
		'Brillante',
		'Radiante',
		'Valiente',
		'Magnética',
		'Especial',
		'Arcoíris',
		'Fuerza pura',
		'Mariposa libre',
		'Magia'
	];

	const spacing = 125;
	const startLeft = 140;
	const topFixed = [60, 230, 400];

	function generateStyles(imagesArray: string[], rowIndex: number) {
		return imagesArray.map((_, index) => {
			const angle = Math.floor(Math.random() * 20 - 10);
			const left = startLeft + index * spacing;
			return {
				transform: `rotate(${angle}deg)`,
				top: `${topFixed[rowIndex]}px`,
				left: `${left}px`
			};
		});
	}

	function randomWordsFrom(array: string[]) {
		return array.map(() => array[Math.floor(Math.random() * array.length)]);
	}

	const prettyWords1 = randomWordsFrom(sweetWords);
	const prettyWords2 = randomWordsFrom(poeticWords);
	const prettyWords3 = randomWordsFrom(flirtyWords);

	const styles = generateStyles(images, 0);
	const styles2 = generateStyles(images2, 1);
	const styles3 = generateStyles(images3, 2);

	let dialogRef: HTMLElement;
	let selectedImage = '';
	let selectedWord = '';

	function openDialog(image: string, word: string) {
		selectedImage = image;
		selectedWord = word;
		(dialogRef as any).show();
	}
</script>

<div class="polaroid-wall">
	{#each images as image, i}
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<div
			class="photo"
			on:click={() => openDialog(image, prettyWords1[i])}
			style={`top: ${styles[i].top}; left: ${styles[i].left}; transform: ${styles[i].transform};`}
		>
			<img class="img" src={image} alt="Polaroid Wall" />
			<img src="./assets/images/pin.png" class="pin" alt="pin" />
			<div class="pretty-word">{prettyWords1[i]}</div>
		</div>
	{/each}
	{#each images2 as image, i}
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<div
			class="photo"
			on:click={() => openDialog(image, prettyWords2[i])}
			style={`top: ${styles2[i].top}; left: ${styles2[i].left}; transform: ${styles2[i].transform};`}
		>
			<img class="img" src={image} alt="Polaroid Wall" />
			<img src="./assets/images/pin.png" class="pin" alt="pin" />
			<div class="pretty-word">{prettyWords2[i]}</div>
		</div>
	{/each}
	{#each images3 as image, i}
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<div
			class="photo"
			on:click={() => openDialog(image, prettyWords3[i])}
			style={`top: ${styles3[i].top}; left: ${styles3[i].left}; transform: ${styles3[i].transform};`}
		>
			<img class="img" src={image} alt="Polaroid Wall" />
			<img src="./assets/images/pin.png" class="pin" alt="pin" />
			<div class="pretty-word">{prettyWords3[i]}</div>
		</div>
	{/each}
</div>

<sl-dialog bind:this={dialogRef} class="dialog">
	<img src={selectedImage} alt="Imagen seleccionada" style="width: 100%; border-radius: 10px;" />
	<p style="text-align:center; font-size: 1.5rem; margin-top: 1rem;">{selectedWord}</p>
</sl-dialog>

<style>
	.polaroid-wall {
		position: relative;
		width: 100%;
		height: 620px;
		background-image: url('/happy-birthday/assets/images/corkboard.jpg');
		background-size: cover;
		overflow: hidden;
		margin: 0 100px;
		max-width: 1200px;
		min-width: 1000px;

		border: 6px ridge #d2a679;
		box-shadow: 0 0 20px 12px rgba(0, 0, 0, 0.3);
		border-radius: 12px;
	}

	.photo {
		position: absolute;
		width: 120px;
		padding: 10px;
		background: white;
		border: 1px solid #ccc;
		box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
		transform-origin: center center;
		transition: all 0.5s ease;
	}

	.img {
		width: 100%;
		height: auto;
		display: block;
	}

	.photo:hover {
		z-index: 10;
		transform: rotate(0deg);
		scale: 1.3;
		cursor: zoom-in;
		box-shadow: 0px 0px 8px 6px rgb(247 136 217 / 30%);
	}

	.pin {
		width: 40px;
		height: 40px;
		position: absolute;
		top: 4%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.pretty-word {
		display: block;
		height: 20px;
		font-size: 14px;
		text-align: center;
	}

	sl-dialog::part(header) {
		display: none;
	}
</style>
