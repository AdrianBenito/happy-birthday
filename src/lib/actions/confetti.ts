import confetti from 'canvas-confetti';

export function triggerConfetti(node: HTMLElement) {
	const fire = () => {
		confetti({
			particleCount: 150,
			spread: 70,
			origin: { y: 0.6 }
		});
	};

	node.addEventListener('click', fire);

	return {
		destroy() {
			node.removeEventListener('click', fire);
		}
	};
}
