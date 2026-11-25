import { Arrow } from "@/components/ui/Arrow";
import { SafeImage } from "@/components/ui/SafeImage";
import { organisationInfo } from "@/data/organisation";
import { photos } from "@/data/photos";

export function FlagshipInitiative() {
  return (
    <section className="overflow-hidden bg-deep-forest text-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[440px] lg:min-h-[620px]">
          <SafeImage
            asset={photos.womenRecycling}
            className="absolute inset-0 h-full w-full object-cover object-top"
            alt="African women in green aprons sorting recyclable plastic bottles in Kampala"
          />
          <div className="absolute inset-0 bg-deep-forest/15" />
          <span className="image-label">Illustrative concept image</span>
        </div>
        <div className="flex items-center px-6 py-16 sm:px-12 lg:px-[8vw] lg:py-20">
          <div className="max-w-xl">
            <p className="eyebrow text-soft-sage">
              <span />
              Flagship initiative
            </p>
            <h2 className="display mt-6">
              {organisationInfo.flagshipTitlePrefix}
              <br />
              into <em>{organisationInfo.flagshipTitleHighlight}</em>
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/85">
              {organisationInfo.flagshipDescription}
            </p>
            <div className="my-8 border-l border-earth-gold pl-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-earth-gold">
                {organisationInfo.flagshipCalloutTitle}
              </p>
              <p className="mt-3 leading-7 text-white/80">{organisationInfo.flagshipCalloutBody}</p>
            </div>
            <a className="button button-gold" href="#contact">
              Explore partnership <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
