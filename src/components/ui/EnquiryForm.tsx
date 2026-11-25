import { type FormEvent, useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { partnershipInterests } from "@/data/organisation";

interface EnquiryFormProps {
  defaultInterest?: string;
  dark?: boolean;
}

export function EnquiryForm({ defaultInterest = "", dark = true }: EnquiryFormProps) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <form className={dark ? "contact-form" : "contact-form-light"} onSubmit={handleSubmit}>
      {sent ? (
        <div className="flex min-h-[340px] flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-widest text-earth-gold">
            Enquiry prepared
          </p>
          <h3
            className={`mt-4 font-serif text-3xl sm:text-4xl ${dark ? "text-white" : "text-deep-forest"}`}
          >
            Thank you for reaching out.
          </h3>
          <p className={`mt-4 leading-7 ${dark ? "text-white/90" : "text-charcoal/80"}`}>
            This client-review prototype does not transmit form entries. On the production site,
            this form will deliver enquiries directly to Makindye Women Traders.
          </p>
          <button
            type="button"
            className={`text-link mt-8 self-start ${dark ? "text-white" : "text-deep-forest"}`}
            onClick={() => setSent(false)}
          >
            Prepare another message <Arrow />
          </button>
        </div>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2">
            <label>
              Full name
              <input required name="name" placeholder="Your full name" />
            </label>
            <label>
              Email address
              <input required type="email" name="email" placeholder="you@organisation.org" />
            </label>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <label>
              Organisation (optional)
              <input name="organisation" placeholder="Group, school or company" />
            </label>
            <label>
              I’m interested in
              <select name="interest" defaultValue={defaultInterest}>
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
          </div>
          <label>
            Message
            <textarea
              required
              name="message"
              rows={4}
              placeholder="Share how you would like to collaborate or connect..."
            />
          </label>
          <button className={`button mt-2 ${dark ? "button-gold" : "button-dark"}`} type="submit">
            Send Enquiry <Arrow />
          </button>
          <p className={`text-xs leading-5 ${dark ? "text-white/80" : "text-charcoal/70"}`}>
            Demonstration enquiry form — no personal data is transmitted or stored.
          </p>
        </>
      )}
    </form>
  );
}
