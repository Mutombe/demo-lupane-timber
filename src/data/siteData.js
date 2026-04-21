// Lupane Timbers — indigenous Zimbabwean hardwood, Harare
// Single source of truth for all page content.

export const business = {
  name: "Lupane Timbers",
  shortName: "Lupane",
  tagline: "Indigenous Zimbabwean hardwood. Milled with our own hands.",
  established: 2011,
  city: "Harare",
  country: "Zimbabwe",
  whatsapp: "+263772410415",
  whatsappDisplay: "+263 772 410 415",
  email: "lupanesales@hotali.co.zw",
  phone: "+263 772 410 415",
  website: "www.lupanetimbers.co.zw",
  address: "25 Connaught Road, Avondale, Harare",
  addressFull: "25 Connaught Road, Avondale, Harare, Zimbabwe",
  mill: "Lupane District, Matabeleland North",
  hours: {
    weekdays: "07:30 – 17:00",
    saturday: "08:00 – 13:00",
    sunday: "Closed",
  },
  socials: {
    facebook: "https://facebook.com/lupanetimbers",
    instagram: "https://instagram.com/lupanetimbers",
  },
  delivery: "Nationwide delivery across Zimbabwe — and into the region",
  logo: "/logo.png",
};

export const waHref = (msg) =>
  `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(msg)}`;
