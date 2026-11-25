/**
 * Formats a zero-based slide index and total count into two-digit strings (e.g. "01 / 05").
 */
export function formatSlideCounter(activeIndex: number, total: number): string {
  const current = String(activeIndex + 1).padStart(2, "0");
  const count = String(total).padStart(2, "0");
  return `${current} / ${count}`;
}

/**
 * Calculates the next cyclic index in a carousel or lightbox.
 */
export function getCyclicIndex(currentIndex: number, delta: number, length: number): number {
  if (length <= 0) return 0;
  return (currentIndex + delta + length) % length;
}
