import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Arrow } from "@/components/ui/Arrow";
import { Link } from "@/components/ui/Link";
import { PageHero } from "@/components/ui/PageHero";
import { SafeImage } from "@/components/ui/SafeImage";
import {
  coreValues,
  founderProfile,
  leadershipBoard,
  organisationalApproach,
  organisationInfo,
} from "@/data/organisation";
import { photos } from "@/data/photos";

export function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="About us"
          title={
            <>
              Rooted in Purpose.
              <br />
              <em>Growing Change.</em>
            </>
          }
          description="A women-led Community Based Organisation in Kampala connecting environmental conservation with women’s leadership, mentorship and sustainable livelihoods."
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
          photo={photos.womenCommunity}
          imageAlt="Smiling Ugandan women standing together in Makindye, Kampala"
        />

        {/* Organisational Story */}
        <section className="bg-ivory py-16 lg:py-24">
          <div className="site-shell grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="eyebrow text-botanical">
                <span />
                Our story
              </p>
              <h2 className="display mt-5 text-deep-forest">
                Local voices.
                <br />
                <em>Lasting possibilities.</em>
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-charcoal/85">
              <p>
                Makindye Women Traders Community Based Organisation is a women-led grassroots
                organisation registered with Kampala Capital City Authority (KCCA) in Makindye
                Division, Kampala, Uganda.
              </p>
              <p className="text-base leading-7 text-charcoal/75">
                Our work connects care for local ecosystems with practical support for girls and
                women—especially single mothers and young women facing economic disadvantage.
                Through tree growing, mentorship, livelihood skills and community outreach, we equip
                women to become stewards and leaders in their neighbourhoods.
              </p>
            </div>
          </div>
        </section>

        {/* Official Theme Statement */}
        <section className="border-y border-charcoal/12 bg-white py-14 lg:py-16">
          <div className="site-shell text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-botanical">
              Official Organisational Theme
            </p>
            <blockquote className="mx-auto mt-5 max-w-4xl font-serif text-3xl leading-snug text-deep-forest sm:text-4xl lg:text-5xl">
              {organisationInfo.officialTheme}
            </blockquote>
          </div>
        </section>

        {/* Mission & Vision — Contrasting Editorial Split (No Generic Icon Cards) */}
        <section className="grid lg:grid-cols-2">
          <div className="bg-soft-sage px-6 py-16 text-deep-forest sm:px-12 lg:px-[7vw] lg:py-24">
            <p className="eyebrow text-botanical">
              <span />
              Our mission
            </p>
            <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl">
              {organisationInfo.missionTitle}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-deep-forest/85">
              {organisationInfo.missionBody}
            </p>
          </div>
          <div className="bg-deep-forest px-6 py-16 text-ivory sm:px-12 lg:px-[7vw] lg:py-24">
            <p className="eyebrow text-earth-gold">
              <span />
              Our vision
            </p>
            <h2 className="mt-5 font-serif text-3xl leading-tight text-white sm:text-4xl">
              {organisationInfo.visionTitle}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-ivory/85">
              {organisationInfo.visionBody}
            </p>
          </div>
        </section>

        {/* Core Values & Approach */}
        <section className="bg-ivory py-16 lg:py-24">
          <div className="site-shell">
            <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
              <div>
                <p className="eyebrow text-botanical">
                  <span />
                  Core values
                </p>
                <h2 className="display mt-5 text-deep-forest">
                  Care, dignity and <em>responsibility.</em>
                </h2>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                {coreValues.map((value) => (
                  <article key={value.number} className="border-t border-deep-forest/20 pt-5">
                    <span className="text-xs font-bold tracking-widest text-botanical">
                      {value.number}
                    </span>
                    <h3 className="mt-2 font-serif text-2xl text-deep-forest">{value.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-charcoal/75">{value.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-16 border-t border-charcoal/15 pt-14">
              <p className="eyebrow text-botanical">
                <span />
                Our approach
              </p>
              <div className="mt-8 grid gap-8 md:grid-cols-3">
                {organisationalApproach.map((pillar) => (
                  <article key={pillar.title}>
                    <h3 className="font-serif text-2xl text-deep-forest">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-charcoal/75">{pillar.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founder Feature */}
        <section className="bg-white py-16 lg:py-24">
          <div className="site-shell grid items-center gap-12 lg:grid-cols-[.88fr_1.12fr] lg:gap-20">
            <div>
              <SafeImage
                asset={founderProfile.photo}
                alt={founderProfile.imageAlt}
                className="aspect-[3/4] w-full max-w-md object-cover object-top"
              />
            </div>
            <div>
              <p className="eyebrow text-botanical">
                <span />
                The woman behind the vision
              </p>
              <h2 className="display mt-5 text-deep-forest">
                A mother’s perspective.
                <br />
                <em>A community’s possibility.</em>
              </h2>
              <p className="mt-6 text-lg leading-8 text-charcoal/85">
                {founderProfile.biographyPrimary}
              </p>
              <p className="mt-4 leading-7 text-charcoal/75">{founderProfile.biographySecondary}</p>
              <p className="mt-4 leading-7 text-charcoal/75">{founderProfile.biographyExtended}</p>
              <div className="mt-8 border-t border-charcoal/15 pt-5">
                <strong className="block text-deep-forest">{founderProfile.name}</strong>
                <span className="text-sm text-charcoal/70">{founderProfile.role}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Board */}
        <section id="leadership" className="scroll-mt-20 bg-soft-sage py-16 lg:py-24">
          <div className="site-shell">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow text-botanical">
                  <span />
                  Leadership board
                </p>
                <h2 className="display mt-4 text-deep-forest">
                  Women at the Heart <em>of Our Work.</em>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-deep-forest/80">
                Supported by a community of more than 30 volunteers across Makindye Division.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 min-[420px]:grid-cols-2 lg:grid-cols-4">
              {leadershipBoard.map((member) => (
                <article key={member.id} className="group">
                  <div className="aspect-[3/4] w-full overflow-hidden rounded-sm bg-deep-forest">
                    {member.photoSrc ? (
                      <img
                        src={member.photoSrc}
                        alt={member.photoAlt}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div
                        role="img"
                        aria-label={member.photoAlt}
                        className="flex h-full w-full flex-col items-center justify-center border border-earth-gold/30 bg-deep-forest p-6 text-center"
                      >
                        <span className="flex h-20 w-20 items-center justify-center rounded-full border border-earth-gold/45 bg-white/10 font-serif text-3xl text-ivory">
                          {member.initials}
                        </span>
                        <span className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-soft-sage/85">
                          Photograph pending
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    <h3 className="font-serif text-2xl text-deep-forest">{member.name}</h3>
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.14em] text-botanical">
                      {member.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Invitation */}
        <section className="bg-deep-forest py-16 text-white lg:py-20">
          <div className="site-shell flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="eyebrow text-earth-gold">
                <span />
                Partner with us
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
                Help this vision reach more women and communities.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/get-involved" className="button button-gold">
                Get Involved <Arrow />
              </Link>
              <Link to="/our-work" className="button button-outline">
                Explore Our Work <Arrow />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
