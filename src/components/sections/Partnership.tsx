import { Arrow } from "@/components/ui/Arrow";
import { Link } from "@/components/ui/Link";
import { SafeImage } from "@/components/ui/SafeImage";
import { photos } from "@/data/photos";

export function Partnership() {
  return (
    <section id="contact" className="bg-botanical text-white">
      <div className="site-shell grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:py-24">
        <div>
          <p className="eyebrow text-ivory">
            <span />
            Get involved
          </p>
          <h2 className="display mt-5">
            A Greener Future Begins With <em>Us.</em>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-white/90">
            Whether you bring technical expertise, funding, recycling markets or volunteer support,
            your collaboration helps women build cleaner neighbourhoods and lasting livelihoods.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link className="button button-gold" to="/get-involved">
              Get Involved <Arrow />
            </Link>
            <Link className="button button-outline" to="/contact">
              Start a Conversation <Arrow />
            </Link>
          </div>
        </div>
        <div className="overflow-hidden">
          <SafeImage
            asset={photos.communityOutreach}
            alt="Women sharing tree seedlings during community outreach in Kampala"
            className="aspect-[16/10] w-full object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
