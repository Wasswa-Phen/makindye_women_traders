import { useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { type LightboxImageItem, LightboxModal } from "@/components/ui/LightboxModal";
import { Link } from "@/components/ui/Link";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { useContentStore } from "@/context/ContentStoreContext";

export function GalleryPreview() {
  const { publishedPhotos, publishedAlbums } = useContentStore();
  const [active, setActive] = useState<number | null>(null);

  const featuredPhotos = publishedPhotos.slice(0, 5);
  const lightboxItems: LightboxImageItem[] = featuredPhotos.map((item) => ({
    id: item.id,
    src: item.src,
    alt: item.alt,
    caption: item.caption,
    albumTitle: publishedAlbums.find((a) => a.id === item.albumId)?.title,
  }));

  return (
    <section id="gallery" className="bg-ivory py-16 lg:py-24">
      <div className="site-shell">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionIntro
            eyebrow="Community gallery"
            title={
              <>
                Real People. Real Action.
                <br />
                <em>Lasting Change.</em>
              </>
            }
          />
          <Link className="text-link self-start text-deep-forest lg:self-auto" to="/gallery">
            Explore Our Gallery <Arrow />
          </Link>
        </div>
        <div className="gallery-grid mt-12">
          {featuredPhotos.map((item, index) => (
            <button
              type="button"
              key={item.id}
              onClick={() => setActive(index)}
              className={`gallery-image gallery-${index + 1}`}
              aria-label={`Open image: ${item.caption}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span>
                {item.caption}
                <Arrow />
              </span>
            </button>
          ))}
        </div>
      </div>
      <LightboxModal items={lightboxItems} activeIndex={active} onChangeIndex={setActive} />
    </section>
  );
}
