import { Arrow } from "@/components/ui/Arrow";
import { Link } from "@/components/ui/Link";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { impactStats, impactVerificationNote } from "@/data/programmes";

export function Impact() {
  return (
    <section id="impact" className="bg-soft-sage py-16 lg:py-24">
      <div className="site-shell">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <SectionIntro
              eyebrow="Our impact"
              title={
                <>
                  Small Actions.
                  <br />
                  <em>Lasting Transformation.</em>
                </>
              }
              body="We are growing carefully through community stewardship and local collaboration."
            />
            <Link className="text-link mt-7 text-deep-forest" to="/impact">
              Discover Our Impact <Arrow />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2">
            {impactStats.map((stat) => (
              <div key={stat.label} className="impact-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                <small>{stat.note}</small>
              </div>
            ))}
            <article className="border-t border-deep-forest/22 py-7 sm:col-span-2 sm:px-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-botanical">
                2024 Community Outreach · Northern Uganda
              </p>
              <h3 className="mt-2 font-serif text-2xl text-deep-forest">
                Standing with the women of Layibi Village
              </h3>
              <p className="mt-2.5 max-w-2xl leading-7 text-deep-forest/85">
                In 2024, Makindye Women Traders partnered with Sanctuary Church Gulu to provide
                community food outreach to women of the Layibi Women Society in Northern
                Uganda—uniting practical care with grassroots solidarity.
              </p>
            </article>
          </div>
        </div>
        <p className="mt-8 border-t border-deep-forest/20 pt-5 text-xs leading-5 text-deep-forest/80">
          {impactVerificationNote}
        </p>
      </div>
    </section>
  );
}
