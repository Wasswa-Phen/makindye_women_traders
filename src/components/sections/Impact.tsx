import { SectionIntro } from "@/components/ui/SectionIntro";
import { impactStats, impactVerificationNote } from "@/data/programmes";

export function Impact() {
  return (
    <section id="impact" className="bg-soft-sage py-16 lg:py-24">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <SectionIntro
            eyebrow="Reported impact"
            title={
              <>
                Early steps.
                <br />
                <em>Lasting intent.</em>
              </>
            }
            body="We are building carefully, learning from the field and growing through collaboration."
          />
          <div className="grid sm:grid-cols-2">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className={`impact-stat ${stat.featuredSpan ? "sm:col-span-2 sm:ml-auto sm:w-1/2" : ""}`}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                <small>{stat.note}</small>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex items-start gap-3 border-t border-deep-forest/20 pt-5 text-xs leading-5 text-deep-forest/80">
          <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-earth-gold" />
          <p>{impactVerificationNote}</p>
        </div>
      </div>
    </section>
  );
}
