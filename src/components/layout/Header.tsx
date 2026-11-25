import { useCallback, useEffect, useRef, useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { LeafMark } from "@/components/ui/LeafMark";
import { mobileNavigationGroups, navigationLinks, organisationInfo } from "@/data/organisation";
import { useEscapeKey } from "@/hooks/useEscapeKey";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { contact } = organisationInfo;

  const openMenu = useCallback(() => setOpen(true), []);
  const closeMenu = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEscapeKey(closeMenu, open);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-40 border-b border-white/15 text-white">
      <div className="site-shell flex h-24 items-center justify-between">
        <a href="#home" aria-label="Makindye Women Traders home">
          <LeafMark light />
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navigationLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="button button-gold hidden lg:inline-flex">
          Partner With Us <Arrow />
        </a>
        <button
          ref={toggleRef}
          type="button"
          className="menu-button lg:hidden"
          onClick={openMenu}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label="Open navigation menu"
        >
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        data-open={open}
        className="mobile-drawer lg:hidden"
      >
        <div className="mobile-drawer-head">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            aria-label="Makindye Women Traders home"
          >
            <LeafMark light />
          </a>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeMenu}
            tabIndex={open ? 0 : -1}
            className="mobile-drawer-close"
            aria-label="Close navigation menu"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <nav className="mobile-drawer-body" aria-label="Mobile sections">
          {mobileNavigationGroups.map((group) => (
            <div key={group.heading} className="mobile-drawer-group">
              <p className="mobile-drawer-heading">{group.heading}</p>
              <ul className="mobile-drawer-list">
                {group.links.map((item) => (
                  <li key={`${group.heading}-${item.label}`}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      tabIndex={open ? 0 : -1}
                      className="mobile-drawer-link"
                    >
                      <span>{item.label}</span>
                      <Arrow />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mobile-drawer-foot">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="button button-gold w-full"
          >
            Partner With Us <Arrow />
          </a>
          <div className="mobile-drawer-contact">
            <a href={`mailto:${contact.email}`} tabIndex={open ? 0 : -1}>
              {contact.email}
            </a>
            <span>
              {contact.phoneDisplay} · {contact.location}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
