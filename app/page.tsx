import Image from 'next/image'
import Link from 'next/link'
import { GalleryGrid } from 'app/components/gallery-grid'
import { company, featuredGallerySlugs, galleryCategories } from 'app/data/company'

export default function Page() {
  return (
    <div className="space-y-6">
      <section className="section-card overflow-hidden">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-neutral-600 dark:border-neutral-800 dark:bg-neutral-950/70 dark:text-neutral-300">
                {company.tagline}
              </span>
              <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-indigo-700 dark:border-indigo-900/50 dark:bg-indigo-950/40 dark:text-indigo-300">
                Built for industry
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-semibold tracking-tighter text-neutral-900 dark:text-neutral-100 sm:text-4xl title">
              {company.name}
            </h1>
            <p className="max-w-xl text-base leading-7 text-neutral-700 dark:text-neutral-300">
              {company.description}
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/80 p-4 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/70">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                <Image src="/logo.svg" alt="Attanayake Enterprises logo" width={32} height={32} />
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  Precision metal fabrication
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Plant parts • crushers • custom builds
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-card">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-neutral-200/80 dark:border-neutral-800">
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
        <h2 className="mb-4 text-xl font-semibold tracking-tighter text-neutral-900 dark:text-neutral-100">
          About Us
        </h2>
        <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
          {company.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section-card">
        <h2 className="mb-6 text-xl font-semibold tracking-tighter text-neutral-900 dark:text-neutral-100">
          What We Do
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {company.services.map((service) => (
            <div key={service.title} className="rounded-2xl border border-neutral-200/80 bg-neutral-50/70 p-4 dark:border-neutral-800 dark:bg-neutral-950/50">
              <h3 className="font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
                {service.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter text-neutral-900 dark:text-neutral-100">
          Capabilities
        </h2>
        <ul className="grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-neutral-700 dark:text-neutral-300 sm:grid-cols-2">
          {company.capabilities.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-0.5 text-neutral-400">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-card">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-semibold tracking-tighter text-neutral-900 dark:text-neutral-100">
            Our Work
          </h2>
          <Link
            href="/gallery"
            className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            View gallery →
          </Link>
        </div>
        <div className="space-y-10">
          {featuredGallerySlugs.map((slug) => (
            <div key={slug}>
              <h3 className="mb-1 font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
                {galleryCategories[slug].title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {galleryCategories[slug].description}
              </p>
              <GalleryGrid category={slug} limit={2} />
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section-card">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter text-neutral-900 dark:text-neutral-100">
          Contact Us
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {company.proprietor} (Proprietor) — reach out for quotes, custom
          fabrication, or spare parts enquiries.
        </p>
        <dl className="space-y-6 text-sm">
          <div>
            <dt className="mb-1 text-neutral-500">Proprietor</dt>
            <dd className="text-neutral-900 dark:text-neutral-100">{company.proprietor}</dd>
            <dd className="mt-1">
              <a
                href={`tel:${company.contact.proprietorPhone.replace(/\s/g, '')}`}
                className="text-neutral-700 underline-offset-4 transition-colors hover:text-neutral-950 hover:underline dark:text-neutral-300 dark:hover:text-white"
              >
                {company.contact.proprietorPhone}
              </a>
            </dd>
          </div>

          <div>
            <dt className="mb-1 text-neutral-500">Email</dt>
            <dd>
              <a
                href={`mailto:${company.contact.email}`}
                className="text-neutral-700 underline-offset-4 transition-colors hover:text-neutral-950 hover:underline dark:text-neutral-300 dark:hover:text-white"
              >
                {company.contact.email}
              </a>
            </dd>
          </div>

          <div>
            <dt className="mb-1 text-neutral-500">{company.contact.office.label}</dt>
            <dd className="text-neutral-900 dark:text-neutral-100">{company.contact.office.address}</dd>
            <dd className="mt-1 space-y-1">
              {company.contact.office.phones.map((phone) => (
                <div key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="text-neutral-700 underline-offset-4 transition-colors hover:text-neutral-950 hover:underline dark:text-neutral-300 dark:hover:text-white"
                  >
                    {phone}
                  </a>
                </div>
              ))}
            </dd>
          </div>

          <div>
            <dt className="mb-1 text-neutral-500">{company.contact.factory.label}</dt>
            <dd className="text-neutral-900 dark:text-neutral-100">{company.contact.factory.address}</dd>
            <dd className="mt-1 space-y-1">
              {company.contact.factory.phones.map((phone) => (
                <div key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="text-neutral-700 underline-offset-4 transition-colors hover:text-neutral-950 hover:underline dark:text-neutral-300 dark:hover:text-white"
                  >
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
