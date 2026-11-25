import { useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Arrow } from "@/components/ui/Arrow";
import { type LightboxImageItem, LightboxModal } from "@/components/ui/LightboxModal";
import { Link } from "@/components/ui/Link";
import { PageHero } from "@/components/ui/PageHero";
import { useContentStore } from "@/context/ContentStoreContext";

interface GalleryAlbumPageProps {
  slug: string;
}

export function GalleryAlbumPage({ slug }: GalleryAlbumPageProps) {
  const { publishedAlbums, publishedPhotos } = useContentStore();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const album = publishedAlbums.find((a) => a.slug === slug);

  if (!album) {
    return (
      <>
        <Header solid />
        <main className="bg-ivory py-24">
          <div className="site-shell max-w-2xl">
            <p className="eyebrow text-botanical">
              <span />
              Album Not Found
            </p>
            <h1 className="display mt-4 text-deep-forest">
              This gallery album is currently unavailable.
            </h1>
            <Link to="/gallery" className="button button-dark mt-8">
              Return to Gallery <Arrow />
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const albumPhotos = publishedPhotos.filter((p) => p.albumId === album.id);
  const lightboxItems: LightboxImageItem[] = albumPhotos.map((p) => ({
    id: p.id,
    src: p.src,
    alt: p.alt,
    caption: p.caption,
    albumTitle: album.title,
  }));

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow={album.category}
          title={album.title}
          description={album.description}
          breadcrumbs={[
            { label: "Home", to: "/" },
            { label: "Gallery", to: "/gallery" },
            { label: album.title },
          ]}
        />

        <section className="bg-ivory py-16 lg:py-24">
          <div className="site-shell">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-charcoal/15 pb-5">
              <p className="text-sm text-charcoal/75">
                {albumPhotos.length} photograph
                {albumPhotos.length === 1 ? "" : "s"}
                {album.isIllustrative
                  ? " · Illustrative concept visuals pending approved event photography"
                  : ""}
              </p>
              <Link to="/gallery" className="text-link text-deep-forest">
                <Arrow direction="left" /> Back to Gallery
              </Link>
            </div>

            {albumPhotos.length === 0 ? (
              <div className="mt-10 bg-white p-10 text-center">
                <p className="font-serif text-2xl text-deep-forest">
                  No published photographs in this album yet.
                </p>
                <Link to="/gallery" className="button button-dark mt-6">
                  Browse Other Albums <Arrow />
                </Link>
              </div>
            ) : (
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {albumPhotos.map((photo, index) => (
                  <button
                    key={photo.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Open image: ${photo.caption}`}
                    className="group flex flex-col overflow-hidden bg-white text-left border border-charcoal/10"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="p-4 font-serif text-lg text-deep-forest">{photo.caption}</p>
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <LightboxModal
        items={lightboxItems}
        activeIndex={activeIndex}
        onChangeIndex={setActiveIndex}
      />
      <Footer />
    </>
  );
}
