import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Arrow } from "@/components/ui/Arrow";
import { Link } from "@/components/ui/Link";
import { PageHero } from "@/components/ui/PageHero";
import { SafeImage } from "@/components/ui/SafeImage";
import { programmes } from "@/data/programmes";

interface ProgrammeDetailPageProps {
  slug: string;
}

export function ProgrammeDetailPage({ slug }: ProgrammeDetailPageProps) {
  const programme = programmes.find((p) => p.slug === slug);

  if (!programme) {
    return (
      <>
        <Header solid />
        <main className="bg-ivory py-24">
          <div className="site-shell max-w-2xl">
            <p className="eyebrow text-botanical">
              <span />
              Programme Not Found
            </p>
            <h1 className="display mt-4 text-deep-forest">
              This programme page could not be found.
            </h1>
            <Link to="/our-work" className="button button-dark mt-8">
              Return to Our Work <Arrow />
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const related = programmes.filter((p) => p.slug !== programme.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow={`Programme ${programme.number} · ${programme.status}`}
          title={programme.title}
          description={programme.heroIntro}
          breadcrumbs={[
            { label: "Home", to: "/" },
            { label: "Our Work", to: "/our-work" },
            { label: programme.title },
          ]}
          photo={programme.photo}
          imageAlt={programme.imageAlt}
        />

        {/* Main Content Split */}
        <section className="bg-ivory py-16 lg:py-24">
          <div className="site-shell grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
            <div className="space-y-10">
              <div className="overflow-hidden">
                <SafeImage
                  asset={programme.photo}
                  alt={programme.imageAlt}
                  className="aspect-[16/10] w-full object-cover object-top"
                />
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div className="border-t border-deep-forest/20 pt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-botanical">
                    The Challenge
                  </p>
                  <p className="mt-3 leading-7 text-charcoal/80">{programme.challenge}</p>
                </div>
                <div className="border-t border-deep-forest/20 pt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-botanical">
                    Our Approach
                  </p>
                  <p className="mt-3 leading-7 text-charcoal/80">{programme.approach}</p>
                </div>
              </div>

              <div className="border-t border-charcoal/15 pt-8">
                <h2 className="font-serif text-3xl text-deep-forest">Key Activities</h2>
                <ul className="mt-5 space-y-3">
                  {programme.keyActivities.map((activity) => (
                    <li key={activity} className="flex items-start gap-3 text-charcoal/85">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-earth-gold" />
                      <span className="leading-7">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar: Current Status & Partnership Focus */}
            <aside className="space-y-6">
              <div className="bg-white p-7 border border-charcoal/10">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-botanical">
                  Current Programme Status
                </p>
                <p className="mt-3 font-serif text-2xl text-deep-forest">{programme.status}</p>
                <p className="mt-3 text-sm leading-7 text-charcoal/75">{programme.statusSummary}</p>
              </div>

              <div className="bg-deep-forest p-7 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-earth-gold">
                  Partnership Opportunities
                </p>
                <p className="mt-3 text-sm leading-7 text-ivory/85">{programme.partnershipFocus}</p>
                <div className="mt-6 space-y-3">
                  <Link to="/get-involved" className="button button-gold w-full">
                    Partner on This Programme <Arrow />
                  </Link>
                  <Link to="/contact" className="button button-outline w-full">
                    Contact Us <Arrow />
                  </Link>
                </div>
              </div>

              <Link to="/our-work" className="text-link text-deep-forest">
                <Arrow direction="left" /> Back to All Programmes
              </Link>
            </aside>
          </div>
        </section>

        {/* Related Programmes */}
        <section className="bg-white py-16 lg:py-20">
          <div className="site-shell">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-serif text-3xl text-deep-forest">Explore Related Programmes</h2>
              <Link to="/our-work" className="text-link text-deep-forest">
                View All Six <Arrow />
              </Link>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {related.map((item) => (
                <article key={item.id} className="programme group">
                  <Link to={`/our-work/${item.slug}`} className="block">
                    <div className="overflow-hidden">
                      <SafeImage asset={item.photo} alt={item.imageAlt} loading="lazy" />
                    </div>
                    <p className="mt-4 text-xs font-bold uppercase tracking-wider text-botanical">
                      {item.number} · {item.status}
                    </p>
                    <h3 className="mt-1.5 font-serif text-2xl text-deep-forest group-hover:text-botanical">
                      {item.title}
                    </h3>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
