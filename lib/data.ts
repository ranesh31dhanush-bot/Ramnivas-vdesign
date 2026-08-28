import type { ProjectData, GalleryImage } from "@/types";
import { buildGoogleMapsUrl, buildMapEmbedUrl } from "@/lib/utils";

/** Ram Nagar Colony, Temple Alwal — Wikimapia Ram Nagar - Alwal (17°29'58"N 78°30'36"E) */
const LOCATION_COORDS = { lat: 17.499444, lng: 78.51 };
const MAP_ZOOM = 18;

export const project: ProjectData = {
  name: "Virat Ramnivas",
  developer: "Virat Constructions",
  tagline: "Premium 3BHK Flats for Sale",
  location: {
    area: "Ram Nagar Colony, Temple Alwal",
    address: "Ram Nagar Colony, Temple Alwal, Hyderabad",
    roadFrontage: "30 ft road frontage",
    landmarks: [
      "Temple Alwal",
      "Ram Nagar Colony main road",
      "Near Uma Nagar (Karnataka Bank branch area)",
    ],
    coordinates: LOCATION_COORDS,
    mapZoom: MAP_ZOOM,
    mapEmbedUrl: buildMapEmbedUrl(
      LOCATION_COORDS.lat,
      LOCATION_COORDS.lng,
      MAP_ZOOM,
    ),
    googleMapsUrl: buildGoogleMapsUrl(
      LOCATION_COORDS.lat,
      LOCATION_COORDS.lng,
      MAP_ZOOM,
    ),
  },
  status: {
    label: "Bookings Open",
    sublabel: "Limited flats available",
  },
  financing: {
    bank: "Karnataka Bank",
    branch: "Uma Nagar Branch",
    tagline: "All banks' loans approved",
  },
  flats: [
    {
      id: "1543",
      size: 1543,
      facing: "North",
      config: "3BHK",
      notes:
        "Bedroom 10/9, Bedroom 10/10, Bedroom 13/8, Living 10/16, Dining 9/10.6, Kitchen 9/9, 2 Toilets, 2 Balconies",
      image: "/images/floorplans/1543-north.jpeg",
      highlights: ["North facing", "Spacious living area", "2 balconies"],
      rooms: [
        { name: "Bedroom 1", dimensions: "10' × 9'" },
        { name: "Bedroom 2", dimensions: "10' × 10'" },
        { name: "Bedroom 3", dimensions: "13' × 8'" },
        { name: "Living", dimensions: "10' × 16'" },
        { name: "Dining", dimensions: "9' × 10.6'" },
        { name: "Kitchen", dimensions: "9' × 9'" },
        { name: "Toilets", dimensions: "2" },
        { name: "Balconies", dimensions: "2" },
      ],
    },
    {
      id: "1641",
      size: 1641,
      facing: "West",
      config: "3BHK",
      notes:
        "Bedroom 11/10, Bedroom 10/10, Bedroom 10/11, Living 13.6/12, Dining 14.6/12, Kitchen 8/12, Pooja, 2 Toilets, 2 Balconies",
      image: "/images/floorplans/1641-west.jpeg",
      highlights: ["West facing", "Dedicated pooja room", "Large dining space"],
      rooms: [
        { name: "Bedroom 1", dimensions: "11' × 10'" },
        { name: "Bedroom 2", dimensions: "10' × 10'" },
        { name: "Bedroom 3", dimensions: "10' × 11'" },
        { name: "Living", dimensions: "13.6' × 12'" },
        { name: "Dining", dimensions: "14.6' × 12'" },
        { name: "Kitchen", dimensions: "8' × 12'" },
        { name: "Pooja", dimensions: "Included" },
        { name: "Toilets", dimensions: "2" },
        { name: "Balconies", dimensions: "2" },
      ],
    },
    {
      id: "1694",
      size: 1694,
      facing: "East",
      config: "3BHK",
      notes:
        "Bedroom 10/10, Bedroom 13/10, Bedroom 12.6/12, Living 14.6/12, Dining 10/12, Kitchen 10/10, Pooja, 2 Toilets, 2 Balconies",
      image: "/images/floorplans/1694-east.jpeg",
      highlights: ["East facing", "Generous master bedroom", "Pooja room"],
      rooms: [
        { name: "Bedroom 1", dimensions: "10' × 10'" },
        { name: "Bedroom 2", dimensions: "13' × 10'" },
        { name: "Bedroom 3", dimensions: "12.6' × 12'" },
        { name: "Living", dimensions: "14.6' × 12'" },
        { name: "Dining", dimensions: "10' × 12'" },
        { name: "Kitchen", dimensions: "10' × 10'" },
        { name: "Pooja", dimensions: "Included" },
        { name: "Toilets", dimensions: "2" },
        { name: "Balconies", dimensions: "2" },
      ],
    },
    {
      id: "1726",
      size: 1726,
      facing: "East",
      config: "3BHK",
      notes:
        "Bedroom 10/10, Bedroom 10/10, Bedroom 10/13, Living 16/10.3, Dining 10/15.8, Kitchen 9/8, Pooja, 2 Toilets, 3 Balconies",
      image: "/images/floorplans/1726-east.jpeg",
      highlights: ["East facing", "Largest layout", "3 balconies"],
      rooms: [
        { name: "Bedroom 1", dimensions: "10' × 10'" },
        { name: "Bedroom 2", dimensions: "10' × 10'" },
        { name: "Bedroom 3", dimensions: "10' × 13'" },
        { name: "Living", dimensions: "16' × 10.3'" },
        { name: "Dining", dimensions: "10' × 15.8'" },
        { name: "Kitchen", dimensions: "9' × 8'" },
        { name: "Pooja", dimensions: "Included" },
        { name: "Toilets", dimensions: "2" },
        { name: "Balconies", dimensions: "3" },
      ],
    },
  ],
  amenities: [
    {
      id: "parking",
      name: "Car Parking",
      description: "Dedicated covered parking for residents with secure stilt-level access.",
      icon: "car",
    },
    {
      id: "lift",
      name: "Lift Facility",
      description: "Modern lift for comfortable daily access across all floors.",
      icon: "arrow-up-down",
    },
    {
      id: "generator",
      name: "Generator Backup",
      description: "Power backup to keep essential services running during outages.",
      icon: "zap",
    },
    {
      id: "cctv",
      name: "CCTV Cameras",
      description: "Round-the-clock surveillance across common areas for peace of mind.",
      icon: "camera",
    },
    {
      id: "ev",
      name: "EV Charging Points Provision",
      description: "Future-ready infrastructure for electric vehicle charging.",
      icon: "plug",
    },
  ],
  brands: [
    { name: "Asian Paints" },
    { name: "Astral Pipes" },
    { name: "Cera" },
    { name: "Parryware" },
    { name: "Kajaria" },
    { name: "AGL" },
    { name: "Action Tesa" },
    { name: "Greenlam" },
    { name: "Merino" },
    { name: "Virgo" },
  ],
  contact: {
    phones: ["8886555200", "7799442293"],
    instagram: {
      handle: "@vdesign4interiors",
      url: "https://www.instagram.com/vdesign4interiors",
    },
    website: "https://www.theviratgroup.com",
  },
  rera: {
    number: "RERA No. — To be updated",
    disclaimer:
      "RERA registration details will be updated upon final approval. Please verify before booking.",
  },
  about: {
    headline: "Built on trust, crafted for living",
    paragraphs: [
      "Virat Ramnivas by Virat Constructions brings thoughtfully designed 3BHK homes to Ram Nagar Colony, Temple Alwal — a location known for its calm neighbourhood character and excellent connectivity.",
      "Every flat is planned with generous room proportions, quality finishes from trusted brands, and amenities that support modern family life. With 30 ft road frontage and limited inventory, this is an opportunity to own a premium home in a growing residential pocket.",
      "Backed by Karnataka Bank financing at Uma Nagar Branch, with all banks' loans approved, your path to ownership is straightforward and transparent.",
    ],
    values: [
      {
        title: "Quality",
        description:
          "Premium materials from established brands — Asian Paints, Kajaria, Cera, and more.",
      },
      {
        title: "Trust",
        description:
          "Transparent specifications, clear floor plans, and direct communication with the developer.",
      },
      {
        title: "Commitment",
        description:
          "A project financed by Karnataka Bank, built with long-term value for homeowners in mind.",
      },
    ],
  },
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/floor-plans", label: "Floor Plans" },
  { href: "/amenities", label: "Amenities" },
  { href: "/location", label: "Location" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/elevation/elevation-1.jpeg",
    alt: "Virat Ramnivas building elevation — front view",
    category: "elevation",
  },
  {
    src: "/images/elevation/elevation-2.jpeg",
    alt: "Virat Ramnivas building elevation — side perspective",
    category: "elevation",
  },
  {
    src: "/images/elevation/elevation-3.jpeg",
    alt: "Virat Ramnivas building elevation — entrance view",
    category: "elevation",
  },
  {
    src: "/images/gallery/brochure-1.jpeg",
    alt: "Virat Ramnivas project brochure",
    category: "brochure",
  },
  {
    src: "/images/gallery/brochure-2.jpeg",
    alt: "Virat Ramnivas project details brochure",
    category: "brochure",
  },
  {
    src: "/images/gallery/brochure-3.jpeg",
    alt: "Virat Ramnivas amenities and floor plan brochure",
    category: "brochure",
  },
  {
    src: "/images/floorplans/1543-north.jpeg",
    alt: "1543 sq.ft North facing 3BHK floor plan",
    category: "floorplan",
  },
  {
    src: "/images/floorplans/1641-west.jpeg",
    alt: "1641 sq.ft West facing 3BHK floor plan",
    category: "floorplan",
  },
  {
    src: "/images/floorplans/1694-east.jpeg",
    alt: "1694 sq.ft East facing 3BHK floor plan",
    category: "floorplan",
  },
  {
    src: "/images/floorplans/1726-east.jpeg",
    alt: "1726 sq.ft East facing 3BHK floor plan",
    category: "floorplan",
  },
];

export const flatSizeOptions = [
  { value: "1543", label: "1543 sq.ft — North Facing" },
  { value: "1641", label: "1641 sq.ft — West Facing" },
  { value: "1694", label: "1694 sq.ft — East Facing" },
  { value: "1726", label: "1726 sq.ft — East Facing" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.theviratgroup.com";

export const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "8886555200";
