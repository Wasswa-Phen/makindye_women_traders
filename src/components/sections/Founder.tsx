import { SafeImage } from "@/components/ui/SafeImage";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { founderProfile } from "@/data/organisation";

export function Founder() {
  return (
    <section id="founder" className="bg-white py-16 lg:py-24">
      <div className="site-shell grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div className="lg:order-2">
          <SafeImage
            asset={founderProfile.photo}
            className="h-[440px] w-full object-cover object-top sm:h-[520px] lg:h-[600px]"
            alt={founderProfile.imageAlt}
            loading="lazy"
          />
        </div>
        <div className="flex items-center lg:order-1">
          <div>
            <SectionIntro
              eyebrow="Leadership"
              title={
                <>
                  Leadership rooted
                  <br />
                  in <em>dignity.</em>
                </>
              }
            />
            <p className="mt-6 text-lg leading-8 text-charcoal/85">
              {founderProfile.biographyPrimary}
            </p>
            <p className="mt-4 leading-7 text-charcoal/75">{founderProfile.biographySecondary}</p>
            <div className="mt-8 border-t border-charcoal/20 pt-5">
              <strong className="block text-deep-forest">{founderProfile.name}</strong>
              <span className="text-sm text-charcoal/70">{founderProfile.role}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
