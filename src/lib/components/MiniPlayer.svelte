<script lang="ts">
	let audioElement: HTMLAudioElement;
	let selectedSong = 'classic';
	let isPlaying = false;
	let currentTime = 0;
	let duration = 0;

	const songs: Record<string, { title: string; src: string }> = {
		classic: { title: 'Cumpleaños Clásico', src: './assets/audios/classic.mp3' },
		latin: { title: 'Las Mañanitas', src: './assets/audios/mananitas.mp3' }
	};

	function togglePlay() {
		if (!audioElement) return;

		if (isPlaying) {
			audioElement.pause();
		} else {
			audioElement.play();
		}
		isPlaying = !isPlaying;
	}

	function handleTimeUpdate() {
		currentTime = audioElement.currentTime;
	}

	function handleLoadedMetadata() {
		duration = audioElement.duration;
	}

	function seek(e: Event) {
		const target = e.target as HTMLInputElement;
		audioElement.currentTime = parseFloat(target.value);
	}

	function handleSongChange(event: CustomEvent) {
		const selected = event.detail.item.value;
		selectedSong = selected;

		if (audioElement) {
			audioElement.pause();
			audioElement.load();
			isPlaying = false;
		}
	}
</script>

{#if selectedSong === 'latin' && isPlaying}
	<div id="lyrics" class="lyrics hidden">
		<p>
			Estas son las mañanitas<br />
			Que cantaba el rey David<br />
			Hoy, por ser día de tu santo<br />
			Te las cantamos aquí<br /><br />
			Despierta, mi bien, despierta<br />
			Mira que ya amaneció<br />
			Ya los pajaritos cantan<br />
			La luna ya se metió<br /><br />
			Qué linda está la mañana<br />
			En que vengo a saludarte<br />
			Venimos todos con gusto<br />
			Y placer a felicitarte<br /><br />
			El día en que tú naciste<br />
			Nacieron todas las flores<br />
			En la pila del bautismo<br />
			Cantaron los ruiseñores<br /><br />
			Ya viene amaneciendo<br />
			Ya la luz del día nos dio<br />
			Levántate de mañana<br />
			Mira que ya amaneció<br /><br />
			Si yo pudiera bajarte<br />
			Las estrellas y un lucero<br />
			Para poder demostrarte<br />
			Lo mucho que yo te quiero<br /><br />
			Con jazmines y flores<br />
			Este día quiero adornar<br />
			Hoy, por ser día de tu santo<br />
			Te venimos a cantar
		</p>
	</div>
{/if}

<div class="mini-player">
	<div class="info">
		<strong>{songs[selectedSong].title}</strong>
		<sl-dropdown class="song-selector">
			<img slot="trigger" class="gif" src="./assets/images/setting.gif" alt="Settings" />
			<sl-menu on:sl-select={handleSongChange}>
				<sl-menu-item value="classic">Classic</sl-menu-item>
				<sl-menu-item value="latin">Las Mañanitas</sl-menu-item>
			</sl-menu>
		</sl-dropdown>
	</div>

	<div class="controls">
		<button on:click={togglePlay} aria-label="Play or pause">
			{#if isPlaying}
				<img class="gif" src="./assets/images/pause.gif" alt="Pause" />
			{:else}
				<img class="gif" src="./assets/images/play.gif" alt="Play" />
			{/if}
		</button>

		<input type="range" min="0" max={duration} step="0.1" value={currentTime} on:input={seek} />
	</div>

	<audio
		bind:this={audioElement}
		on:timeupdate={handleTimeUpdate}
		on:loadedmetadata={handleLoadedMetadata}
	>
		<source src={songs[selectedSong].src} type="audio/mpeg" />
	</audio>
</div>

<style>
	.mini-player {
		background-color: #bfcde4;
		color: #2074fd;
		padding: 1rem;
		border-radius: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 100%;
		max-width: 400px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
		margin: 20px;
	}

	.info {
		font-size: 1rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.controls {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	button {
		background: transparent;
		border: none;
		width: 50px;
		height: 50px;
		cursor: pointer;
		font-size: 1.2rem;
	}

	input[type='range'] {
		flex: 1;
	}

	.gif {
		width: 50px;
		height: 50px;

		cursor: pointer;
	}

	.lyrics {
		font-size: 0.95rem;
		line-height: 1.5;
		color: #333;
		background: rgba(255, 255, 255, 0.6);
		padding: 1rem;
		border-radius: 0.5rem;
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
		max-height: 200px;
		overflow: auto;
		margin: 20px;
	}
</style>
