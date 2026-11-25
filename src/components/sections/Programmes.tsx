import { SafeImage } from "@/components/ui/SafeImage";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { programmes } from "@/data/programmes";

export function Programmes() {
  return (
    <section id="work" className="bg-white py-16 lg:py-24">
      <div className="site-shell">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <SectionIntro
            eyebrow="Our work"
            title={
              <>
                Practical action.
                <br />
                <em>Human impact.</em>
              </>
            }
          />
          <p className="max-w-lg text-lg leading-8 text-charcoal/75 lg:ml-auto">
            Connecting care for the environment with women’s leadership, practical learning and
            resilient communities.
          </p>
        </div>
        <div className="mt-12 grid gap-x-6 gap-y-11 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {programmes.map((programme) => (
            <article className="programme group" key={programme.id}>
              <div className="overflow-hidden">
                <SafeImage asset={programme.photo} alt={programme.imageAlt} loading="lazy" />
              </div>
              <div className="mt-5 flex gap-5">
                <span className="pt-1 text-xs font-bold tracking-widest text-botanical">
                  {programme.number}
                </span>
                <div>
                  <h3 className="text-xl font-semibold leading-7 text-deep-forest">
                    {programme.title}
                  </h3>
                  <p className="mt-2 leading-7 text-charcoal/75">{programme.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
