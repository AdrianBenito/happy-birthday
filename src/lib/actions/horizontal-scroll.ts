export function horizontalScroll(node: HTMLElement) {
  function onWheel(e: WheelEvent) {
    if (e.deltaY !== 0) {
      e.preventDefault();
      node.scrollLeft += e.deltaY * 30;
    }
  }

  node.addEventListener('wheel', onWheel, { passive: false });

  return {
    destroy() {
      node.removeEventListener('wheel', onWheel);
    }
  };
}
