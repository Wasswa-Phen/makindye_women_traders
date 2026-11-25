import { useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Arrow } from "@/components/ui/Arrow";
import { type LightboxImageItem, LightboxModal } from "@/components/ui/LightboxModal";
import { Link } from "@/components/ui/Link";
import { PageHero } from "@/components/ui/PageHero";
import { useContentStore } from "@/context/ContentStoreContext";
import { photos as photoRegistry } from "@/data/photos";

export function GalleryPage() {
  const { publishedAlbums, publishedPhotos } = useContentStore();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const categories = ["All", ...Array.from(new Set(publishedAlbums.map((a) => a.category)))];

  const filteredAlbums =
    selectedCategory === "All"
      ? publishedAlbums
      : publishedAlbums.filter((a) => a.category === selectedCategory);

  const albumIds = new Set(filteredAlbums.map((a) => a.id));
  const visiblePhotos = publishedPhotos.filter((p) => albumIds.has(p.albumId));

  const lightboxItems: LightboxImageItem[] = visiblePhotos.map((p) => ({
    id: p.id,
    src: p.src,
    alt: p.alt,
    caption: p.caption,
    albumTitle: publishedAlbums.find((a) => a.id === p.albumId)?.title,
  }));

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Community gallery"
          title={
            <>
              Real People. Real Action.
              <br />
              <em>Lasting Change.</em>
            </>
          }
          description="Explore curated community albums and field visuals showcasing environmental stewardship, recycling concepts and women’s leadership."
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
          photo={photoRegistry.hero}
          imageAlt="Ugandan women sorting plastic bottles together in Kampala"
        />

        {/* Curated Albums */}
        <section className="bg-ivory py-16 lg:py-20">
          <div className="site-shell">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow text-botanical">
                  <span />
                  Curated Albums
                </p>
                <h2 className="mt-3 font-serif text-3xl text-deep-forest">Browse by Collection</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`min-h-10 px-3.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                      selectedCategory === cat
                        ? "bg-deep-forest text-white"
                        : "border border-charcoal/20 bg-white text-charcoal hover:bg-soft-sage"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredAlbums.map((album) => {
                const count = publishedPhotos.filter((p) => p.albumId === album.id).length;
                return (
                  <article
                    key={album.id}
                    className="group overflow-hidden bg-white border border-charcoal/10"
                  >
                    <Link to={`/gallery/${album.slug}`} className="block">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={album.coverSrc}
                          alt={album.title}
                          loading="lazy"
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-botanical">
                          {album.category} · {count} photo{count === 1 ? "" : "s"}
                        </p>
                        <h3 className="mt-2 font-serif text-2xl text-deep-forest group-hover:text-botanical">
                          {album.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-charcoal/75">
                          {album.description}
                        </p>
                        <span className="text-link mt-4 text-deep-forest">
                          Open Album <Arrow />
                        </span>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Full Responsive Photo Grid */}
        <section className="bg-white py-16 lg:py-24">
          <div className="site-shell">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-serif text-3xl text-deep-forest">
                All Featured Photographs ({visiblePhotos.length})
              </h2>
              <p className="text-xs text-charcoal/65">
                Current visuals are illustrative concept scenes pending approved field event albums.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3">
              {visiblePhotos.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Open image: ${item.caption}`}
                  className="group relative aspect-[4/3] overflow-hidden bg-ivory text-left"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0a1915]/85 via-[#0a1915]/40 to-transparent p-4 pt-12 text-ivory">
                    <p className="font-serif text-lg leading-snug">{item.caption}</p>
                  </div>
                </button>
              ))}
            </div>
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
