import { company } from 'app/data/company'

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-black/15 pt-6 sm:mt-10">
      <ul className="flex flex-col gap-2 text-sm text-black sm:flex-row sm:flex-wrap sm:gap-4">
        <li>
          <a className="flex items-center gap-2 hover:text-neutral-600" href={`tel:${company.contact.proprietorPhone.replace(/\s/g, '')}`}>
            <ArrowIcon />
            <span>{company.contact.proprietorPhone}</span>
          </a>
        </li>
        <li>
          <a className="flex items-center gap-2 hover:text-neutral-600" href={`mailto:${company.contact.email}`}>
            <ArrowIcon />
            <span>email us</span>
          </a>
        </li>
        <li>
          <a className="flex items-center gap-2 hover:text-neutral-600" href="/gallery">
            <ArrowIcon />
            <span>gallery</span>
          </a>
        </li>
      </ul>
      <p className="mt-6 text-sm text-neutral-600">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </p>
    </footer>
  )
}
