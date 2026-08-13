import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { GalleryGrid } from 'app/components/gallery-grid'

export const metadata: Metadata = {
  title: 'Custom Metal & Cast Iron Fabrication Sri Lanka',
  description: 'Custom metal fabrication, cast iron components, industrial structures and wear-part manufacturing for mixing plants and large mixing machines in Sri Lanka.',
  alternates: { canonical: '/custom-fabrication' },
}

export default function CustomFabricationPage() {
  return <div className="space-y-4 sm:space-y-5 lg:space-y-6">
    <section className="section-card overflow-hidden p-0"><div className="grid lg:grid-cols-[0.9fr_1fr]"><div className="relative min-h-[280px] border-b border-black/15 lg:order-2 lg:border-b-0 lg:border-l"><Image src="/images/ae-14.jpeg" alt="Custom fabricated industrial metal liner assembly" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" /></div><div className="p-6 sm:p-10 lg:order-1 lg:p-14"><p className="eyebrow">Custom fabrication · Sri Lanka</p><h1 className="mt-5 text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.055em] sm:text-6xl">Fabrication made around your operation.</h1><p className="mt-6 max-w-xl text-base leading-7 text-neutral-700 sm:text-lg">Beyond plant spare parts, our workshop creates custom metal products, industrial structures and cast iron components for requirements that do not come off the shelf.</p><Link href="/#contact" className="button-primary mt-8">Discuss your project <span>↗</span></Link></div></div></section>
    <section className="section-card"><div className="grid gap-7 md:grid-cols-3"><div><p className="eyebrow">01</p><h2 className="mt-3 text-xl font-semibold uppercase tracking-[-0.03em]">Custom metal work</h2><p className="mt-3 text-sm leading-6 text-neutral-600">Made-to-requirement finished metal products, replacement components and workshop fabrication.</p></div><div><p className="eyebrow">02</p><h2 className="mt-3 text-xl font-semibold uppercase tracking-[-0.03em]">Wearable parts</h2><p className="mt-3 text-sm leading-6 text-neutral-600">Wear-part manufacturing for mixing plants and large mixing machines where durability is central to the brief.</p></div><div><p className="eyebrow">03</p><h2 className="mt-3 text-xl font-semibold uppercase tracking-[-0.03em]">Structures &amp; cast parts</h2><p className="mt-3 text-sm leading-6 text-neutral-600">Industrial metal structures, silos, cast iron fabrication and practical installation support.</p></div></div></section>
    <section className="section-card"><p className="eyebrow">Custom work in progress</p><h2 className="mt-2 mb-7 text-3xl font-semibold uppercase tracking-[-0.04em]">From a brief to a durable part</h2><GalleryGrid category="fabrication" columns={3} /></section>
    <section className="section-card section-card--dark"><h2 className="text-2xl font-semibold uppercase tracking-[-0.04em]">Bring us the challenge.</h2><p className="mt-3 max-w-2xl leading-7 text-white/85">Whether you have a drawing, dimensions, a sample or only a site problem to solve, we can discuss a fabrication route that suits the job.</p><Link href="/#contact" className="button-inverse mt-7">Contact the workshop <span>↗</span></Link></section>
  </div>
}
