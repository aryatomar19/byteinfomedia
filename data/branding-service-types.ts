export type BrandingServiceOffering = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type BrandingFeature = {
  title: string;
  description: string;
  icon:
    | "globe"
    | "layout"
    | "shopping"
    | "code"
    | "smartphone"
    | "gauge"
    | "search"
    | "fileText"
    | "link"
    | "key"
    | "mapPin"
    | "clipboard"
    | "trending"
    | "pen"
    | "book"
    | "fileCode"
    | "package"
    | "megaphone"
    | "facebook"
    | "instagram"
    | "linkedin"
    | "sparkles"
    | "users"
    | "target"
    | "barChart";
};

export type BrandingValueItem = {
  title: string;
  description: string;
  icon: "award" | "headphones" | "workflow" | "wallet" | "target" | "users";
};

export type BrandingServicePageData = {
  slug: string;
  badge: string;
  hero: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  overview: {
    title: string;
    description: string;
    businessBenefits: string[];
    useCases: string[];
  };
  features: BrandingFeature[];
  offerings: BrandingServiceOffering[];
  benefits: BrandingValueItem[];
  showcase: {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
  };
  cta: {
    title: string;
    description: string;
  };
};
