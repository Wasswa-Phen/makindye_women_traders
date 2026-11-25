import { FormEvent, ReactNode, useEffect, useState } from 'react'

const photos = {
  hero: '/images/makindye-hero.png',
  women:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=85',
  trees:
    'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1400&q=85',
  recycling:
    'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1400&q=85',
  community:
    'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=1400&q=85',
  girls:
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85',
  outreach:
    'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=85',
  founder:
    'https://images.unsplash.com/photo-1589156288859-f0cb0d82b065?auto=format&fit=crop&w=1200&q=85',
}

const programmes = [
  ['01', 'Recycling & Waste Management', 'Building practical pathways from discarded materials to dignified livelihoods.', photos.recycling],
  ['02', 'Tree Growing & Conservation', 'Restoring green spaces through community stewardship and local collaboration.', photos.trees],
  ['03', "Women's Empowerment & Livelihoods", 'Supporting women with the confidence and opportunity to shape their own futures.', photos.women],
  ['04', "Mentorship & Girls' Leadership", 'Helping girls see themselves as capable leaders and environmental advocates.', photos.girls],
  ['05', 'School Environmental Clubs', 'Planting lifelong habits of care, responsibility and climate action.', photos.community],
  ['06', 'Community Outreach', 'Taking practical environmental education to communities where it matters most.', photos.outreach],
]

const gallery = [
  [photos.hero, 'Women at the centre of community action'],
  [photos.trees, 'Growing a greener Kampala'],
  [photos.outreach, 'Community outreach and learning'],
  [photos.girls, 'The next generation of leaders'],
  [photos.recycling, 'Finding possibility in waste'],
] as const

const news = [
  {
    category: 'Field Notes',
    date: '18 May 2024',
    title: 'Women, trees and the quiet work of lasting change',
    image: photos.trees,
    excerpt: 'A reflection on community-led conservation and what becomes possible when women are trusted to lead.',
  },
  {
    category: 'Community',
    date: '06 April 2024',
    title: 'Taking environmental learning beyond Kampala',
    image: photos.outreach,
    excerpt: 'Our outreach in Northern Uganda opened new conversations around stewardship, dignity and shared responsibility.',
  },
  {
    category: 'Perspective',
    date: '22 March 2024',
    title: 'Why waste is also a women’s economic opportunity',
    image: photos.recycling,
    excerpt: 'We are exploring a women-led recycling programme that can turn cleaner streets into stronger livelihoods.',
  },
]

