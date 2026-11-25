import { useCallback, useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { newsArticles } from "@/data/news";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import type { NewsArticle } from "@/types/content";

export function LatestNews() {
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const closeArticle = useCallback(() => setArticle(null), []);

  useEscapeKey(closeArticle, article !== null);

  return (
    <section id="news" className="bg-deep-forest py-16 text-white lg:py-24">
      <div className="site-shell">
        <SectionIntro
          eyebrow="Stories & focus areas"
          title={
            <>
              From the work.
              <br />
              <em>For the future.</em>
            </>
          }
          light
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {newsArticles.map((item) => (
            <article className="news-card group" key={item.id}>
              <div className="overflow-hidden">
                <SafeImage asset={item.photo} alt={item.imageAlt} loading="lazy" />
              </div>
              <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-earth-gold">
                <span>{item.category}</span>
                <span>·</span>
                <span>{item.context}</span>
              </div>
              <h3 className="mt-3 font-serif text-2xl leading-snug text-ivory sm:text-3xl">
                {item.title}
              </h3>
              <button
                type="button"
                onClick={() => setArticle(item)}
                className="text-link mt-5 text-soft-sage"
              >
                Read summary <Arrow />
              </button>
            </article>
          ))}
        </div>
        <p className="mt-10 text-xs uppercase tracking-widest text-soft-sage/75">
          Prototype story summaries based on documented initiatives · Imagery illustrative
        </p>
      </div>
      {article && (
        <div className="article-modal" role="dialog" aria-modal="true" aria-label={article.title}>
          <button
            type="button"
            onClick={closeArticle}
            className="lightbox-close bg-ivory/90 text-deep-forest"
            aria-label="Close article preview"
          >
            Close ×
          </button>
          <SafeImage asset={article.photo} alt={article.imageAlt} />
          <div className="p-7 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-widest text-botanical">
              {article.category} · {article.context}
            </p>
            <h3 className="mt-3 font-serif text-3xl leading-tight text-deep-forest sm:text-4xl">
              {article.title}
            </h3>
            <p className="mt-5 leading-8 text-charcoal/80">{article.excerpt}</p>
            <p className="mt-4 text-sm italic text-charcoal/65">
              Client review preview — full verified stories will be published after client sign-off.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
