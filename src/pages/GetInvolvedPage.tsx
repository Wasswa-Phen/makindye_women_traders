import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Arrow } from "@/components/ui/Arrow";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { Link } from "@/components/ui/Link";
import { PageHero } from "@/components/ui/PageHero";
import { SafeImage } from "@/components/ui/SafeImage";
import { organisationInfo } from "@/data/organisation";
import { photos } from "@/data/photos";

const involvementWays = [
  {
    number: "01",
    title: "Organisational Partnerships",
    body: "Collaborate with Makindye Women Traders on conservation, school clubs, community mobilisation or women’s empowerment programmes across Uganda.",
  },
  {
    number: "02",
    title: "Recycling Initiative Support",
    body: "Help build Plastic to Possibility by sharing technical waste-management advice, collection tools or reliable recycling market off-take partners.",
  },
  {
    number: "03",
    title: "Volunteering",
    body: "Join over 30 community volunteers supporting tree stewardship, community outreach and environmental learning sessions.",
  },
  {
    number: "04",
    title: "Material & Resource Contributions",
    body: "Contribute tree seedlings, protective gloves, sorting sacks, tailoring supplies or school environmental club learning materials.",
  },
];

export function GetInvolvedPage() {
  const { contact } = organisationInfo;

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Get involved"
          title={
            <>
              Build Change <em>Together.</em>
            </>
          }
          description="Support women-led conservation, mentorship and our developing plastic recycling initiative in Kampala."
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Get Involved" }]}
          photo={photos.womenLivelihoods}
          imageAlt="African women collaborating in a skills and livelihood workshop"
        />

        {/* Ways to Participate */}
        <section className="bg-ivory py-16 lg:py-24">
          <div className="site-shell">
            <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
              <div>
                <p className="eyebrow text-botanical">
                  <span />
                  Ways to contribute
                </p>
                <h2 className="display mt-4 text-deep-forest">
                  Partner, volunteer or <em>support.</em>
                </h2>
                <p className="mt-5 leading-7 text-charcoal/80">
                  Every partnership strengthens community-rooted environmental stewardship led by
                  women in Makindye Division.
                </p>
                <div className="mt-8 overflow-hidden">
                  <SafeImage
                    asset={photos.womenRecycling}
                    alt="Women sorting recyclable plastics in Kampala"
                    className="aspect-[4/3] w-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {involvementWays.map((item) => (
                  <article key={item.number} className="border-t-2 border-deep-forest bg-white p-7">
                    <span className="text-xs font-bold tracking-widest text-botanical">
                      {item.number}
                    </span>
                    <h3 className="mt-2 font-serif text-2xl text-deep-forest">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-charcoal/75">{item.body}</p>
                  </article>
                ))}

                <article className="border-t-2 border-earth-gold bg-deep-forest p-7 text-white sm:col-span-2">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-earth-gold">
                    Financial Support Enquiries
                  </p>
                  <h3 className="mt-2 font-serif text-2xl">
                    Sponsor trees, workshops or developing programmes
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ivory/85">
                    To protect supporters, direct payment details are shared only after direct
                    verification with Makindye Women Traders leadership via email or WhatsApp.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-gold"
                    >
                      WhatsApp {contact.phoneDisplay} <Arrow />
                    </a>
                    <Link to="/contact" className="button button-outline">
                      Direct Contact Details <Arrow />
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Enquiry Form */}
        <section className="bg-botanical py-16 text-white lg:py-24">
          <div className="site-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
            <div>
              <p className="eyebrow text-ivory">
                <span />
                Partnership enquiry
              </p>
              <h2 className="display mt-5">
                Start a <em>conversation.</em>
              </h2>
              <p className="mt-5 leading-7 text-white/90">
                Tell us how you or your organisation would like to get involved with Makindye Women
                Traders.
              </p>
            </div>
            <EnquiryForm defaultInterest="Organisational partnership" dark />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
