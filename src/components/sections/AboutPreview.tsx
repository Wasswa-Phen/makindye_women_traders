import { Arrow } from "@/components/ui/Arrow";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { organisationInfo } from "@/data/organisation";
import { photos } from "@/data/photos";

export function AboutPreview() {
  return (
    <section id="about" className="bg-ivory py-16 lg:py-24">
      <div className="site-shell grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-20">
        <div className="relative pb-6">
          <SafeImage
            asset={photos.womenCommunity}
            className="h-[420px] w-[88%] object-cover object-top sm:h-[500px] lg:h-[580px]"
            alt="Smiling Ugandan women standing together in a Kampala community setting"
          />
          <div className="absolute bottom-0 right-0 w-[68%] bg-deep-forest p-6 text-white sm:w-[56%] lg:p-8">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-earth-gold">
              Official theme
            </p>
            <p className="font-serif text-xl leading-snug sm:text-2xl">
              {organisationInfo.officialTheme}
            </p>
          </div>
          <span className="image-label">Illustrative concept image</span>
        </div>
        <div className="pt-4 lg:pt-0">
          <SectionIntro
            eyebrow="Who we are"
            title={
              <>
                When women lead,
                <br />
                <em>communities thrive.</em>
              </>
            }
          />
          <p className="mt-7 text-lg leading-8 text-charcoal/85">{organisationInfo.aboutLead}</p>
          <p className="mt-4 leading-7 text-charcoal/75">{organisationInfo.aboutBody}</p>
          <a className="text-link mt-7 text-deep-forest" href="#founder">
            Meet our founder <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
