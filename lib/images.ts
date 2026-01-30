export interface ProjectImage {
  id: string;
  url: string;
  title: string;
  description: string;
  category: 'roads' | 'drainage' | 'commercial' | 'residential' | 'exterior' | 'tourist' | 'founder' | 'supervision';
  location?: string;
  role?: string;
}

export const projectImages: ProjectImage[] = [
  {
    id: 'founder-portrait',
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-01-30%20at%2018.44.06-Zh9rOBDXAVNwO5AS9GL5v96c1h67eO.jpeg',
    title: 'Gulaale Humphrey Adonia',
    description: 'Founder & Civil Engineer',
    category: 'founder',
  },
  {
    id: 'residential-construction-01',
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260130-WA0026-LQvC6fz0vjSuBSfn9i5AgRu7uGXqGM.jpg',
    title: 'Residential Foundation Works',
    description: 'Multi-storey residential construction with reinforced concrete foundations and structural framing',
    category: 'residential',
    location: 'Jinja District',
    role: 'Project Manager & Site Engineer',
  },
  {
    id: 'site-supervision-01',
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260130-WA0031-gJA5sY6M1kDSUAWXaF6hKmOcFgdI0v.jpg',
    title: 'On-Site Supervision',
    description: 'Professional site supervision ensuring safety compliance and quality standards during floor casting',
    category: 'supervision',
    location: 'Jinja',
    role: 'Site Engineer',
  },
  {
    id: 'commercial-construction-01',
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260130-WA0027-jaGRjxrO3o9IDMc3F1fIuejwkKYwX0.jpg',
    title: 'Commercial Development - Floor System',
    description: 'Large-scale commercial project with organized clay block construction and reinforced floor system',
    category: 'commercial',
    location: 'Jinja',
    role: 'Project Manager',
  },
  {
    id: 'residential-construction-02',
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260130-WA0024-7RXo3ULJGoHNvgAQhE1cHG7PGG8IEM.jpg',
    title: 'Residential Complex with Tourist Camp',
    description: 'Multi-unit residential development with integrated tourist accommodation and cabin structures in scenic setting',
    category: 'residential',
    location: 'Jinja Region',
    role: 'Contractor & Development Consultant',
  },
];

export function getImagesByCategory(category: ProjectImage['category']): ProjectImage[] {
  return projectImages.filter((img) => img.category === category);
}

export function getImageById(id: string): ProjectImage | undefined {
  return projectImages.find((img) => img.id === id);
}

export function getAllImages(): ProjectImage[] {
  return projectImages;
}
