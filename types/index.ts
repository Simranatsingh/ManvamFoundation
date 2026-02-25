export interface Campaign {
  id: number
  title: string
  description: string
  status: "active" | "completed" | "upcoming"
  details: string
}

export interface GalleryImage {
  id: number
  title: string
  description: string
  alt: string
}

export interface Founder {
  id: number
  name: string
  role: string
  description: string
  icon: string
}

export interface Mentor {
  id: number
  name: string
  role: string
  description: string
  icon: string
}