export const mailHref = (subject, body) =>
  `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

// ---------- HERO ----------
export const hero = {
  eyebrow: "Matabeleland · Est. 2011",
  headline: "Indigenous hardwood,",
  headlineAccent: "Zimbabwean hands.",
  sub: "From a working mill in the Lupane forests to a workshop in Avondale — we cut, season and craft Zimbabwe's most characterful indigenous timbers. Mukwa. Teak. Mopane. The kinds of wood that outlive the house.",
  ctaPrimary: {
    label: "Our Timber",
    to: "/our-timber",
  },
  ctaSecondary: {
    label: "Get a Quote",
    href: waHref("Hello Lupane Timbers — I'd like a quote."),
  },
  heroImage: "https://images.unsplash.com/photo-1634672652995-ee7525bce595?auto=format&fit=crop&w=1800&q=80",
  heroAlt: "Stacks of freshly milled indigenous hardwood seasoning in the open air",
  stats: [
    { value: "13+",  label: "Years milling" },
    { value: "7",    label: "Indigenous species" },
    { value: "1000 m³", label: "Stock seasoning" },
    { value: "Zim-wide", label: "Delivery" },
  ],
};

// ---------- MARQUEE ----------
export const marquee = [
  "Mukwa · Zimbabwean Teak · Mopane · Mahogany · Pine",
  "Air-seasoned 18 months minimum — ready to mill",
  "Bespoke joinery blanks cut to your drawings",
  "Lupane forest to your site — nationwide delivery",
  "Replanting programme · every tree harvested, two returned",
];

// ---------- TIMBER SPECIES ----------
export const species = [
  {
    slug: "mukwa",
    name: "Mukwa",
    latin: "Pterocarpus angolensis",
    altNames: "Muninga · Kiaat · Bloodwood",
    tagline: "The storyteller.",
    grain: "Open, interlocked grain with a rich golden-brown heart that deepens to warm chocolate with age. Fragrant when freshly sawn.",
    properties: [
      { label: "Density", value: "620–720 kg/m³" },
      { label: "Hardness", value: "Hard, stable" },
      { label: "Workability", value: "Excellent — planes cleanly" },
      { label: "Durability", value: "Class 1 — outlasts most structures" },
    ],
    uses: "Premium doors, window frames, dining tables, joinery, veneers, sculpture.",
    why: "If Zimbabwe had a national wood, Mukwa would be it. It moves little after seasoning, polishes to a deep lacquer-glow, and the grain tells the story of the tree it came from.",
    image: "https://images.unsplash.com/photo-1736506159920-aa3701dc1ee6?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Warm golden-brown Mukwa grain — the storyteller's timber",
  },
  {
    slug: "zimbabwean-teak",
    name: "Zimbabwean Teak",
    latin: "Baikiaea plurijuga",
    altNames: "Mukusi · Rhodesian Teak",
    tagline: "The workhorse.",
    grain: "Dense, tight grain ranging from golden-yellow through deep red-brown. Oily — naturally weather-resistant.",
    properties: [
      { label: "Density", value: "900–1010 kg/m³" },
      { label: "Hardness", value: "Very hard" },
      { label: "Workability", value: "Firm — carbide tooling" },
      { label: "Durability", value: "Class 1 — railway-grade" },
    ],
    uses: "Flooring, decking, exterior doors, railway sleepers, heavy furniture.",
    why: "A Kalahari-edge species that is harder than most imported teak and weathers to a silver-grey patina outdoors. Impervious to termites and reliable in Zimbabwe's swings from dry to wet.",
    image: "https://images.unsplash.com/photo-1506968430777-bf7784a87f23?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Dense red-brown Zimbabwean teak planks — the railway-grade workhorse",
  },
  {
    slug: "mopane",
    name: "Mopane",
    latin: "Colophospermum mopane",
    altNames: "Butterfly tree · Turpentine tree",
    tagline: "The unbreakable.",
    grain: "Very dense, dark red-brown streaked with near-black. Interlocked grain — the hardest indigenous timber on record in Zimbabwe.",
    properties: [
      { label: "Density", value: "1100–1200 kg/m³" },
      { label: "Hardness", value: "Extreme" },
      { label: "Workability", value: "Slow — reward is lasting" },
      { label: "Durability", value: "Class 1 — heirloom" },
    ],
    uses: "Musical instruments, turned bowls, parquet flooring, fence posts, high-end furniture.",
    why: "Mopane grows where little else survives, and that hardship shows in the wood: extreme density, near-ebony depth, and a surface that takes a mirror polish. Reserved for pieces meant to last generations.",
    image: "https://images.unsplash.com/photo-1736506159776-22ca388780fa?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Dark chocolate-brown Mopane grain — the unbreakable indigenous hardwood",
  },
  {
    slug: "mahogany",
    name: "African Mahogany",
    latin: "Khaya anthotheca",
    altNames: "Khaya · Red mahogany",
    tagline: "The cabinetmaker's favourite.",
    grain: "Straight to wavy, with a ribbon-striped figure. Warm pinkish-red when freshly cut, mellowing to a stable mahogany-brown.",
    properties: [
      { label: "Density", value: "520–620 kg/m³" },
      { label: "Hardness", value: "Medium" },
      { label: "Workability", value: "Exceptional" },
      { label: "Durability", value: "Class 2 — interior use" },
    ],
    uses: "Cabinetmaking, staircases, panelling, veneer, boat interiors, fine furniture.",
    why: "Works like a dream under hand tools. Our mahogany is supplied kiln-dry for stable panelling and comes ribbon-matched for book-matched doors and table aprons.",
    image: "https://images.unsplash.com/photo-1736506159893-22cca29b8018?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "African mahogany with a cathedral ribbon-stripe grain figure",
  },
  {
    slug: "pine",
    name: "SA Pine (Pinus)",
    latin: "Pinus patula · P. elliottii",
    altNames: "Yellow pine · Plantation pine",
    tagline: "The honest workhorse.",
    grain: "Pale yellow-cream with a clear vertical grain and scattered knots. Lightweight, uniform.",
    properties: [
      { label: "Density", value: "450–550 kg/m³" },
      { label: "Hardness", value: "Soft" },
      { label: "Workability", value: "Easy — power or hand" },
      { label: "Durability", value: "Class 4 — treat for outdoor" },
    ],
    uses: "Roof trusses, construction framing, shuttering, utility furniture, pallets.",
    why: "Every build needs a sensible softwood. Ours is CCA-treated on request, cut to standard SANS 1783 lengths, and graded before it leaves the yard.",
    image: "https://images.unsplash.com/photo-1763392199096-6efd9d28d8cc?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Pale cream SA pine grain with a clean, uniform figure",
  },
  {
    slug: "msasa",
    name: "Msasa",
    latin: "Brachystegia spiciformis",
    altNames: "Zebrawood (local) · Highveld msasa",
    tagline: "The highveld signature.",
    grain: "A honey-to-ginger ground with wild, streaky dark figure. Unpredictable and beautiful — every board is different.",
    properties: [
      { label: "Density", value: "720–860 kg/m³" },
      { label: "Hardness", value: "Hard" },
      { label: "Workability", value: "Moderate — read the grain" },
      { label: "Durability", value: "Class 2 — interior & sheltered" },
    ],
    uses: "Feature furniture, counter tops, turned work, decorative panelling.",
    why: "The tree that turns Zimbabwe red-gold each spring. Milled as statement slabs and live-edge counters — no two pieces repeat. Limited stock, seasoned patiently.",
    image: "https://images.unsplash.com/photo-1583418007992-a8e33a92e7ad?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Msasa slab with honey ground and wild streaky dark spalting",
  },
  {
    slug: "blackwood",
    name: "African Blackwood",
    latin: "Dalbergia melanoxylon",
    altNames: "Mpingo · Zebrawood",
    tagline: "The quiet luxury.",
    grain: "Near-black heartwood with purple-brown undertones. Extremely fine, closed grain — polishes like stone.",
    properties: [
      { label: "Density", value: "1200+ kg/m³" },
      { label: "Hardness", value: "Extreme — one of the densest" },
      { label: "Workability", value: "Carbide only — rewards patience" },
      { label: "Durability", value: "Class 1 — museum grade" },
    ],
    uses: "Instrument parts, high-end turnery, inlay, knife scales, heirloom accents.",
    why: "Mpingo is the wood woodwind-makers around the world travel for. We stock a small parcel in short billets — for the piece that has to be perfect.",
    image: "https://images.unsplash.com/photo-1525947088131-b701cd0f6dc3?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Near-black African blackwood grain — the museum-grade mpingo",
  },
];

// ---------- PRODUCTS ----------
export const products = [
  {
    slug: "sawn-timber",
    name: "Sawn Timber",
    summary: "Rough-sawn and planed hardwood lumber in standard and custom dimensions.",
    specs: {
      thickness: "25 – 100 mm",
      width: "75 – 300 mm",
      length: "up to 4.8 m",
    },
    species: ["Mukwa", "Teak", "Pine", "Mahogany"],
    image: "https://images.unsplash.com/photo-1702195789139-4897ff9b0083?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Stacked rough-sawn hardwood boards with live-edge bark at a timber yard",
    lead: "48 hr to 3 weeks (species dependent)",
  },
  {
    slug: "doors-windows",
    name: "Teak Doors & Windows",
    summary: "Hand-crafted mukwa and teak doors — pivot, panel, slatted and custom carved.",
    specs: {
      thickness: "45 – 70 mm leaf",
      width: "standard or to drawing",
      length: "residential & commercial",
    },
    species: ["Mukwa", "Teak"],
    image: "https://images.unsplash.com/photo-1634822930432-0594057fdff2?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Tall slatted solid-timber pivot doors — the kind our mukwa and teak go into",
    lead: "4 – 8 weeks",
  },
  {
    slug: "flooring",
    name: "Hardwood Flooring",
    summary: "Solid tongue-and-groove strip flooring in teak and mopane. Parquet blocks also supplied.",
    specs: {
      thickness: "19 or 22 mm solid",
      width: "70 / 90 / 120 mm",
      length: "random length",
    },
    species: ["Teak", "Mopane", "Mukwa"],
    image: "https://images.unsplash.com/photo-1548268364-3acee266b695?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Warm-toned herringbone hardwood parquet flooring",
    lead: "2 – 4 weeks",
  },
  {
    slug: "decking",
    name: "Decking & Exterior",
    summary: "Teak and mukwa decking boards — smooth, grooved or reeded. Pool-surround ready.",
    specs: {
      thickness: "19 – 32 mm",
      width: "90 – 140 mm",
      length: "1.8 – 4.2 m",
    },
    species: ["Teak", "Mukwa"],
    image: "https://images.unsplash.com/photo-1574120583586-de8847ae992c?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Warm timber decking terrace wrapping a forest-edge home",
    lead: "2 – 5 weeks",
  },
  {
    slug: "roofing-timber",
    name: "Roofing Timber",
    summary: "Structural pine — trusses, purlins, battens and wall plates. Graded and treated.",
    specs: {
      thickness: "38 – 50 mm",
      width: "76 – 228 mm",
      length: "up to 6.6 m",
    },
    species: ["Pine (SANS 1783 Grade 5 & above)"],
    image: "https://images.unsplash.com/photo-1741916540147-9be1d2b20d32?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Exposed pine roof trusses on a new-build roof",
    lead: "Ex-stock",
  },
  {
    slug: "custom-milling",
    name: "Custom Milling",
    summary: "Cut to your cutting-list, drawing or sample. We mill, dimension and finish to spec.",
    specs: {
      thickness: "to drawing",
      width: "to drawing",
      length: "up to 4.8 m",
    },
    species: ["All species"],
    image: "https://images.unsplash.com/photo-1667689815944-9f72c0f59e74?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Live-edge slab stack at the mill — custom hardwood cut to drawing",
    lead: "1 – 3 weeks",
  },
  {
    slug: "joinery-blanks",
    name: "Joinery Blanks",
    summary: "Squared and kiln-dried blanks for carpenters — stile, rail, leg and turning stock.",
    specs: {
      thickness: "prepared four sides",
      width: "to order",
      length: "random length",
    },
    species: ["Mukwa", "Mahogany", "Blackwood (short billets)"],
    image: "https://images.unsplash.com/photo-1572726272916-021d1ef0bbf4?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Planed pine joinery blanks squared on four sides and ready for the workshop",
    lead: "1 – 2 weeks",
  },
  {
    slug: "pallets-packaging",
    name: "Pallets & Packaging",
    summary: "Heat-treated export-grade pallets and crating in pine. ISPM-15 compliant.",
    specs: {
      thickness: "standard pallet stock",
      width: "EUR / custom",
      length: "1.0 – 1.4 m",
    },
    species: ["Pine"],
    image: "https://images.unsplash.com/photo-1680268997856-d278566cbcf1?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Heat-treated export pine pallets stacked in a yard",
    lead: "5 – 10 days",
  },
];

// ---------- MILLING PROCESS ----------
export const process = [
  {
    step: "01",
    name: "Source",
    icon: "Tree",
    blurb: "Harvested sustainably from managed concessions in Lupane and Hwange. Every tree felled is logged — with forestry-commission paperwork.",
  },
  {
    step: "02",
    name: "Mill",
    icon: "WrenchFill",
    blurb: "Logs are slabbed on our band mill to maximise yield and preserve the cathedral grain figure. Sawn oversize to allow for drying movement.",
  },
  {
    step: "03",
    name: "Dry",
    icon: "SunHorizon",
    blurb: "Air-seasoned under cover for 12 – 24 months, then brought down to 10 – 12 % in the kiln. Stability first — there is no shortcut worth taking.",
  },
  {
    step: "04",
    name: "Grade",
    icon: "ListChecks",
    blurb: "Every board is assessed for defect, grain and colour. We grade to SANS 1783 for pine and to our own house standards for hardwoods.",
  },
  {
    step: "05",
    name: "Ship",
    icon: "Truck",
    blurb: "Dimensioned, bundled, labelled and loaded. Nationwide flatbed delivery and container packing for regional export.",
  },
];

// ---------- SUSTAINABILITY PILLARS ----------
export const sustainability = [
  {
    icon: "TreeEvergreen",
    title: "Two returned for one felled",
    body: "Our replanting obligation. For every mature tree we harvest, we return two indigenous saplings to the concession — msasa, mukwa and mopane seedlings raised at our Lupane nursery.",
  },
  {
    icon: "Certificate",
    title: "Forestry Commission approval",
    body: "Every consignment leaves with a Zimbabwean Forestry Commission transit permit. We welcome audits, site visits and chain-of-custody questions.",
  },
  {
    icon: "Leaf",
    title: "Slow seasoning, no waste",
    body: "Air-drying for up to two years means less kiln energy and better boards. Offcuts become firewood for the local community or briquettes — nothing leaves the mill as waste.",
  },
  {
    icon: "Handshake",
    title: "Community concessions",
    body: "We work with three Lupane ward-based concessions. A percentage of every cubic metre we extract funds the local school and borehole maintenance.",
  },
  {
    icon: "Recycle",
    title: "Heat-treated, not chemical",
    body: "Our pallet stock is ISPM-15 certified through heat treatment — no methyl bromide. Our decking is oil-finished, not chemically preserved.",
  },
  {
    icon: "Shield",
    title: "Legal by design",
    body: "We do not stock, mill or broker timber without clear paper. Zimbabwean hardwood is too rare and too precious to trade in grey.",
  },
];

// ---------- REVIEWS ----------
export const reviews = [
  {
    name: "Farai Chiminya",
    role: "Director · Sable Cabinets, Harare",
    initials: "FC",
    rating: 5,
    quote: "Lupane are the only yard in Harare we let quote our mukwa drawings without a second opinion. Boards arrive graded, stickered and at moisture — we go straight from truck to thicknesser.",
    project: "Kitchen carcassing · 2.4 m³ mukwa · Glen Lorne",
  },
  {
    name: "Buhle Ndlovu",
    role: "Principal Architect · Ndlovu Associates",
    initials: "BN",
    rating: 5,
    quote: "We specified Lupane teak flooring throughout a 400 m² house on Umwinsidale Road. Two years in, the floor has mellowed to exactly the patina we wanted. No cup. No gap. The real thing.",
    project: "Residential teak flooring · 420 m²",
  },
  {
    name: "Rutendo Madziva",
    role: "Founder · Madziva Joinery",
    initials: "RM",
    rating: 5,
    quote: "Our front doors for a Borrowdale estate came out of Lupane's workshop. The slatted mukwa pivots weigh 80 kg apiece and they are still perfectly level. The craftsmanship matches the timber.",
    project: "Five pivot entrance doors · mukwa",
  },
  {
    name: "Kudzai Mutasa",
    role: "QS · Mutasa Construction",
    initials: "KM",
    rating: 5,
    quote: "For structural pine, pricing is keen and grading is honest. We trust the SANS stamp because we have toured the yard. Deliveries to Ruwa and Chitungwiza arrive on the day they are promised.",
    project: "Roof trusses · 4800 m of graded pine",
  },
  {
    name: "Tendai Moyo",
    role: "Interior Designer · Moyo Studio",
    initials: "TM",
    rating: 5,
    quote: "I asked for a single 3.2 m live-edge msasa slab for a client's dining table. Lupane sent me four to choose from. Who does that in Harare? Found a forever piece.",
    project: "Live-edge msasa slab · 3.2 m dining",
  },
];

// ---------- FEATURES ----------
export const features = [
  {
    icon: "TreeEvergreen",
    title: "Indigenous specialists",
    body: "Mukwa, Zimbabwean teak, mopane, msasa — we know these timbers because we mill them ourselves.",
  },
  {
    icon: "Wrench",
    title: "Mill-to-site",
    body: "Most orders ship direct from the Lupane mill to your site or workshop — cutting costs and lead time.",
  },
  {
    icon: "CheckCircle",
    title: "Graded & seasoned",
    body: "Every hardwood board is air-seasoned 12 – 24 months then kiln-finished to 10 – 12 % moisture.",
  },
  {
    icon: "Truck",
    title: "Zim-wide delivery",
    body: "Flatbed delivery across Zimbabwe. Containerised export to the region on request.",
  },
];

// ---------- ABOUT / STORY ----------
export const story = {
  eyebrow: "The story",
  title: "From the Lupane forests to your workshop.",
  paragraphs: [
    "Lupane Timbers began in 2011 when Mthandazo Ncube — a third-generation sawyer — took over his father's one-bench mill on the edge of the Lupane forest in Matabeleland North. The first year produced 120 cubic metres. All of it was mukwa, all of it sold within a hundred kilometres.",
    "Thirteen years on, we run a modern band-mill, two kilns and a joinery workshop; but the principle has not shifted. Indigenous hardwood is a patient material. It takes eighty years to grow and two years to season. Rushing any part of that is a kind of theft — from the tree, from the client, and from the joiner who has to work it at the other end.",
    "Our yard at 25 Connaught Road in Avondale is the front door to all of that. Every board you buy there has been air-dried at the Lupane mill, graded by hand, and chosen because it earned its place. Come and touch the wood.",
  ],
  pillars: [
    { label: "Founded", value: "2011" },
    { label: "Mill location", value: "Lupane, Matabeleland N." },
    { label: "Harare yard", value: "25 Connaught Rd" },
    { label: "Team", value: "32 people" },
  ],
  image: "https://images.unsplash.com/photo-1700831213936-44bb92582be4?auto=format&fit=crop&w=1800&q=80",
  imageAlt: "A Stanley hand plane surrounded by fresh wood shavings — the Lupane craft",
};

// ---------- NOT FOUND ----------
export const notFound = {
  quote: "This page has gone the way of a green board — curled and moved on.",
  blurb: "The link you followed doesn't lead anywhere on the Lupane site. Head back to the yard and start again.",
};

// ---------- MAP ----------
export const mapEmbed =
  "https://www.google.com/maps?q=25+Connaught+Road,+Avondale,+Harare,+Zimbabwe&output=embed";
