import { useCallback, useEffect, useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { galleryItems } from "@/data/gallery";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { formatSlideCounter, getCyclicIndex } from "@/utils/format";

export function GalleryPreview() {
  const [active, setActive] = useState<number | null>(null);
  const closeLightbox = useCallback(() => setActive(null), []);

  useEscapeKey(closeLightbox, active !== null);

  useEffect(() => {
    if (active === null) return;
    const handleArrowKeys = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setActive((prev) => (prev === null ? null : getCyclicIndex(prev, -1, galleryItems.length)));
      } else if (event.key === "ArrowRight") {
        setActive((prev) => (prev === null ? null : getCyclicIndex(prev, 1, galleryItems.length)));
      }
    };
    window.addEventListener("keydown", handleArrowKeys);
    return () => window.removeEventListener("keydown", handleArrowKeys);
  }, [active]);

  return (
    <section id="gallery" className="bg-ivory py-16 lg:py-24">
      <div className="site-shell">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionIntro
            eyebrow="Community in view"
            title={
              <>
                Real people. Real action.
                <br />
                <em>Lasting change.</em>
              </>
            }
          />
          <button
            type="button"
            className="text-link self-start text-deep-forest lg:self-auto"
            onClick={() => setActive(0)}
          >
            View full gallery <Arrow />
          </button>
        </div>
        <div className="gallery-grid mt-12">
          {galleryItems.map((item, index) => (
            <button
              type="button"
              key={item.id}
              onClick={() => setActive(index)}
              className={`gallery-image gallery-${index + 1}`}
              aria-label={`Open image: ${item.caption}`}
            >
              <SafeImage asset={item.photo} alt={item.alt} loading="lazy" />
              <span>
                {item.caption}
                <Arrow />
              </span>
            </button>
          ))}
        </div>
        <p className="mt-4 text-xs uppercase tracking-widest text-charcoal/65">
          Illustrative concept gallery · Replace with approved field event albums when supplied
        </p>
      </div>
      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image viewer">
          <button
            type="button"
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            Close ×
          </button>
          <button
            type="button"
            className="lightbox-arrow left-5"
            onClick={() => setActive(getCyclicIndex(active, -1, galleryItems.length))}
            aria-label="Previous image"
          >
            <Arrow direction="left" />
          </button>
          <figure>
            <SafeImage asset={galleryItems[active].photo} alt={galleryItems[active].alt} />
            <figcaption>
              <span>{formatSlideCounter(active, galleryItems.length)}</span>
              {galleryItems[active].caption}
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox-arrow right-5"
            onClick={() => setActive(getCyclicIndex(active, 1, galleryItems.length))}
            aria-label="Next image"
          >
            <Arrow />
          </button>
        </div>
      )}
    </section>
  );
}
