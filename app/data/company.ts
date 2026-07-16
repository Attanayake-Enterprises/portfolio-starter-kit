export const company = {
  name: 'Attanayake Enterprises',
  shortName: 'AE',
  proprietor: 'A.S. Attanayake',
  tagline: 'Finished Metal Products for Machinery',
  description:
    'We are pioneers in producing finished metal products for machinery. Our work has been notable in the construction industry as we have been the leading supplier of spare and wear parts for batching plants, asphalt plants, and crushers in top companies in Sri Lanka.',
  about: [
    'We are pioneers in producing finished metal products for machinery. Our work has been notable in the construction industry as we have been the leading supplier of spare and wear parts for batching plants, asphalt plants, and crushers in top companies in Sri Lanka.',
    'We provide finished metal products to fit your requirement regardless of the industry. Furthermore, we provide installation and maintenance for our products.',
  ],
  services: [
    {
      title: 'Custom Metal Products',
      description:
        'Manufacture custom-made, finished metal products to fit your requirement — regardless of industry.',
    },
    {
      title: 'Mixer & Plant Wear Parts',
      description:
        'Manufacture mixing arms, mixing tips, scraper blades, wall plates, and other wear parts for batching and asphalt plants.',
    },
    {
      title: 'Assembly, Installation & Repair',
      description:
        'Providing assembling, installing, and repairing services for industrial machinery and components.',
    },
    {
      title: 'Metal Structures',
      description:
        'Constructing metal structures including silos and other industrial steel fabrications.',
    },
    {
      title: 'Industrial Machinery',
      description:
        'Designing and manufacturing industrial machinery tailored to your operational needs.',
    },
    {
      title: 'Gearbox Repairs',
      description:
        'Complete gearbox repair and overhaul services for heavy-duty industrial and plant equipment.',
    },
    {
      title: 'Plant & Crusher Spare Parts',
      description:
        'Manufacturing spare parts for batching plants, asphalt plants, crushers, and many other types of machinery.',
    },
  ],
  capabilities: [
    'Custom-made finished metal products',
    'Mixing arms, tips, scraper blades & wall plates',
    'Batching plant spare & wear parts',
    'Asphalt plant spare & wear parts',
    'Crusher spare & wear parts',
    'Gearbox repairs & overhaul',
    'Metal structure construction (silos)',
    'Assembly, installation & maintenance',
  ],
  contact: {
    email: 'attanayakeas@gmail.com',
    proprietorPhone: '+94 77 731 3179',
    office: {
      label: 'Office',
      address: 'No. 78/A/1, St. Jude Ln, Dalugama, Kelaniya',
      phones: ['+94 777 313 179', '+94 11 291 5647'],
    },
    factory: {
      label: 'Factory',
      address: 'No. 156/A, Wewalduwa Rd., Dalugama, Kelaniya',
      phones: ['+94 11 293 1623'],
    },
  },
}

export type GalleryCategory =
  | 'mixer-parts'
  | 'crusher-parts'
  | 'fabrication'
  | 'gearbox-repair'
  | 'conveyor'
  | 'wear-plates'

export type GalleryItem = {
  src: string
  alt: string
  category: GalleryCategory
  caption?: string
}

export const galleryCategories: Record<
  GalleryCategory,
  { title: string; description: string }
> = {
  'mixer-parts': {
    title: 'Batching & Asphalt Plant Parts',
    description:
      'Mixing arms, mixing tips, scraper blades, wall plates, and wear parts for batching and asphalt plants.',
  },
  'crusher-parts': {
    title: 'Crusher Wear Parts',
    description:
      'Concaves, mantles, and crushing chamber components for crusher machinery.',
  },
  fabrication: {
    title: 'Custom Fabrication & Structures',
    description:
      'Custom-made metal products, segmented liner assemblies, and industrial steel structures.',
  },
  'gearbox-repair': {
    title: 'Gearbox Repairs',
    description:
      'Gearbox overhauls, differential rebuilds, and precision-machined drive components.',
  },
  conveyor: {
    title: 'Conveyor Components',
    description:
      'Heavy-duty rollers and mounting hardware for material-handling systems.',
  },
  'wear-plates': {
    title: 'Wear Plates & Liners',
    description:
      'Wall plates, liner segments, wedge plates, and abrasion-resistant wear components.',
  },
}

