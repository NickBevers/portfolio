export interface Project {
    name: string;
    slug: string;
    teaser: string;
    description: string;
    thumbnail: string;
    cover: string;
    images: string[];
    link?: string;
    skills: string[];
    tags: string[];
    client: string;
    purpose: string;
    date: string;
    collaborators?: { name: string; link: string }[];
}

