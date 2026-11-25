import { Arrow } from "@/components/ui/Arrow";
import { Link } from "@/components/ui/Link";
import { collaborators } from "@/data/organisation";

export function Collaborators() {
  return (
    <section className="bg-ivory py-14 lg:py-16">
      <div className="site-shell">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal/70">
            Change Grows Through Collaboration
          </p>
          <Link className="text-link text-deep-forest" to="/get-involved">
            Become a Partner <Arrow />
          </Link>
        </div>
        <div className="mt-8 grid border-y border-charcoal/20 sm:grid-cols-2">
          {collaborators.map((partner, index) => (
            <div
              key={partner.id}
              className={`collaborator px-4 text-center ${index > 0 ? "border-t sm:border-t-0 sm:border-l" : ""}`}
            >
              <span className="font-serif text-2xl text-deep-forest normal-case tracking-normal sm:text-3xl">
                {partner.name}
              </span>
              <span className="mt-1.5">{partner.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
