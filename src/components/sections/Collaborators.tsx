import { collaborators } from "@/data/organisation";

export function Collaborators() {
  return (
    <section className="bg-ivory py-14 lg:py-16">
      <div className="site-shell">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-charcoal/70">
          Growing through collaboration
        </p>
        <div className="mt-8 grid border-y border-charcoal/20 sm:grid-cols-2">
          {collaborators.map((partner, index) => (
            <div key={partner.id} className={`collaborator ${index > 0 ? "sm:border-l" : ""}`}>
              <span className="font-serif text-3xl text-deep-forest">{partner.name}</span>
              <span>{partner.subtitle}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-charcoal/65">
          Documented collaborations shown; official partner logos can be added when supplied.
        </p>
      </div>
    </section>
  );
}
