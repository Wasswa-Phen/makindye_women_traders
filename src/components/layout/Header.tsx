import { useCallback, useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { LeafMark } from "@/components/ui/LeafMark";
import { navigationLinks } from "@/data/organisation";
import { useEscapeKey } from "@/hooks/useEscapeKey";

export function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = useCallback(() => setOpen(false), []);

  useEscapeKey(closeMenu, open);

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
          Partner with us <Arrow />
        </a>
        <button
          type="button"
          className="menu-button lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-menu lg:hidden"
          aria-label="Mobile navigation"
        >
          {navigationLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="button button-gold mt-4" onClick={closeMenu}>
            Partner with us <Arrow />
          </a>
        </nav>
      )}
    </header>
  );
}
