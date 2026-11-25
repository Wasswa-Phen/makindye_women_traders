import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Arrow } from "@/components/ui/Arrow";
import { Link } from "@/components/ui/Link";
import { PageHero } from "@/components/ui/PageHero";
import { SafeImage } from "@/components/ui/SafeImage";
import { collaborators } from "@/data/organisation";
import { photos } from "@/data/photos";
import { impactStats, impactVerificationNote } from "@/data/programmes";

export function ImpactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Our impact"
          title={
            <>
              Small Actions.
              <br />
              <em>Lasting Transformation.</em>
            </>
          }
          description="We report only documented grassroots steps while keeping developing initiatives distinct from completed milestones."
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Our Impact" }]}
          photo={photos.communityOutreach}
          imageAlt="Community members sharing seedlings during an environmental outreach activity"
        />

        {/* Reported Figures */}
        <section className="bg-soft-sage py-16 lg:py-24">
          <div className="site-shell">
            <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
              <div>
                <p className="eyebrow text-botanical">
                  <span />
                  Reported milestones
                </p>
                <h2 className="display mt-4 text-deep-forest">
                  Measured steps <em>together.</em>
                </h2>
                <p className="mt-4 leading-7 text-deep-forest/85">
                  Every milestone reflects community participation and local collaborations across
                  Makindye Division and Northern Uganda.
                </p>
              </div>
              <div className="grid sm:grid-cols-2">
                {impactStats.map((stat) => (
                  <div key={stat.label} className="impact-stat bg-white/55">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                    <small>{stat.note}</small>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-8 border-t border-deep-forest/20 pt-5 text-xs text-deep-forest/80">
              {impactVerificationNote}
            </p>
          </div>
        </section>

        {/* Documentary Field Highlights */}
        <section className="bg-ivory py-16 lg:py-24">
          <div className="site-shell space-y-16">
            <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="overflow-hidden">
                <SafeImage
                  asset={photos.treeGrowing}
                  alt="Women planting a tree sapling in rich soil"
                  className="aspect-[16/10] w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-botanical">
                  Makindye Division · Collaboration
                </p>
                <h2 className="mt-3 font-serif text-3xl text-deep-forest sm:text-4xl">
                  200 trees planted with Kaazi Tree Grow Project
                </h2>
                <p className="mt-4 leading-7 text-charcoal/80">
                  Beginning in Lukuli, our collaboration with Kaazi Business Concepts supported the
                  planting of 200 trees in Makindye Division between August 2025 and February 2026.
                  Tree survival tracking and expanded neighbourhood planting remain ongoing
                  priorities.
                </p>
                <Link
                  to="/news/200-trees-makindye-kaazi-collaboration"
                  className="text-link mt-5 text-deep-forest"
                >
                  Read the Tree-Growing Story <Arrow />
                </Link>
              </div>
            </article>

            <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="overflow-hidden lg:order-2">
                <SafeImage
                  asset={photos.newsOutreach}
                  alt="Ugandan community gathering supported through outreach"
                  className="aspect-[16/10] w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="lg:order-1">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-botanical">
                  Layibi Village, Gulu · 2024
                </p>
                <h2 className="mt-3 font-serif text-3xl text-deep-forest sm:text-4xl">
                  2024 Northern Uganda community outreach
                </h2>
                <p className="mt-4 leading-7 text-charcoal/80">
                  In 2024, Makindye Women Traders partnered with Sanctuary Church Gulu for a
                  community outreach in Layibi Village, providing food support to women of the
                  Layibi Women Society. Attendance and distribution totals are intentionally omitted
                  until confirmed by client records.
                </p>
                <Link
                  to="/news/standing-with-women-of-layibi-northern-uganda"
                  className="text-link mt-5 text-deep-forest"
                >
                  Read the Outreach Story <Arrow />
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Achieved Results vs Future Objectives */}
        <section className="bg-white py-16 lg:py-24">
          <div className="site-shell grid gap-10 lg:grid-cols-2">
            <div className="border-t-2 border-deep-forest bg-ivory p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-botanical">
                Documented Activities
              </p>
              <h3 className="mt-3 font-serif text-2xl text-deep-forest">
                Completed &amp; Ongoing Steps
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-charcoal/80">
                <li>• 200 trees planted in Makindye Division with Kaazi Tree Grow Project.</li>
                <li>• 30+ community volunteers supporting grassroots mobilisation.</li>
                <li>
                  • 2024 food outreach for Layibi Women Society in Gulu with Sanctuary Church.
                </li>
                <li>• Ongoing mentorship conversations with women and young mothers.</li>
              </ul>
            </div>

            <div className="border-t-2 border-earth-gold bg-deep-forest p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-earth-gold">
                Future Objectives
              </p>
              <h3 className="mt-3 font-serif text-2xl">Developing &amp; Planned Programmes</h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-ivory/85">
                <li>
                  • Launch full community plastic collection and sorting under Plastic to
                  Possibility.
                </li>
                <li>
                  • Establish partner recycling market links generating steady income for women.
                </li>
                <li>
                  • Expand School Environmental Clubs across Makindye primary and secondary schools.
                </li>
                <li>
                  • Publish verified annual impact documentation once formal monitoring is
                  established.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Collaborators & Call to Support */}
        <section className="bg-ivory py-16 lg:py-20">
          <div className="site-shell">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="eyebrow text-botanical">
                  <span />
                  Collaborators
                </p>
                <h2 className="mt-3 font-serif text-3xl text-deep-forest">
                  Partners walking alongside us
                </h2>
              </div>
              <Link to="/get-involved" className="button button-gold">
                Support Future Programmes <Arrow />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {collaborators.map((partner) => (
                <div key={partner.id} className="border border-charcoal/15 bg-white p-7">
                  <p className="text-xs font-bold uppercase tracking-widest text-botanical">
                    {partner.location}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-deep-forest">{partner.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-charcoal/75">{partner.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
