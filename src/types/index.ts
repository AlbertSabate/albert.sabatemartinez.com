export interface ProfileData {
  personal: {
    name: string;
    preferredName: string;
    title: string;
    headline?: string;
    location: {
      city: string;
      region: string;
      country: string;
      timezone: string;
    };
    languages: Array<{
      name: string;
      proficiency: string;
    }>;
    links?: {
      github?: string;
      stackoverflow?: string;
      linkedin?: string;
      arc?: string;
    };
    stats?: {
      yearsOfExperience: number;
      projectsDelivered: number;
      usersImpacted: string;
      teamsLed: number;
    };
  };
  about: string;
  skills: {
    primary: Array<{
      name: string;
      years: number;
      rating?: number;
      description?: string;
    }>;
    technical: Array<{
      name: string;
      years: number;
      rating?: number;
      description?: string;
    }>;
    frameworks?: string[];
    cloud?: string[];
  };
  experience: Array<{
    company: string;
    title: string;
    type: string;
    startDate: string;
    endDate: string | null;
    current: boolean;
    description: string;
    highlights: string[];
    technologies?: string[];
  }>;
  education: Array<{
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    location: string;
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    issueDate: string;
    expiryDate?: string;
    url: string | null;
  }>;
  testimonials: Array<{
    name: string;
    role?: string;
    text: string;
  }>;
  projects: Array<{
    title: string;
    description: string;
    year: number;
    highlights?: string[];
    technologies: string[];
    links?: Array<{
      url: string;
      label: string;
    }>;
    image?: string;
    video?: string;
  }>;
}
