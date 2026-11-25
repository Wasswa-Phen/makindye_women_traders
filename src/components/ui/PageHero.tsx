import type { ReactNode } from "react";
import { Link } from "@/components/ui/Link";
import { SafeImage } from "@/components/ui/SafeImage";
import type { PhotoAsset } from "@/types/content";

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  photo?: PhotoAsset;
  imageAlt?: string;
  children?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  photo,
  imageAlt = "",
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-deep-forest pt-32 pb-16 text-white lg:pt-40 lg:pb-24">
      {photo && (
        <>
          <SafeImage
            asset={photo}
            alt={imageAlt}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-top opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a251e]/95 via-[#0a251e]/82 to-[#173f35]/70" />
        </>
      )}
      <div className="site-shell relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-soft-sage/80"
          >
            {breadcrumbs.map((crumb, idx) => (
              <span key={crumb.label} className="inline-flex items-center gap-2">
                {idx > 0 && <span aria-hidden="true">/</span>}
                {crumb.to ? (
                  <Link
                    to={crumb.to}
                    className="hover:text-white hover:underline underline-offset-4"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-earth-gold">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className="max-w-3xl">
          <p className="eyebrow text-soft-sage">
            <span />
            {eyebrow}
          </p>
          <h1 className="display mt-5 text-white">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/88">{description}</p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
