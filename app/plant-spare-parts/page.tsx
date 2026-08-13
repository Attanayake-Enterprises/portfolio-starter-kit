import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { GalleryGrid } from 'app/components/gallery-grid'

export const metadata: Metadata = {
  title: 'Batching, Asphalt & Crusher Plant Spare Parts Sri Lanka',
  description: 'Batching plant spare parts, asphalt plant spare parts, crusher wear parts, concrete mixer parts, mixing arms, bottom plates and gearbox repairs in Sri Lanka.',
  alternates: { canonical: '/plant-spare-parts' },
}

const specialties = [
  ['01', 'Batching & concrete mixer parts', 'Mixing arms, mixing blades, scraper blades, bottom plates, wall plates and replacement wear components for concrete mixers.'],
  ['02', 'Asphalt plant parts', 'Wear parts and fabricated spares designed for the high-abrasion, high-temperature demands of asphalt production.'],
  ['03', 'Crusher parts', 'Crusher spare parts and wear parts for aggregate and quarry machinery, manufactured to suit working conditions.'],
  ['04', 'Gearbox repairs', 'Batching plant gearbox repairs, overhauls and precision-machined drive components to return equipment to service.'],
]

export default function PlantSparePartsPage() {
  return <div className="space-y-4 sm:space-y-5 lg:space-y-6">
    <section className="section-card overflow-hidden p-0"><div className="grid lg:grid-cols-[1fr_0.9fr]"><div className="p-6 sm:p-10 lg:p-14"><p className="eyebrow">Plant parts · Sri Lanka</p><h1 className="mt-5 text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.055em] sm:text-6xl">Batching, asphalt &amp; crusher plant spare parts.</h1><p className="mt-6 max-w-2xl text-base leading-7 text-neutral-700 sm:text-lg">The core of our business is manufacturing the parts that wear hardest in batching plants, asphalt plants, concrete mixers and crushers. We build for fit, function and the demands of day-to-day production.</p><Link href="/#contact" className="button-primary mt-8">Request a quote <span>↗</span></Link></div><div className="relative min-h-[280px] border-t border-black/15 lg:border-t-0 lg:border-l"><Image src="/images/ae-17.jpeg" alt="Mixing arms and blades inside a concrete batching plant mixer" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" /></div></div></section>
    <section className="section-card"><div className="grid gap-7 md:grid-cols-2">{specialties.map(([number, title, text]) => <div key={number} className="border-t border-black/15 pt-4"><p className="text-xs text-neutral-600">{number}</p><h2 className="mt-3 text-xl font-semibold uppercase tracking-[-0.03em]">{title}</h2><p className="mt-3 text-sm leading-6 text-neutral-600">{text}</p></div>)}</div></section>
    <section className="section-card"><p className="eyebrow">Selected plant components</p><h2 className="mt-2 mb-7 text-3xl font-semibold uppercase tracking-[-0.04em]">Built to take the wear</h2><GalleryGrid category="mixer-parts" limit={3} columns={3} /></section>
    <section className="section-card border-black bg-neutral-100"><h2 className="text-2xl font-semibold uppercase tracking-[-0.04em]">Send us a sample or specification.</h2><p className="mt-3 max-w-2xl leading-7 text-neutral-700">For batching plant spare parts in Sri Lanka, an existing component, measurements or photos can help us match the right part. Need something beyond plant equipment? <Link href="/custom-fabrication" className="font-medium underline underline-offset-4">See our custom fabrication capability.</Link></p></section>
  </div>
}
