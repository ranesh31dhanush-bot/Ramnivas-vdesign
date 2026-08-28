export interface RoomSpec {
  name: string;
  dimensions: string;
}

export interface Flat {
  id: string;
  size: number;
  facing: "North" | "West" | "East";
  config: string;
  notes: string;
  rooms: RoomSpec[];
  image: string;
  highlights: string[];
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Brand {
  name: string;
}

export interface ContactInfo {
  phones: string[];
  instagram: {
    handle: string;
    url: string;
  };
  website: string;
}

export interface FinancingInfo {
  bank: string;
  branch: string;
  tagline: string;
}

export interface ProjectData {
  name: string;
  developer: string;
  tagline: string;
  location: {
    area: string;
    address: string;
    roadFrontage: string;
    landmarks: string[];
    coordinates: { lat: number; lng: number };
    mapZoom: number;
    mapEmbedUrl: string;
    googleMapsUrl: string;
  };
  status: {
    label: string;
    sublabel: string;
  };
  financing: FinancingInfo;
  flats: Flat[];
  amenities: Amenity[];
  brands: Brand[];
  contact: ContactInfo;
  rera: {
    number: string;
    disclaimer: string;
  };
  about: {
    headline: string;
    paragraphs: string[];
    values: { title: string; description: string }[];
  };
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  flatSize: string;
  message?: string;
  createdAt: string;
  source: string;
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  email?: string;
  flatSize: "1543" | "1641" | "1694" | "1726" | "not-sure";
  message?: string;
}

export type FlatSizeOption = EnquiryFormData["flatSize"];

export interface GalleryImage {
  src: string;
  alt: string;
  category: "elevation" | "brochure" | "floorplan";
}

export interface NavLink {
  href: string;
  label: string;
}

export interface PageMeta {
  title: string;
  description: string;
  path: string;
}