export const galleryItems: GalleryItem[] = [
  {
    src: '/images/ae-20.jpeg',
    alt: 'Twin-shaft mixer interior with mixing paddles and wall plates',
    category: 'mixer-parts',
    caption: 'Batching plant mixer assembly',
  },
  {
    src: '/images/ae-17.jpeg',
    alt: 'Vertical view of twin-shaft mixer paddles and scraper arms',
    category: 'mixer-parts',
    caption: 'Mixing arms and scraper blades',
  },
  {
    src: '/images/ae-19.jpeg',
    alt: 'Close-up of mixer paddles with torque-marked bolts',
    category: 'mixer-parts',
    caption: 'Precision-assembled mixing mechanism',
  },
  {
    src: '/images/ae-18.jpeg',
    alt: 'Mixing paddle and wall plate detail inside plant mixer',
    category: 'mixer-parts',
  },
  {
    src: '/images/ae-16.jpeg',
    alt: 'Horizontal shaft mixer interior with bolted wall plates',
    category: 'mixer-parts',
  },
  {
    src: '/images/ae-07.jpeg',
    alt: 'Complete set of batching plant spare parts laid out for assembly',
    category: 'mixer-parts',
    caption: 'Full plant spare parts kit',
  },
  {
    src: '/images/ae-10.jpeg',
    alt: 'Large crusher concave wear part labeled CONCAVE PCZS',
    category: 'crusher-parts',
    caption: 'Crusher concave (PCZS)',
  },
  {
    src: '/images/ae-14.jpeg',
    alt: 'Custom-fabricated figure-eight steel liner assembly with bolts',
    category: 'fabrication',
    caption: 'Custom segmented liner assembly',
  },
  {
    src: '/images/ae-08.jpeg',
    alt: 'Segmented figure-eight liner plates with assembly markings',
    category: 'fabrication',
    caption: 'Segmented liner plate set',
  },
  {
    src: '/images/ae-06.jpeg',
    alt: 'Disassembled gearbox with ring gear, differential, and planetary components',
    category: 'gearbox-repair',
    caption: 'Gearbox differential overhaul',
  },
  {
    src: '/images/ae-04.jpeg',
    alt: 'Planetary gear hub being serviced with grease and tools',
    category: 'gearbox-repair',
  },
  {
    src: '/images/ae-15.jpeg',
    alt: 'Machined steel shaft with mounting flange and keyway',
    category: 'gearbox-repair',
    caption: 'Precision-machined drive shaft',
  },
  {
    src: '/images/ae-02.jpeg',
    alt: 'Heavy-duty red-painted conveyor roller',
    category: 'conveyor',
    caption: 'Industrial conveyor roller',
  },
  {
    src: '/images/ae-05.jpeg',
    alt: 'Stacks of red-painted wear plates and wedge-shaped liner segments',
    category: 'wear-plates',
    caption: 'Wall plates and wedge liner stock',
  },
  {
    src: '/images/ae-11.jpeg',
    alt: 'Assorted wear plates in grey and red primer finish',
    category: 'wear-plates',
  },
  {
    src: '/images/ae-13.jpeg',
    alt: 'Curved wear liner plate with protective primer coating',
    category: 'wear-plates',
  },
  {
    src: '/images/ae-12.jpeg',
    alt: 'Industrial mounting blocks with oblong bolt slots',
    category: 'wear-plates',
  },
  {
    src: '/images/ae-01.jpeg',
    alt: 'Set of cast metal industrial components in red primer',
    category: 'fabrication',
  },
  {
    src: '/images/ae-09.jpeg',
    alt: 'Cast trapezoidal industrial block component',
    category: 'fabrication',
  },
  {
    src: '/images/ae-03.jpeg',
    alt: 'Industrial spare parts laid out on workshop floor',
    category: 'wear-plates',
  },
]

export const featuredGallerySlugs: GalleryCategory[] = [
  'mixer-parts',
  'crusher-parts',
  'fabrication',
  'gearbox-repair',
]
