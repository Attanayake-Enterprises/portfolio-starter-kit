import Image from 'next/image'
import Link from 'next/link'
import { GalleryGrid } from 'app/components/gallery-grid'
import { company } from 'app/data/company'

const coreParts = ['Mixing arms & mixing blades', 'Bottom plates & wear plates', 'Concrete mixer spare parts', 'Crusher spare & wear parts']

export default function Page() {
  return (
    <div className="space-y-4 sm:space-y-5 lg:space-y-6">
      <section className="section-card overflow-hidden p-0">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-6 sm:p-10 lg:p-14">
            <p className="eyebrow">Kelaniya, Sri Lanka · Industrial specialists</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.055em] text-black sm:text-6xl lg:text-7xl">Parts that keep <span className="text-neutral-600">plants moving.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-neutral-700 sm:text-lg">{company.name} manufactures durable spare and wear parts for batching, asphalt and crusher plants across Sri Lanka—then backs them with practical repairs and installation support.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link href="/plant-spare-parts" className="button-primary">Explore plant parts <span>↗</span></Link><Link href="/custom-fabrication" className="button-secondary">Custom fabrication</Link></div>
          </div>
          <div className="relative min-h-[300px] border-t border-black/15 lg:border-t-0 lg:border-l"><Image src="/images/ae-20.jpeg" alt="Concrete batching plant mixer fitted with wear parts" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" /><div className="absolute inset-x-0 bottom-0 bg-black px-5 py-4 text-xs uppercase tracking-[0.18em] text-white sm:px-6">Built for the hardest working areas</div></div>
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-2 md:gap-5">
        <Link href="/plant-spare-parts" className="business-card business-card--dark group"><p className="eyebrow text-white/80">Primary business</p><h2>Plant spare parts <span>↗</span></h2><p>Batching plant, asphalt plant and crusher spare parts—manufactured for Sri Lankan operations that cannot afford downtime.</p><ul>{coreParts.map((part) => <li key={part}>{part}</li>)}</ul></Link>
        <Link href="/custom-fabrication" className="business-card group"><p className="eyebrow">A separate capability</p><h2>Custom fabrication <span>↗</span></h2><p>Purpose-built metal products, industrial structures and cast iron components made to your drawing, sample or site requirement.</p><ul><li>Custom metal products</li><li>Cast iron fabrication</li><li>Large-machine wear parts</li><li>Structures, repairs & installation</li></ul></Link>
      </section>
      <section className="section-card"><div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16"><div><p className="eyebrow">What we are known for</p><h2 className="mt-3 text-3xl font-semibold uppercase tracking-[-0.04em] text-black sm:text-4xl">The wear parts behind better output.</h2></div><div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">{company.capabilities.slice(0, 8).map((item, index) => <div key={item} className="border-t border-black/15 pt-3"><span className="text-xs font-medium tabular-nums text-neutral-600">0{index + 1}</span><p className="mt-2 text-sm font-medium leading-6 text-black">{item}</p></div>)}</div></div></section>
      <section className="section-card"><div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">From the workshop</p><h2 className="mt-2 text-2xl font-semibold uppercase tracking-[-0.04em] text-black sm:text-3xl">Made for the real world</h2></div><Link href="/gallery" className="text-sm font-medium uppercase tracking-[0.14em] text-black underline decoration-black/30 underline-offset-4 hover:decoration-black">View all work</Link></div><GalleryGrid category="mixer-parts" limit={3} columns={3} /></section>
      <section className="section-card section-card--dark" id="contact"><div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><p className="eyebrow text-white/80">Let’s make the right part</p><h2 className="mt-3 max-w-2xl text-3xl font-semibold uppercase tracking-[-0.04em] sm:text-4xl">Need a plant part, repair or custom build?</h2><p className="mt-4 max-w-xl leading-7 text-white/85">Send a drawing, dimensions or a worn sample. We’ll discuss the right material, fabrication approach and next step.</p></div><div className="text-sm md:text-right"><a className="block text-xl font-medium text-white hover:text-white/80" href={`tel:${company.contact.proprietorPhone.replace(/\s/g, '')}`}>{company.contact.proprietorPhone}</a><a className="mt-2 block text-white/85 hover:text-white" href={`mailto:${company.contact.email}`}>{company.contact.email}</a><p className="mt-4 text-white/80">{company.contact.factory.address}</p></div></div></section>
    </div>
  )
}
