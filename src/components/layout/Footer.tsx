import { LeafMark } from "@/components/ui/LeafMark";
import { Link } from "@/components/ui/Link";
import { organisationInfo } from "@/data/organisation";

export function Footer() {
  const { contact, footerMission, name, reviewNotice, tagline } = organisationInfo;

  return (
    <footer className="bg-charcoal text-white">
      <div className="site-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_.7fr_.8fr]">
        <div>
          <Link to="/" aria-label="Makindye Women Traders home">
            <LeafMark light />
          </Link>
          <p className="mt-6 max-w-sm leading-7 text-white/80">{footerMission}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.16em] text-earth-gold">{tagline}</p>
          <p className="mt-3 text-xs uppercase tracking-widest text-white/65">
            {contact.registrationNote}
          </p>
        </div>
        <div>
          <p className="footer-title">Explore</p>
          <div className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/our-work">Our Work</Link>
            <Link to="/impact">Our Impact</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/news">News &amp; Updates</Link>
            <Link to="/get-involved">Get Involved</Link>
          </div>
        </div>
        <div>
          <p className="footer-title">Contact</p>
          <div className="footer-links">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
            <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp {contact.phoneDisplay}
            </a>
            <span>{contact.location}</span>
          </div>
        </div>
      </div>
      <div className="site-shell border-t border-white/15 py-5 text-xs text-white/75">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              to="/contact#privacy"
              className="inline-flex min-h-10 items-center hover:text-white"
            >
              Privacy Information
            </Link>
            <Link to="/contact" className="inline-flex min-h-10 items-center hover:text-white">
              Contact Us
            </Link>
            <Link to="/staff" className="inline-flex min-h-10 items-center hover:text-white">
              Staff Portal
            </Link>
          </div>
        </div>
        <p className="mt-2 text-[11px] text-earth-gold">{reviewNotice}</p>
      </div>
    </footer>
  );
}
