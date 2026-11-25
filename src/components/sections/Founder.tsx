import { Arrow } from "@/components/ui/Arrow";
import { Link } from "@/components/ui/Link";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { founderProfile, leadershipBoard } from "@/data/organisation";

export function Founder() {
  const boardPreview = leadershipBoard.filter((m) => m.id !== "fatina");

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
              eyebrow="Our leadership"
              title={
                <>
                  Leadership Rooted
                  <br />
                  in <em>Dignity.</em>
                </>
              }
            />
            <p className="mt-6 text-lg leading-8 text-charcoal/85">
              {founderProfile.biographyPrimary}
            </p>
            <p className="mt-4 leading-7 text-charcoal/75">{founderProfile.biographySecondary}</p>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-charcoal/15 pt-6">
              <div>
                <strong className="block text-deep-forest">{founderProfile.name}</strong>
                <span className="text-sm text-charcoal/70">{founderProfile.role}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {boardPreview.map((member) =>
                    member.photoSrc ? (
                      <img
                        key={member.id}
                        src={member.photoSrc}
                        alt={member.name}
                        className="h-10 w-10 rounded-full border-2 border-white object-cover object-top"
                      />
                    ) : (
                      <span
                        key={member.id}
                        aria-label={member.name}
                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-soft-sage text-xs font-bold text-deep-forest"
                      >
                        {member.initials}
                      </span>
                    ),
                  )}
                </div>
                <span className="text-xs text-charcoal/70">Executive team</span>
              </div>
            </div>

            <Link className="text-link mt-7 text-deep-forest" to="/about#leadership">
              Meet Our Leadership <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
