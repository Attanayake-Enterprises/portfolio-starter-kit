import Image from 'next/image'
import Link from 'next/link'
import { GalleryGrid } from 'app/components/gallery-grid'
import { company, featuredGallerySlugs, galleryCategories } from 'app/data/company'

export default function Page() {
  return (
    <div className="space-y-16">
      <section>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 tracking-wide uppercase mb-2">
          {company.tagline}
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tighter title">
          {company.name}
        </h1>
        <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed">
          {company.description}
        </p>
      </section>

      <section>
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
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

      <section>
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">About Us</h2>
        <div className="space-y-4 text-neutral-800 dark:text-neutral-200">
          {company.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-xl font-semibold tracking-tighter">What We Do</h2>
        <div className="space-y-6">
          {company.services.map((service) => (
            <div key={service.title}>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">
                {service.title}
              </h3>
              <p className="mt-1 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">Capabilities</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-neutral-700 dark:text-neutral-300">
          {company.capabilities.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-neutral-400 mt-0.5">—</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-xl font-semibold tracking-tighter">Our Work</h2>
          <Link
            href="/gallery"
            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700"
          >
            View gallery
          </Link>
        </div>
        <div className="space-y-10">
          {featuredGallerySlugs.map((slug) => (
            <div key={slug}>
              <h3 className="mb-1 font-medium tracking-tight">
                {galleryCategories[slug].title}
              </h3>
              <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
                {galleryCategories[slug].description}
              </p>
              <GalleryGrid category={slug} limit={2} />
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter">Contact Us</h2>
        <p className="mb-6 text-neutral-600 dark:text-neutral-400 text-sm">
          {company.proprietor} (Proprietor) — reach out for quotes, custom
          fabrication, or spare parts enquiries.
        </p>
        <dl className="space-y-6 text-sm">
          <div>
            <dt className="text-neutral-500 mb-1">Proprietor</dt>
            <dd className="text-neutral-900 dark:text-neutral-100">
              {company.proprietor}
            </dd>
            <dd className="mt-1">
              <a
                href={`tel:${company.contact.proprietorPhone.replace(/\s/g, '')}`}
                className="hover:underline underline-offset-4"
              >
                {company.contact.proprietorPhone}
              </a>
            </dd>
          </div>

          <div>
            <dt className="text-neutral-500 mb-1">Email</dt>
            <dd>
              <a
                href={`mailto:${company.contact.email}`}
                className="hover:underline underline-offset-4"
              >
                {company.contact.email}
              </a>
            </dd>
          </div>

          <div>
            <dt className="text-neutral-500 mb-1">{company.contact.office.label}</dt>
            <dd className="text-neutral-900 dark:text-neutral-100">
              {company.contact.office.address}
            </dd>
            <dd className="mt-1 space-y-1">
              {company.contact.office.phones.map((phone) => (
                <div key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="hover:underline underline-offset-4"
                  >
                    {phone}
                  </a>
                </div>
              ))}
            </dd>
          </div>

          <div>
            <dt className="text-neutral-500 mb-1">{company.contact.factory.label}</dt>
            <dd className="text-neutral-900 dark:text-neutral-100">
              {company.contact.factory.address}
            </dd>
            <dd className="mt-1 space-y-1">
              {company.contact.factory.phones.map((phone) => (
                <div key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="hover:underline underline-offset-4"
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