function Arrow({ direction = 'right' }: { direction?: 'right' | 'left' }) {
  return (
    <svg className={direction === 'left' ? 'rotate-180' : ''} width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3.75 9h10.5M10 4.75 14.25 9 10 13.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LeafMark({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <svg width="38" height="42" viewBox="0 0 38 42" fill="none" aria-hidden="true">
        <path d="M19 39V14M19 28C11 27 6 22 5 13c8 0 13 4 14 11M19 21c1-8 6-13 14-14 0 9-5 15-14 16" stroke={light ? '#F8F6F0' : '#173F35'} strokeWidth="2" />
        <path d="M14 39h10" stroke={light ? '#C5A46D' : '#C5A46D'} strokeWidth="2" />
      </svg>
      <div className={`leading-[.9] tracking-[-.03em] ${light ? 'text-white' : 'text-forest'}`}>
        <strong className="block text-[15px]">MAKINDYE</strong>
        <span className="text-[13px] tracking-[.06em]">WOMEN TRADERS</span>
      </div>
    </div>
  )
}

function SectionIntro({ eyebrow, title, body, light = false }: { eyebrow: string; title: ReactNode; body?: string; light?: boolean }) {
  return (
    <div className={`section-intro ${light ? 'text-white' : ''}`}>
      <div className="eyebrow">
        <span />
        {eyebrow}
      </div>
      <h2 className="display mt-6">{title}</h2>
      {body && <p className={`mt-5 max-w-xl text-base leading-7 ${light ? 'text-white/70' : 'text-charcoal/65'}`}>{body}</p>}
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const links = ['Home', 'About', 'Our Work', 'Impact', 'Gallery', 'News', 'Contact']
  return (
    <header className="absolute inset-x-0 top-0 z-40 border-b border-white/15 text-white">
      <div className="site-shell flex h-24 items-center justify-between">
        <a href="#home" aria-label="Makindye Women Traders home"><LeafMark light /></a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace('our work', 'work').replace(' ', '-')}`} className="nav-link">{link}</a>
          ))}
        </nav>
        <a href="#contact" className="button button-gold hidden lg:inline-flex">Partner with us <Arrow /></a>
        <button className="menu-button lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          <span /><span />
        </button>
      </div>
      {open && (
        <div className="mobile-menu lg:hidden">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase().replace('our work', 'work').replace(' ', '-')}`} onClick={() => setOpen(false)}>{link}</a>)}
          <a href="#contact" className="button button-gold mt-4" onClick={() => setOpen(false)}>Partner with us <Arrow /></a>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <img src={photos.hero} alt="Ugandan women working together to sort recyclable materials" />
      <div className="hero-overlay" />
      <div className="site-shell relative z-10 flex min-h-[760px] items-end pb-20 pt-40 lg:min-h-[880px] lg:items-center lg:pb-0">
        <div className="max-w-[780px] text-white">
          <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.22em] text-white/80"><span className="h-px w-9 bg-earth-gold" />Rooted in purpose. Growing change.</p>
          <h1 className="font-serif text-[clamp(3.7rem,8.5vw,7.75rem)] leading-[.87] tracking-[-.055em]">Women leading a <em className="font-normal text-soft-sage">greener</em> tomorrow.</h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/80">A women-led movement turning environmental responsibility into cleaner communities, stronger livelihoods and a more hopeful Kampala.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a className="button button-gold" href="#work">Discover our work <Arrow /></a>
            <a className="button button-outline" href="#contact">Partner with us <Arrow /></a>
          </div>
        </div>
      </div>
      <div className="photo-note">Prototype image · Replace with approved organisation photography</div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="bg-ivory py-24 lg:py-36">
      <div className="site-shell grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-28">
        <div className="relative">
          <img className="h-[520px] w-[88%] object-cover lg:h-[690px]" src={photos.women} alt="Confident African woman community leader" />
          <div className="absolute -bottom-8 right-0 w-[55%] bg-deep-forest p-7 text-white lg:p-10">
            <p className="font-serif text-2xl leading-tight">“Loving nature through women ensures continuity in transformation.”</p>
          </div>
          <span className="image-label">Placeholder photography</span>
        </div>
        <div className="pt-8 lg:pt-0">
          <SectionIntro eyebrow="Who we are" title={<>When women lead,<br /><em>communities thrive.</em></>} />
          <p className="mt-8 text-lg leading-8 text-charcoal/70">Makindye Women Traders is a women-led Community Based Organisation in Kampala, Uganda, building a grassroots movement around recycling, conservation and economic dignity.</p>
          <p className="mt-5 leading-7 text-charcoal/60">We believe women are not simply beneficiaries of environmental action. They are organisers, educators, earners and the people best placed to carry responsible practices into the next generation.</p>
          <a className="text-link mt-9" href="#founder">Read our story <Arrow /></a>
        </div>
      </div>
    </section>
  )
}

