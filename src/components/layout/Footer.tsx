import { LeafMark } from "@/components/ui/LeafMark";
import { organisationInfo } from "@/data/organisation";

interface FooterProps {
  onDashboard: () => void;
}

export function Footer({ onDashboard }: FooterProps) {
  const { contact, footerMission, name, reviewNotice } = organisationInfo;

  return (
    <footer className="bg-charcoal text-white">
      <div className="site-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_.7fr_.8fr]">
        <div>
          <LeafMark light />
          <p className="mt-6 max-w-sm leading-7 text-white/80">{footerMission}</p>
          <p className="mt-6 text-xs uppercase tracking-widest text-white/65">
            {contact.registrationNote}
          </p>
        </div>
        <div>
          <p className="footer-title">Explore</p>
          <div className="footer-links">
            <a href="#about">About Us</a>
            <a href="#work">Our Work</a>
            <a href="#impact">Our Impact</a>
            <a href="#gallery">Gallery</a>
            <a href="#news">News &amp; Updates</a>
          </div>
        </div>
        <div>
          <p className="footer-title">Contact</p>
          <div className="footer-links">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
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
          <div className="flex items-center gap-6">
            <a href="#contact" className="inline-flex min-h-10 items-center hover:text-white">
              Contact Us
            </a>
            <button
              type="button"
              onClick={onDashboard}
              className="inline-flex min-h-10 items-center hover:text-white"
            >
              Staff Portal
            </button>
          </div>
        </div>
        <p className="mt-2 text-[11px] text-earth-gold">{reviewNotice}</p>
      </div>
    </footer>
  );
}
