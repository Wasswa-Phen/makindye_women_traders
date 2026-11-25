import { Arrow } from "@/components/ui/Arrow";
import { Link } from "@/components/ui/Link";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { programmes } from "@/data/programmes";

export function Programmes() {
  return (
    <section id="work" className="bg-white py-16 lg:py-24">
      <div className="site-shell">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionIntro
            eyebrow="Our programmes"
            title={
              <>
                Practical Action.
                <br />
                <em>Human Impact.</em>
              </>
            }
          />
          <Link className="text-link self-start text-deep-forest lg:self-auto" to="/our-work">
            Explore Our Programmes <Arrow />
          </Link>
        </div>
        <div className="mt-12 grid gap-x-6 gap-y-11 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {programmes.map((programme) => (
            <article className="programme group" key={programme.id}>
              <Link
                to={`/our-work/${programme.slug}`}
                className="block focus-visible:outline-offset-4"
              >
                <div className="overflow-hidden">
                  <SafeImage asset={programme.photo} alt={programme.imageAlt} loading="lazy" />
                </div>
                <div className="mt-5 flex gap-5">
                  <span className="pt-1 text-xs font-bold tracking-widest text-botanical">
                    {programme.number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-semibold leading-7 text-deep-forest transition-colors group-hover:text-botanical">
                      {programme.title}
                    </h3>
                    <p className="mt-2 leading-7 text-charcoal/75">{programme.shortDescription}</p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
