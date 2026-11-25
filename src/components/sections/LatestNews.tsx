import { Arrow } from "@/components/ui/Arrow";
import { Link } from "@/components/ui/Link";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { useContentStore } from "@/context/ContentStoreContext";

export function LatestNews() {
  const { publishedArticles } = useContentStore();
  const featured = publishedArticles.slice(0, 3);

  return (
    <section id="news" className="bg-deep-forest py-16 text-white lg:py-24">
      <div className="site-shell">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionIntro
            eyebrow="Latest news & updates"
            title={
              <>
                Stories of <em>Change.</em>
              </>
            }
            light
          />
          <Link className="text-link self-start text-soft-sage lg:self-auto" to="/news">
            Read Our Stories <Arrow />
          </Link>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {featured.map((item) => (
            <article className="news-card group" key={item.id}>
              <Link to={`/news/${item.slug}`} className="block">
                <div className="overflow-hidden">
                  <img src={item.imageSrc} alt={item.imageAlt} loading="lazy" />
                </div>
                <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-earth-gold">
                  <span>{item.category}</span>
                  <span>·</span>
                  <span>{item.context}</span>
                </div>
                <h3 className="mt-3 font-serif text-2xl leading-snug text-ivory sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ivory/78">{item.excerpt}</p>
                <span className="text-link mt-4 text-soft-sage">
                  Read Story <Arrow />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
