import { Arrow } from "@/components/ui/Arrow";
import { SafeImage } from "@/components/ui/SafeImage";
import { organisationInfo } from "@/data/organisation";
import { photos } from "@/data/photos";

export function Hero() {
  return (
    <section id="home" className="hero">
      <SafeImage
        asset={photos.hero}
        alt="Ugandan women working together to sort recyclable materials in Kampala"
        fetchPriority="high"
      />
      <div className="hero-overlay" />
      <div className="site-shell relative z-10 flex min-h-[680px] items-end pb-16 pt-32 lg:min-h-[760px] lg:items-center lg:pb-10">
        <div className="max-w-[780px] text-white">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-soft-sage">
            <span className="h-px w-9 bg-earth-gold" />
            {organisationInfo.tagline}
          </p>
          <h1 className="font-serif text-[clamp(3.1rem,7.8vw,6.75rem)] leading-[0.9] tracking-[-0.045em] text-balance">
            {organisationInfo.heroTitlePrefix}
            <em className="font-normal text-soft-sage">{organisationInfo.heroTitleHighlight}</em>
            {organisationInfo.heroTitleSuffix}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/90">
            {organisationInfo.heroDescription}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="button button-gold" href="#work">
              Discover our work <Arrow />
            </a>
            <a className="button button-outline" href="#contact">
              Partner with us <Arrow />
            </a>
          </div>
          <p className="mt-7 inline-flex items-center gap-2 border border-white/20 bg-deep-forest/70 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-soft-sage">
            <span className="h-1.5 w-1.5 rounded-full bg-earth-gold" />
            Website concept prepared for client review
          </p>
        </div>
      </div>
      <div className="photo-note">Client review concept · Illustrative prototype photography</div>
    </section>
  );
}
