import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Arrow } from "@/components/ui/Arrow";
import { Link } from "@/components/ui/Link";
import { PageHero } from "@/components/ui/PageHero";
import { useContentStore } from "@/context/ContentStoreContext";
import { photos } from "@/data/photos";

export function NewsPage() {
  const { publishedArticles } = useContentStore();
  const leadStory = publishedArticles[0];
  const otherStories = publishedArticles.slice(1);

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="News & updates"
          title={
            <>
              Stories of <em>Change.</em>
            </>
          }
          description="Field reflections, collaborations and updates from Makindye Women Traders’ environmental and women’s leadership work."
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "News & Updates" }]}
          photo={photos.communityOutreach}
          imageAlt="Community outreach gathering in Kampala"
        />

        {/* Featured Story */}
        {leadStory && (
          <section className="bg-ivory py-16 lg:py-24">
            <div className="site-shell">
              <p className="eyebrow text-botanical">
                <span />
                Featured Story
              </p>
              <article className="mt-8 grid items-center gap-10 bg-white border border-charcoal/10 lg:grid-cols-2 lg:gap-12">
                <div className="overflow-hidden">
                  <img
                    src={leadStory.imageSrc}
                    alt={leadStory.imageAlt}
                    className="aspect-[16/11] w-full object-cover object-top"
                  />
                </div>
                <div className="p-6 sm:p-10 lg:pr-12">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-botanical">
                    {leadStory.category} · {leadStory.context}
                  </p>
                  <h2 className="mt-3 font-serif text-3xl leading-tight text-deep-forest sm:text-4xl">
                    {leadStory.title}
                  </h2>
                  <p className="mt-4 leading-7 text-charcoal/80">{leadStory.excerpt}</p>
                  <Link to={`/news/${leadStory.slug}`} className="button button-dark mt-7">
                    Read Full Story <Arrow />
                  </Link>
                </div>
              </article>
            </div>
          </section>
        )}

        {/* Editorial Article Grid */}
        <section className="bg-white py-16 lg:py-24">
          <div className="site-shell">
            <h2 className="font-serif text-3xl text-deep-forest">More Stories &amp; Initiatives</h2>
            {otherStories.length === 0 ? (
              <p className="mt-6 text-charcoal/70">
                Additional stories added through the Staff Portal will appear here.
              </p>
            ) : (
              <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {otherStories.map((item) => (
                  <article key={item.id} className="news-card group">
                    <Link to={`/news/${item.slug}`} className="block">
                      <div className="overflow-hidden">
                        <img src={item.imageSrc} alt={item.imageAlt} loading="lazy" />
                      </div>
                      <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-botanical">
                        {item.category} · {item.context}
                      </p>
                      <h3 className="mt-2.5 font-serif text-2xl leading-snug text-deep-forest group-hover:text-botanical">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-6 text-charcoal/75">{item.excerpt}</p>
                      <span className="text-link mt-4 text-deep-forest">
                        Read Story <Arrow />
                      </span>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