function Flagship() {
  return (
    <section className="overflow-hidden bg-deep-forest text-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[520px] lg:min-h-[760px]">
          <img className="absolute inset-0 h-full w-full object-cover" src={photos.recycling} alt="Sorted recyclable materials ready for processing" />
          <div className="absolute inset-0 bg-deep-forest/20" />
          <span className="image-label">Placeholder photography</span>
        </div>
        <div className="flex items-center px-6 py-20 sm:px-12 lg:px-[10vw]">
          <div className="max-w-xl">
            <p className="eyebrow"><span />Flagship initiative</p>
            <h2 className="display mt-7">Turning waste<br />into <em>possibility.</em></h2>
            <p className="mt-7 text-lg leading-8 text-white/70">We are developing a women-led recycling programme designed to create income, reduce neighbourhood waste and make environmental action part of everyday community life.</p>
            <div className="my-9 border-l border-earth-gold pl-6">
              <p className="text-sm font-semibold uppercase tracking-[.18em] text-earth-gold">An invitation to build with us</p>
              <p className="mt-3 leading-7 text-white/65">This is an emerging initiative—not a completed achievement. We welcome technical, funding and market partners who can help turn the vision into a durable local system.</p>
            </div>
            <a className="button button-gold" href="#contact">Explore partnership <Arrow /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Programmes() {
  return (
    <section id="work" className="bg-white py-24 lg:py-36">
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <SectionIntro eyebrow="Our programmes" title={<>Practical action.<br /><em>Human impact.</em></>} />
          <p className="max-w-lg text-lg leading-8 text-charcoal/60 lg:ml-auto">Our work connects care for the environment with women’s agency, practical learning and resilient communities.</p>
        </div>
        <div className="mt-16 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:mt-24 lg:grid-cols-3">
          {programmes.map(([number, title, copy, image]) => (
            <article className="programme group" key={title}>
              <div className="overflow-hidden"><img src={image} alt="" /></div>
              <div className="mt-6 flex gap-5">
                <span className="pt-1 text-xs font-bold tracking-widest text-botanical">{number}</span>
                <div>
                  <h3 className="text-xl font-semibold leading-7 text-deep-forest">{title}</h3>
                  <p className="mt-3 leading-7 text-charcoal/60">{copy}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-right text-xs uppercase tracking-widest text-charcoal/40">Programme imagery is temporary for prototype use</p>
      </div>
    </section>
  )
}

function Impact() {
  return (
    <section id="impact" className="bg-soft-sage py-24 lg:py-32">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <SectionIntro eyebrow="Reported impact" title={<>Early steps.<br /><em>Lasting intent.</em></>} body="We are building carefully, learning from the field and growing through collaboration." />
          <div className="grid sm:grid-cols-2">
            {[['200', 'trees planted', 'Through collaboration'], ['30+', 'volunteers', 'Growing community support'], ['2024', 'Northern Uganda', 'Community outreach']].map(([value, label, note], i) => (
              <div key={label} className={`impact-stat ${i === 2 ? 'sm:col-span-2 sm:w-1/2 sm:ml-auto' : ''}`}>
                <strong>{value}</strong>
                <span>{label}</span>
                <small>{note}</small>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex items-start gap-3 border-t border-deep-forest/15 pt-5 text-xs leading-5 text-deep-forest/60">
          <span className="mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-earth-gold" />
          <p>Prototype note: All reported figures are pending client verification before publication. No additional statistics have been inferred or invented.</p>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const [active, setActive] = useState<number | null>(null)
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])
  return (
    <section id="gallery" className="bg-ivory py-24 lg:py-36">
      <div className="site-shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionIntro eyebrow="From the field" title={<>Real people. Real action.<br /><em>Lasting change.</em></>} />
          <button className="text-link self-start lg:self-auto" onClick={() => setActive(0)}>View full gallery <Arrow /></button>
        </div>
        <div className="gallery-grid mt-16">
          {gallery.map(([src, caption], index) => (
            <button key={caption} onClick={() => setActive(index)} className={`gallery-image gallery-${index + 1}`} aria-label={`Open image: ${caption}`}>
              <img src={src} alt={caption} />
              <span>{caption}<Arrow /></span>
            </button>
          ))}
        </div>
        <p className="mt-4 text-xs uppercase tracking-widest text-charcoal/40">Prototype images · Replace with approved Makindye Women Traders albums</p>
      </div>
      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image viewer">
          <button className="lightbox-close" onClick={() => setActive(null)} aria-label="Close gallery">Close ×</button>
          <button className="lightbox-arrow left-5" onClick={() => setActive((active - 1 + gallery.length) % gallery.length)} aria-label="Previous image"><Arrow direction="left" /></button>
          <figure>
            <img src={gallery[active][0]} alt={gallery[active][1]} />
            <figcaption><span>{String(active + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}</span>{gallery[active][1]}</figcaption>
          </figure>
          <button className="lightbox-arrow right-5" onClick={() => setActive((active + 1) % gallery.length)} aria-label="Next image"><Arrow /></button>
        </div>
      )}
    </section>
  )
}

function Founder() {
  return (
    <section id="founder" className="bg-white py-24 lg:py-36">
      <div className="site-shell grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-28">
        <div className="relative lg:order-2">
          <img className="h-[570px] w-full object-cover object-top lg:h-[720px]" src={photos.founder} alt="Portrait placeholder for Namusoke Fatina" />
          <span className="image-label">Portrait placeholder · Replace with approved founder portrait</span>
        </div>
        <div className="flex items-center lg:order-1">
          <div>
            <SectionIntro eyebrow="Our founder" title={<>Leadership rooted<br />in <em>dignity.</em></>} />
            <blockquote className="mt-9 border-l-2 border-earth-gold pl-7 font-serif text-2xl leading-9 text-deep-forest">“Transformation lasts when women have the tools, trust and opportunity to lead it.”</blockquote>
            <p className="mt-8 text-lg leading-8 text-charcoal/65">Namusoke Fatina founded Makindye Women Traders with a conviction that clean communities, dignified livelihoods and women’s leadership are inseparable.</p>
            <p className="mt-5 leading-7 text-charcoal/60">Her approach places practical responsibility at the centre: caring for nature, strengthening women’s economic agency and passing a culture of stewardship to future generations.</p>
            <div className="mt-9 border-t border-charcoal/15 pt-6">
              <strong className="block text-deep-forest">Namusoke Fatina</strong>
              <span className="text-sm text-charcoal/55">Founder & Chief Executive Officer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function News() {
  const [article, setArticle] = useState<(typeof news)[number] | null>(null)
  return (
    <section id="news" className="bg-deep-forest py-24 text-white lg:py-36">
      <div className="site-shell">
        <SectionIntro eyebrow="Stories & ideas" title={<>From the work.<br /><em>For the future.</em></>} light />
        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          {news.map((item) => (
            <article className="news-card group" key={item.title}>
              <div className="overflow-hidden"><img src={item.image} alt="" /></div>
              <div className="mt-6 flex gap-3 text-[11px] font-semibold uppercase tracking-[.16em] text-earth-gold"><span>{item.category}</span><span>·</span><time>{item.date}</time></div>
              <h3 className="mt-4 font-serif text-3xl leading-9">{item.title}</h3>
              <button onClick={() => setArticle(item)} className="text-link mt-7 text-white">Read more <Arrow /></button>
            </article>
          ))}
        </div>
        <p className="mt-12 text-xs uppercase tracking-widest text-white/35">Prototype editorial content and imagery for demonstration</p>
      </div>
      {article && (
        <div className="article-modal" role="dialog" aria-modal="true" aria-label={article.title}>
          <button onClick={() => setArticle(null)} className="lightbox-close text-deep-forest">Close ×</button>
          <img src={article.image} alt="" />
          <div className="p-7 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-widest text-botanical">{article.category} · {article.date}</p>
            <h3 className="mt-4 font-serif text-4xl leading-tight text-deep-forest">{article.title}</h3>
            <p className="mt-6 leading-8 text-charcoal/65">{article.excerpt}</p>
            <p className="mt-4 text-sm italic text-charcoal/45">Prototype preview — full article content will be managed by the organisation.</p>
          </div>
        </div>
      )}
    </section>
  )
}

function Collaborators() {
  return (
    <section className="bg-ivory py-20">
      <div className="site-shell">
        <p className="text-center text-xs font-bold uppercase tracking-[.2em] text-charcoal/45">Growing through collaboration</p>
        <div className="mt-10 grid border-y border-charcoal/15 sm:grid-cols-2">
          <div className="collaborator"><span className="font-serif text-3xl text-deep-forest">Kaazi</span><span>Tree Grow Project</span></div>
          <div className="collaborator sm:border-l"><span className="font-serif text-3xl text-deep-forest">Sanctuary</span><span>Church Gulu</span></div>
        </div>
        <p className="mt-4 text-center text-[11px] text-charcoal/40">Approved names shown; official partner logos can be added when supplied.</p>
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSent(true)
  }
  return (
    <section id="contact" className="bg-botanical text-white">
      <div className="site-shell grid gap-16 py-24 lg:grid-cols-[.9fr_1.1fr] lg:gap-28 lg:py-32">
        <div>
          <p className="eyebrow"><span />Work with us</p>
          <h2 className="display mt-7">A greener future begins with what we do <em>together.</em></h2>
          <p className="mt-7 max-w-lg text-lg leading-8 text-white/70">Whether you bring expertise, funding, markets or your time, your partnership can help women build cleaner communities and stronger livelihoods.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a className="button button-gold" href="mailto:mwomentraders@gmail.com">Partner with us <Arrow /></a>
            <a className="button button-outline" href="https://wa.me/256752621075" target="_blank" rel="noreferrer">Support our work <Arrow /></a>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          {sent ? (
            <div className="flex min-h-[380px] flex-col justify-center">
              <p className="text-xs font-bold uppercase tracking-widest text-earth-gold">Message prepared</p>
              <h3 className="mt-4 font-serif text-4xl">Thank you for reaching out.</h3>
              <p className="mt-5 leading-7 text-white/70">This prototype does not send data. On the production site, this form will securely deliver your enquiry to the organisation.</p>
              <button type="button" className="text-link mt-8 self-start text-white" onClick={() => setSent(false)}>Send another message <Arrow /></button>
            </div>
          ) : (
            <>
              <div className="grid gap-7 sm:grid-cols-2">
                <label>Full name<input required name="name" placeholder="Your name" /></label>
                <label>Email address<input required type="email" name="email" placeholder="you@organisation.org" /></label>
              </div>
              <label>I’m interested in<select name="interest" defaultValue=""><option value="" disabled>Select an option</option><option>Funding partnership</option><option>Technical partnership</option><option>Volunteering</option><option>Media enquiry</option><option>Other</option></select></label>
              <label>Tell us a little more<textarea required name="message" rows={4} placeholder="How would you like to work together?" /></label>
              <button className="button button-gold mt-3" type="submit">Send enquiry <Arrow /></button>
              <p className="text-xs leading-5 text-white/45">Prototype form — no personal data is transmitted or stored.</p>
            </>
          )}
        </form>
      </div>
    </section>
  )
}

function Footer({ onDashboard }: { onDashboard: () => void }) {
  return (
    <footer className="bg-charcoal text-white">
      <div className="site-shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_.7fr_.8fr]">
        <div><LeafMark light /><p className="mt-7 max-w-sm leading-7 text-white/55">Empowering women to lead a cleaner, greener and waste-free Kampala.</p><p className="mt-7 text-xs uppercase tracking-widest text-white/35">Registered Community Based Organisation · KCCA</p></div>
        <div><p className="footer-title">Explore</p><div className="footer-links"><a href="#about">About us</a><a href="#work">Our work</a><a href="#impact">Impact</a><a href="#gallery">Gallery</a><a href="#news">News</a></div></div>
        <div><p className="footer-title">Contact</p><div className="footer-links"><a href="mailto:mwomentraders@gmail.com">mwomentraders@gmail.com</a><a href="https://wa.me/256752621075" target="_blank" rel="noreferrer">WhatsApp +256 752 621 075</a><span>Makindye, Kampala, Uganda</span></div></div>
      </div>
      <div className="site-shell flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/35 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} Makindye Women Traders. All rights reserved.</p><div className="flex gap-6"><a href="#privacy">Privacy policy</a><button onClick={onDashboard}>Staff portal</button></div></div>
    </footer>
  )
}

function Dashboard({ onExit }: { onExit: () => void }) {
  const [loggedIn, setLoggedIn] = useState(false)
  if (!loggedIn) return (
    <main className="dashboard-login">
      <button onClick={onExit} className="absolute left-6 top-6 flex items-center gap-2 text-sm text-deep-forest"><Arrow direction="left" /> Return to website</button>
      <div className="w-full max-w-md">
        <LeafMark />
        <p className="mt-14 text-xs font-bold uppercase tracking-[.18em] text-botanical">Staff portal prototype</p>
        <h1 className="mt-4 font-serif text-5xl leading-tight text-deep-forest">Welcome back.</h1>
        <p className="mt-4 leading-7 text-charcoal/55">Manage stories, gallery albums and the organisation’s public content.</p>
        <form className="mt-10 space-y-6" onSubmit={(e) => { e.preventDefault(); setLoggedIn(true) }}>
          <label className="dashboard-field">Email address<input required type="email" defaultValue="founder@makindyewomentraders.org" /></label>
          <label className="dashboard-field">Password<input required type="password" defaultValue="prototype" /></label>
          <div className="flex items-center justify-between text-sm"><label className="flex items-center gap-2"><input type="checkbox" /> Keep me signed in</label><a href="#reset" className="text-botanical">Forgot password?</a></div>
          <button className="button button-dark w-full justify-center">Sign in securely <Arrow /></button>
        </form>
        <p className="mt-6 text-xs leading-5 text-charcoal/45">Concept only. Production access will use secure authentication and role-based permissions.</p>
      </div>
    </main>
  )
  return (
    <main className="dashboard">
      <aside>
        <LeafMark light />
        <nav>
          {['Overview', 'News & Stories', 'Gallery Albums', 'Media Library', 'Drafts', 'Team & Roles'].map((x, i) => <button className={i === 0 ? 'active' : ''} key={x}>{x}<span>›</span></button>)}
        </nav>
        <button onClick={onExit} className="mt-auto text-left text-sm text-white/55">← View public website</button>
      </aside>
      <section className="dashboard-main">
        <header><div><p className="text-xs font-bold uppercase tracking-widest text-botanical">Organisation workspace</p><h1>Good morning, Fatina.</h1></div><div className="avatar">NF</div></header>
        <div className="dashboard-banner"><div><p>Complete your organisation profile</p><span>Add approved photography and verify your reported impact figures before publishing.</span></div><button>Review details</button></div>
        <div className="dashboard-stats">
          {[['12', 'Published stories'], ['5', 'Gallery albums'], ['3', 'Items in draft'], ['4', 'Team members']].map(([v, l]) => <div key={l}><strong>{v}</strong><span>{l}</span></div>)}
        </div>
        <div className="dashboard-grid">
          <div className="dashboard-panel">
            <div className="panel-head"><h2>Recent content</h2><button>View all</button></div>
            {news.map((item, i) => <div className="content-row" key={item.title}><img src={item.image} alt="" /><div><strong>{item.title}</strong><span>{i === 2 ? 'Draft · Editor review' : `Published · ${item.date}`}</span></div><button>•••</button></div>)}
          </div>
          <div className="dashboard-panel quick-actions">
            <div className="panel-head"><h2>Quick actions</h2></div>
            <button><span>＋</span><div><strong>Create a story</strong><small>Write, save draft or publish</small></div></button>
            <button><span>□</span><div><strong>Upload photographs</strong><small>Add to the media library</small></div></button>
            <button><span>↗</span><div><strong>Create an album</strong><small>Curate field photography</small></div></button>
            <div className="roles"><p>Access roles</p><span>Administrator · Founder</span><span>Editor · Secretary</span><span>Contributor · Selected members</span></div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function App() {
  const [dashboard, setDashboard] = useState(window.location.hash === '#staff')
  const openDashboard = () => { setDashboard(true); window.scrollTo(0, 0) }
  const exitDashboard = () => { setDashboard(false); window.location.hash = 'home' }
  if (dashboard) return <Dashboard onExit={exitDashboard} />
  return (
    <>
      <Header /><main><Hero /><About /><Flagship /><Programmes /><Impact /><Gallery /><Founder /><News /><Collaborators /><Contact /></main><Footer onDashboard={openDashboard} />
    </>
  )
}
