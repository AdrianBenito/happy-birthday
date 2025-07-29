<script lang="ts">
	import MiniPlayer from '$lib/components/MiniPlayer.svelte';
	import PolaroidWall from '$lib/components/PolaroidWall.svelte';
	import confetti from 'canvas-confetti';
	import { onMount } from 'svelte';

	export let message = `Quería hacerte algo especial por tu cumpleaños y aunque sea sencilla y el diseño es un poco desastre, espero de corazón que te guste y que te haga ilusión, porque es algo único, algo que nunca antes te han regalado.\n\nQuiero que sepas lo orgulloso que estoy de ti y del año que has tenido. Has crecido, has evolucionado, y te has superado como persona de una forma preciosa. Aunque estemos atravesando una etapa complicada, quiero que tengas claro que voy a seguir a tu lado, dándote los buenos días cada día del año, cuidándote en cada momento, cocinándote tu plato favorito, viendo por enésima vez El Señor de los Anillos... y sobre todo, compartiendo contigo ese tiempo de calidad.\n\nTe amo con toda mi alma.\nAdrián`;
	export let speed: number = 50;

	let displayed = '';
	let index = 0;

	onMount(() => {
		setInterval(() => {
			confetti({ particleCount: 5, angle: 55, spread: 65, origin: { x: 0 } });
			confetti({ particleCount: 5, angle: 70, spread: 60, origin: { x: 0 } });

			confetti({ particleCount: 5, angle: 125, spread: 60, origin: { x: 1 } });
			confetti({ particleCount: 5, angle: 110, spread: 70, origin: { x: 1 } });

			confetti({ particleCount: 5, angle: 50, spread: 60, origin: { x: 0 } });
			confetti({ particleCount: 5, angle: 75, spread: 70, origin: { x: 0 } });

			confetti({ particleCount: 5, angle: 130, spread: 60, origin: { x: 1 } });
			confetti({ particleCount: 5, angle: 115, spread: 75, origin: { x: 1 } });

			confetti({ particleCount: 5, angle: 60, spread: 65, origin: { x: 0 } });
			confetti({ particleCount: 5, angle: 80, spread: 50, origin: { x: 0 } });

			confetti({ particleCount: 5, angle: 140, spread: 60, origin: { x: 1 } });
			confetti({ particleCount: 5, angle: 110, spread: 60, origin: { x: 1 } });

			confetti({ particleCount: 5, angle: 65, spread: 70, origin: { x: 0 } });
			confetti({ particleCount: 5, angle: 78, spread: 60, origin: { x: 0 } });

			confetti({ particleCount: 5, angle: 135, spread: 65, origin: { x: 1 } });
			confetti({ particleCount: 5, angle: 105, spread: 75, origin: { x: 1 } });
		}, 200);

		const interval = setInterval(() => {
			if (index < message.length) {
				displayed += message[index];
				index++;
			} else {
				clearInterval(interval);
			}
		}, speed);

		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<title>Happy Birthday!!!</title>
</svelte:head>

<main>
	<section>
		<h1>
			<span>Dina</span>
			<span>Feliz cumpleaños</span>
		</h1>

		<p class="dedication">{displayed}</p>
	</section>

	<section>
		<h3>Polaroid Wall</h3>
		<PolaroidWall />
	</section>
</main>

<footer>
	<MiniPlayer />
</footer>

<style>
	.dedication {
		text-align: center;
		position: fixed;
		top: 65%;
		left: 50%;
		margin: 0;
		translate: -50% -50%;

		font-size: 20px;
		padding: 1rem 2rem;
		background: #fff0f5;
		border: 2px solid #ff80ab;
		border-radius: 8px;
		color: #d81b60;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		white-space: pre-wrap;
		min-height: fit-content;
		max-width: 890px;

		animation: fade-away both linear;
		animation-timeline: --scroll;
		animation-range: exit 20% exit 90%;
		transition: all 0.5s ease;

		&:hover {
			scale: 1.2;
			box-shadow: 0px 0px 8px 6px rgb(247 136 217 / 30%);
		}
	}

	.cursor {
		display: inline-block;
		width: 1ch;
		animation: blink 1s step-start infinite;
		color: #d81b60;
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}

	@keyframes scale-up {
		to {
			scale: 1.5;
		}
	}

	@keyframes fade-away {
		to {
			opacity: 0;
		}
	}

	section {
		view-timeline: --scroll;
	}

	p {
		font-size: 12px;
	}

	h1 span:first-child {
		animation: fade-away both linear;
		animation-timeline: --scroll;
		animation-range: exit 20% exit 90%;
	}

	h1 span:last-child {
		animation:
			scale-up both ease-in-out,
			fade-away both linear;
		animation-timeline: --scroll;
		animation-range:
			exit 0% exit 100%,
			exit 50% exit 90%;

		background: linear-gradient(90deg, #ff6ec4, #7873f5);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		line-height: 200px;
	}

	/* basic */
	section {
		position: relative;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}

	h1 span:first-of-type {
		color: #09f;
		font-size: 0.4em;
	}

	section:nth-of-type(1) {
		height: 100vh;
	}

	section:nth-of-type(2) {
		height: 140vh;
	}

	h1 {
		display: grid;
	}

	h2 {
		font-size: clamp(2rem, 5vw + 1rem, 6rem);
		text-align: center;
	}

	h3 {
		background: linear-gradient(90deg, #ff6ec4, #7873f5);
		-webkit-background-clip: text;
		-webkit-text-fill-color: mediumslateblue;
		line-height: normal;

		font-size: xxx-large;
	}

	section div {
		width: 800px;
		max-width: 100vw;
		padding: 0 1rem;
	}

	:is(h1, h2) {
		font-size: clamp(2.5rem, 7vw + 1rem, 10rem);
		text-align: center;
		line-height: 1;
		position: fixed;
		top: 20%;
		left: 50%;
		margin: 0;
		translate: -50% -50%;
		width: 100%;
	}
</style>
