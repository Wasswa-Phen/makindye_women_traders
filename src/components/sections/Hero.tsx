import { Arrow } from "@/components/ui/Arrow";
import { Link } from "@/components/ui/Link";
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
      <div className="site-shell relative z-10 flex min-h-[680px] items-end pb-16 pt-32 lg:min-h-[760px] lg:items-center lg:pb-12">
        <div className="max-w-[740px] text-white">
          <h1 className="font-serif text-[clamp(3rem,7.4vw,6.4rem)] leading-[0.94] tracking-[-0.04em] text-balance">
            {organisationInfo.heroTitlePrefix}
            <em className="font-normal text-soft-sage">{organisationInfo.heroTitleHighlight}</em>
            {organisationInfo.heroTitleSuffix}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-ivory/90 sm:text-xl">
            {organisationInfo.heroDescription}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link className="button button-gold" to="/our-work">
              Discover Our Work <Arrow />
            </Link>
            <Link className="button button-outline" to="/get-involved">
              Partner With Us <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
