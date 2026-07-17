import Image from 'next/image'
import Link from 'next/link'
import { GalleryGrid } from 'app/components/gallery-grid'
import { company, featuredGallerySlugs, galleryCategories } from 'app/data/company'

export default function Page() {
  return (
    <div className="space-y-4 sm:space-y-5">
      <section className="section-card">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-600">
              {company.tagline}
            </p>
            <h1 className="mb-4 text-3xl font-semibold uppercase tracking-[0.02em] text-black sm:text-4xl">
              {company.name}
            </h1>
            <p className="max-w-xl text-base leading-7 text-neutral-700">
              {company.description}
            </p>
          </div>

          <div className="border border-black/10 bg-neutral-100 p-4 sm:min-w-[260px]">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center border border-black/10 bg-white p-2">
                <Image src="/logo.svg" alt="Attanayake Enterprises logo" width={28} height={28} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black">
                  Precision metal fabrication
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                  parts • repairs • custom builds
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-card section-card--tight">
        <div className="relative aspect-[16/9] overflow-hidden border border-black/10 bg-neutral-100">
          <Image
            src="/images/ae-20.jpeg"
            alt="Twin-shaft mixer interior showcasing Attanayake Enterprises plant wear parts"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>
      </section>

      <section className="section-card">
        <h2 className="mb-4 text-xl font-semibold uppercase tracking-[0.16em] text-black">
          About Us
        </h2>
        <div className="space-y-4 text-neutral-700">
          {company.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section-card">
        <h2 className="mb-5 text-xl font-semibold uppercase tracking-[0.16em] text-black">
          What We Do
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {company.services.map((service) => (
            <div key={service.title} className="border border-black/10 bg-neutral-50 p-4">
              <h3 className="font-medium uppercase tracking-[0.14em] text-black">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card">
        <h2 className="mb-5 text-xl font-semibold uppercase tracking-[0.16em] text-black">
          Capabilities
        </h2>
        <ul className="grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-neutral-700 sm:grid-cols-2">
          {company.capabilities.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-0.5 text-black">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-card">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
          <h2 className="text-xl font-semibold uppercase tracking-[0.16em] text-black">
            Our Work
          </h2>
          <Link href="/gallery" className="text-sm uppercase tracking-[0.18em] text-black hover:text-neutral-600">
            View gallery
          </Link>
        </div>
        <div className="space-y-8">
          {featuredGallerySlugs.map((slug) => (
            <div key={slug}>
              <h3 className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-black">
                {galleryCategories[slug].title}
              </h3>
              <p className="mb-4 text-sm leading-6 text-neutral-600">
                {galleryCategories[slug].description}
              </p>
              <GalleryGrid category={slug} limit={2} />
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section-card">
        <h2 className="mb-4 text-xl font-semibold uppercase tracking-[0.16em] text-black">
          Contact Us
        </h2>
        <p className="mb-6 text-sm leading-6 text-neutral-600">
          {company.proprietor} (Proprietor) — reach out for quotes, custom fabrication, or spare parts enquiries.
        </p>
        <dl className="space-y-5 text-sm">
          <div>
            <dt className="mb-1 text-xs uppercase tracking-[0.24em] text-neutral-500">Proprietor</dt>
            <dd className="text-black">{company.proprietor}</dd>
            <dd className="mt-1">
              <a href={`tel:${company.contact.proprietorPhone.replace(/\s/g, '')}`} className="text-black hover:text-neutral-600">
                {company.contact.proprietorPhone}
              </a>
            </dd>
          </div>

          <div>
            <dt className="mb-1 text-xs uppercase tracking-[0.24em] text-neutral-500">Email</dt>
            <dd>
              <a href={`mailto:${company.contact.email}`} className="text-black hover:text-neutral-600">
                {company.contact.email}
              </a>
            </dd>
          </div>

          <div>
            <dt className="mb-1 text-xs uppercase tracking-[0.24em] text-neutral-500">{company.contact.office.label}</dt>
            <dd className="text-black">{company.contact.office.address}</dd>
            <dd className="mt-1 space-y-1">
              {company.contact.office.phones.map((phone) => (
                <div key={phone}>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-black hover:text-neutral-600">
                    {phone}
                  </a>
                </div>
              ))}
            </dd>
          </div>

          <div>
            <dt className="mb-1 text-xs uppercase tracking-[0.24em] text-neutral-500">{company.contact.factory.label}</dt>
            <dd className="text-black">{company.contact.factory.address}</dd>
            <dd className="mt-1 space-y-1">
              {company.contact.factory.phones.map((phone) => (
                <div key={phone}>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-black hover:text-neutral-600">
                    {phone}
                  </a>
                </div>
              ))}
            </dd>
          </div>
        </dl>
      </section>
    </div>
  )
}
