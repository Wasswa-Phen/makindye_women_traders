import { useEffect } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { formatSlideCounter, getCyclicIndex } from "@/utils/format";

export interface LightboxImageItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  albumTitle?: string;
}

interface LightboxModalProps {
  items: LightboxImageItem[];
  activeIndex: number | null;
  onChangeIndex: (index: number | null) => void;
}

export function LightboxModal({ items, activeIndex, onChangeIndex }: LightboxModalProps) {
  useEscapeKey(() => onChangeIndex(null), activeIndex !== null);

  useEffect(() => {
    if (activeIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeys = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        onChangeIndex(getCyclicIndex(activeIndex, -1, items.length));
      } else if (event.key === "ArrowRight") {
        onChangeIndex(getCyclicIndex(activeIndex, 1, items.length));
      }
    };
    window.addEventListener("keydown", handleKeys);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeys);
    };
  }, [activeIndex, items.length, onChangeIndex]);

  if (activeIndex === null || !items[activeIndex]) return null;
  const current = items[activeIndex];

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image viewer">
      <button
        type="button"
        className="lightbox-close"
        onClick={() => onChangeIndex(null)}
        aria-label="Close gallery"
      >
        Close ×
      </button>
      {items.length > 1 && (
        <button
          type="button"
          className="lightbox-arrow left-4 sm:left-5"
          onClick={() => onChangeIndex(getCyclicIndex(activeIndex, -1, items.length))}
          aria-label="Previous image"
        >
          <Arrow direction="left" />
        </button>
      )}
      <figure>
        <img src={current.src} alt={current.alt} />
        <figcaption>
          <span>{formatSlideCounter(activeIndex, items.length)}</span>
          <span className="text-right font-serif text-base text-ivory sm:text-lg">
            {current.caption}
          </span>
        </figcaption>
      </figure>
      {items.length > 1 && (
        <button
          type="button"
          className="lightbox-arrow right-4 sm:right-5"
          onClick={() => onChangeIndex(getCyclicIndex(activeIndex, 1, items.length))}
          aria-label="Next image"
        >
          <Arrow />
        </button>
      )}
    </div>
  );
}
