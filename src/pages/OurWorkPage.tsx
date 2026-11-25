import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Arrow } from "@/components/ui/Arrow";
import { Link } from "@/components/ui/Link";
import { PageHero } from "@/components/ui/PageHero";
import { SafeImage } from "@/components/ui/SafeImage";
import { photos } from "@/data/photos";
import { programmes } from "@/data/programmes";

export function OurWorkPage() {
  const flagship = programmes[0];
  const alternatingProgrammes = programmes.slice(1, 3);
  const gridProgrammes = programmes.slice(3);

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Our work"
          title={
            <>
              Practical Action.
              <br />
              <em>Human Impact.</em>
            </>
          }
          description="Six interconnected areas connecting women’s empowerment and community solidarity with practical environmental conservation across Kampala and beyond."
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Our Work" }]}
          photo={photos.treeGrowing}
          imageAlt="Ugandan women planting trees together in community conservation work"
        />

        {/* Flagship Developing Initiative Spotlight */}
        <section className="bg-ivory py-16 lg:py-24">
          <div className="site-shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden">
              <SafeImage
                asset={flagship.photo}
                alt={flagship.imageAlt}
                className="aspect-[4/3] w-full object-cover object-top"
              />
            </div>
            <div>
              <span className="inline-block bg-deep-forest px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-earth-gold">
                {flagship.number} · {flagship.status}
              </span>
              <h2 className="display mt-5 text-deep-forest">
                Plastic to <em>Possibility.</em>
              </h2>
              <p className="mt-5 text-lg leading-8 text-charcoal/85">{flagship.heroIntro}</p>
              <p className="mt-4 text-sm leading-7 text-charcoal/75">{flagship.statusSummary}</p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link to={`/our-work/${flagship.slug}`} className="button button-dark">
                  Explore Plastic to Possibility <Arrow />
                </Link>
                <Link to="/get-involved" className="text-link text-deep-forest">
                  Partner With Us <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Alternating Editorial Highlights (Programmes 02 & 03) */}
        <section className="bg-white py-16 lg:py-24">
          <div className="site-shell space-y-20">
            {alternatingProgrammes.map((item, idx) => (
              <article key={item.id} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="overflow-hidden">
                    <SafeImage
                      asset={item.photo}
                      alt={item.imageAlt}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold tracking-widest text-botanical">
                      {item.number}
                    </span>
                    <span className="rounded-full bg-soft-sage px-3 py-0.5 text-[11px] font-semibold text-deep-forest">
                      {item.status}
                    </span>
                  </div>
                  <h2 className="mt-4 font-serif text-3xl leading-tight text-deep-forest sm:text-4xl">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-charcoal/80">{item.heroIntro}</p>
                  <p className="mt-3 text-sm leading-6 text-charcoal/65">{item.statusSummary}</p>
                  <Link to={`/our-work/${item.slug}`} className="text-link mt-6 text-deep-forest">
                    View Programme Details <Arrow />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Three-Column Editorial Grid (Programmes 04, 05 & 06) */}
        <section className="bg-soft-sage py-16 lg:py-24">
          <div className="site-shell">
            <div className="max-w-2xl">
              <p className="eyebrow text-botanical">
                <span />
                Youth, Schools &amp; Communities
              </p>
              <h2 className="display mt-4 text-deep-forest">
                Building Lifelong <em>Stewardship.</em>
              </h2>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {gridProgrammes.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col bg-white transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="overflow-hidden">
                    <SafeImage
                      asset={item.photo}
                      alt={item.imageAlt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold tracking-widest text-botanical">
                        {item.number}
                      </span>
                      <span className="bg-ivory px-2.5 py-0.5 text-[11px] font-semibold text-deep-forest">
                        {item.status}
                      </span>
                    </div>
                    <h3 className="mt-3 font-serif text-2xl text-deep-forest">{item.title}</h3>
                    <p className="mt-2.5 flex-1 text-sm leading-6 text-charcoal/75">
                      {item.shortDescription}
                    </p>
                    <Link to={`/our-work/${item.slug}`} className="text-link mt-5 text-deep-forest">
                      Explore Programme <Arrow />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Partnership CTA */}
        <section className="bg-deep-forest py-16 text-white lg:py-20">
          <div className="site-shell flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="eyebrow text-earth-gold">
                <span />
                Collaboration
              </p>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
                Support existing outreach or help shape our developing programmes.
              </h2>
            </div>
            <Link to="/get-involved" className="button button-gold">
              Become a Partner <Arrow />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
