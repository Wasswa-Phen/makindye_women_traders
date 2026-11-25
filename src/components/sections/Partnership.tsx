import { type FormEvent, useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { organisationInfo, partnershipInterests } from "@/data/organisation";

export function Partnership() {
  const [sent, setSent] = useState(false);
  const { contact } = organisationInfo;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-botanical text-white">
      <div className="site-shell grid gap-12 py-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:py-24">
        <div>
          <p className="eyebrow text-ivory">
            <span />
            Work with us
          </p>
          <h2 className="display mt-5">
            A greener future begins with what we do <em>together.</em>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-white/90">
            Whether you bring expertise, funding, markets or time, your partnership helps women
            build cleaner neighbourhoods and stronger livelihoods.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="button button-gold" href={`mailto:${contact.email}`}>
              Partner With Us <Arrow />
            </a>
            <a
              className="button button-outline"
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Support Our Work <Arrow />
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          {sent ? (
            <div className="flex min-h-[340px] flex-col justify-center">
              <p className="text-xs font-bold uppercase tracking-widest text-earth-gold">
                Message prepared
              </p>
              <h3 className="mt-4 font-serif text-4xl">Thank you for reaching out.</h3>
              <p className="mt-4 leading-7 text-white/90">
                This review prototype does not transmit form entries. On launch, your enquiry will
                be delivered directly to the organisation.
              </p>
              <button
                type="button"
                className="text-link mt-8 self-start text-white"
                onClick={() => setSent(false)}
              >
                Send another message <Arrow />
              </button>
            </div>
          ) : (
            <>
              <div className="grid gap-7 sm:grid-cols-2">
                <label>
                  Full name
                  <input required name="name" placeholder="Your name" />
                </label>
                <label>
                  Email address
                  <input required type="email" name="email" placeholder="you@organisation.org" />
                </label>
              </div>
              <label>
                I’m interested in
                <select name="interest" defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  {partnershipInterests.map((interest) => (
                    <option key={interest} value={interest}>
                      {interest}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Tell us a little more
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="How would you like to work together?"
                />
              </label>
              <button className="button button-gold mt-2" type="submit">
                Send Enquiry <Arrow />
              </button>
              <p className="text-xs leading-5 text-white/80">
                Demonstration form — no personal data is transmitted or stored.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
