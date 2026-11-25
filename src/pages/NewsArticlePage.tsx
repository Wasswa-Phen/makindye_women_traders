import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Arrow } from "@/components/ui/Arrow";
import { Link } from "@/components/ui/Link";
import { useContentStore } from "@/context/ContentStoreContext";

interface NewsArticlePageProps {
  slug: string;
}

export function NewsArticlePage({ slug }: NewsArticlePageProps) {
  const { publishedArticles } = useContentStore();
  const article = publishedArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <>
        <Header solid />
        <main className="bg-ivory py-24">
          <div className="site-shell max-w-2xl">
            <p className="eyebrow text-botanical">
              <span />
              Story Not Found
            </p>
            <h1 className="display mt-4 text-deep-forest">This story could not be located.</h1>
            <Link to="/news" className="button button-dark mt-8">
              Return to News &amp; Updates <Arrow />
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const related = publishedArticles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <Header solid />
      <main className="bg-ivory py-12 lg:py-20">
        <article className="site-shell">
          <div className="mx-auto max-w-3xl">
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-charcoal/65"
            >
              <Link to="/" className="hover:text-deep-forest">
                Home
              </Link>
              <span>/</span>
              <Link to="/news" className="hover:text-deep-forest">
                News &amp; Updates
              </Link>
              <span>/</span>
              <span className="text-botanical">{article.category}</span>
            </nav>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-botanical">
              {article.category} · {article.context}
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-deep-forest sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 text-xs uppercase tracking-widest text-charcoal/65">
              By {article.author}
            </p>

            <div className="mt-8 overflow-hidden">
              <img
                src={article.imageSrc}
                alt={article.imageAlt}
                className="aspect-[16/10] w-full object-cover object-top"
              />
            </div>

            <div className="mt-10 space-y-6 text-lg leading-8 text-charcoal/85">
              {article.bodyParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-charcoal/15 pt-8">
              <Link to="/news" className="text-link text-deep-forest">
                <Arrow direction="left" /> Back to All Stories
              </Link>
              <Link to="/get-involved" className="button button-gold">
                Partner With Us <Arrow />
              </Link>
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="mt-16 border-t border-charcoal/15 bg-white py-16">
            <div className="site-shell">
              <h2 className="font-serif text-3xl text-deep-forest">Related Stories</h2>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                {related.map((item) => (
                  <article key={item.id} className="news-card group">
                    <Link
                      to={`/news/${item.slug}`}
                      className="grid gap-5 sm:grid-cols-[200px_1fr] sm:items-center"
                    >
                      <div className="overflow-hidden">
                        <img
                          src={item.imageSrc}
                          alt={item.imageAlt}
                          className="!h-36 w-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-botanical">
                          {item.category} · {item.context}
                        </p>
                        <h3 className="mt-2 font-serif text-2xl text-deep-forest group-hover:text-botanical">
                          {item.title}
                        </h3>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
