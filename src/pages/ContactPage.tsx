import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Arrow } from "@/components/ui/Arrow";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { organisationInfo } from "@/data/organisation";

export function ContactPage() {
  const { contact, name } = organisationInfo;

  return (
    <>
      <Header solid />
      <main>
        <section className="bg-deep-forest py-16 text-white lg:py-24">
          <div className="site-shell max-w-3xl">
            <p className="eyebrow text-soft-sage">
              <span />
              Contact us
            </p>
            <h1 className="display mt-5">
              Connect With <em>Makindye Women Traders.</em>
            </h1>
            <p className="mt-6 text-lg leading-8 text-ivory/85">
              Reach out directly for partnerships, volunteering, recycling initiative enquiries or
              community collaborations in Kampala.
            </p>
          </div>
        </section>

        <section className="bg-ivory py-16 lg:py-24">
          <div className="site-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
            <div className="space-y-8">
              <div className="border-t-2 border-deep-forest bg-white p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-botanical">
                  Organisation Details
                </p>
                <h2 className="mt-3 font-serif text-3xl text-deep-forest">{name}</h2>
                <p className="mt-2 text-sm font-medium text-charcoal/80">{contact.location}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-botanical">
                  {contact.registrationNote}
                </p>

                <div className="mt-8 space-y-5 border-t border-charcoal/15 pt-6 text-sm">
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-charcoal/60">
                      Email
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="mt-1 inline-block text-base font-semibold text-deep-forest hover:text-botanical hover:underline"
                    >
                      {contact.email}
                    </a>
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-charcoal/60">
                      Telephone
                    </span>
                    <a
                      href={contact.phoneHref}
                      className="mt-1 inline-block text-base font-semibold text-deep-forest hover:text-botanical hover:underline"
                    >
                      {contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href={contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-gold w-full"
                  >
                    Message on WhatsApp <Arrow />
                  </a>
                </div>
              </div>

              <div id="privacy" className="scroll-mt-24 border border-charcoal/15 bg-white p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-botanical">
                  Privacy &amp; Prototype Notice
                </p>
                <p className="mt-3 text-sm leading-6 text-charcoal/75">
                  This client-review website prototype does not collect, store or transmit personal
                  data through its enquiry form. Please use the direct email or WhatsApp contact
                  details above to reach the organisation directly.
                </p>
              </div>
            </div>

            <div className="bg-deep-forest p-6 text-white sm:p-8 lg:p-10">
              <h2 className="font-serif text-3xl text-ivory">Send an Enquiry</h2>
              <p className="mt-2 text-sm text-soft-sage/85">
                Use the demonstration form below or write directly to {contact.email}.
              </p>
              <div className="mt-6">
                <EnquiryForm dark />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
