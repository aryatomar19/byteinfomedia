import { aiSearchBlog, aiSearchBlogArticle } from "@/data/ai-search-blog";
import { cloudServicesBlog, cloudServicesBlogArticle } from "@/data/cloud-services-blog";

export const latestBlogSection = {
  eyebrow: "LATEST INSIGHTS",
  title: "Our Latest Blog",
  subtitle: "Stay updated with the latest technology and digital growth insights.",
  viewAllLabel: "View All Blogs",
  viewAllHref: "/blogs/",
} as const;

export type BlogArticleTable = {
  headers: readonly string[];
  rows: readonly (readonly string[])[];
};

export type BlogArticleFaq = {
  question: string;
  answer: string;
};

export type BlogArticleSubsection = {
  heading: string;
  body?: string;
  bullets?: readonly string[];
  subsections?: readonly BlogArticleSubsection[];
};

export type BlogArticleSection = {
  heading: string;
  body?: string;
  bullets?: readonly string[];
  subsections?: readonly BlogArticleSubsection[];
  table?: BlogArticleTable;
};

export const featuredBlog = {
  slug: "digital-marketing-key-to-online-business-growth",
  category: "Digital Marketing",
  title: "Digital Marketing: The Key to Online Business Growth",
  subtitle: "Why Some Businesses Grow Faster Online Than Others",
  excerpt:
    "In the digital-ages of today, customers use online channels to discover a business, to compare services and to make decisions before they purchase. They start their journey online when they search on Google, visit websites or scroll through social media. That's why digital marketing is one of the most effective ways for companies to boost visibility, draw in customers, and ensure sustainable growth.",
  image: "/images/blog/digital-marketing-growth.jpg",
  imageAlt:
    "Digital marketing featured graphic showing analytics dashboards, a marketing strategy notebook, and growth pillars including visibility, audience targeting, measurable results, and sustainable growth",
  publishedAt: "June 11, 2026",
  readTime: "6 min read",
  href: "/blogs/digital-marketing-key-to-online-business-growth/",
  readMoreLabel: "Read More",
} as const;

export const featuredBlogArticle = {
  ...featuredBlog,
  intro:
    "In the digital-ages of today, customers use online channels to discover a business, to compare services and to make decisions before they purchase. They start their journey online when they search on Google, visit websites or scroll through social media. That's why digital marketing is one of the most effective ways for companies to boost visibility, draw in customers, and ensure sustainable growth.",
  sections: [
    {
      heading: "The Digital Shift Every Business Must Understand",
      body: "Digital marketing is the marketing of products, services or brands using one or more electronic media, including mobile and search engines, websites, social media and digital content. It provides several advantages over traditional marketing methods, such as the ability to target specific audiences, track results in real-time, and adjust strategies for improved performance and return.",
    },
    {
      heading: "Why Businesses Are Investing in Digital Marketing",
      bullets: [
        "Improved online presence",
        "Improved audience segmentation",
        "Measurable outcomes and analytics",
      ],
    },
    {
      heading: "Why Some Businesses Grow Faster Online Than Others",
      body: "Today's consumers research online before making decisions. Having a robust online presence can help businesses establish trust, attract new customers, and remain competitive in an overcrowded market. With a digital marketing budget, businesses can see an increased number of leads, enhance their customer engagement, and achieve sustainable growth.",
    },
    {
      heading: "How It Creates Business Growth",
      bullets: [
        "Builds trust and credibility",
        "Generates quality leads",
        "Supports business growth",
      ],
    },
    {
      heading: "The Four Core Components",
      subsections: [
        {
          heading: "1. Search Engine Optimization (SEO)",
          body: "SEO can improve your website's placement on search engines such as Google, which makes it easier for your customers to find you online. By adapting the right SEO strategy, you can enhance your visibility, drive organic traffic to your website, and boost the likelihood of converting visitors into customers.",
          subsections: [
            {
              heading: "What Makes SEO Powerful?",
              bullets: [
                "Keyword optimization",
                "Technical SEO",
                "Quality content",
                "Link building",
                "User experience",
              ],
            },
          ],
        },
        {
          heading: "2. Website Development",
          body: "The website is the backbone of a business. It should be quick, responsive, secure and user-friendly. A professional site design improves customer experience, promotes trust and helps with all other online marketing activities.",
          subsections: [
            {
              heading: "What Every High-Performing Website Needs:",
              bullets: [
                "Mobile responsiveness",
                "Fast loading speed",
                "Secure architecture",
                "User-friendly design",
                "Conversion-focused structure",
              ],
            },
          ],
        },
        {
          heading: "3. Content Writing",
          body: "Content writing is used to help your business convey a message, educate your customers, and build your reputation in your field. Quality writing increases engagement, helps with SEO, and prompts users to take action.",
          subsections: [
            {
              heading: "Why Great Content Delivers Results:",
              bullets: [
                "Website content",
                "Blog writing",
                "Service pages",
                "SEO optimization",
                "Brand messaging",
              ],
            },
          ],
        },
        {
          heading: "4. Social Media Marketing",
          body: "Social media marketing allows businesses to reach and engage their customers directly, establish brand recognition, and create customer relationships. Businesses can boost their visibility and keep a solid online presence with consistent and engaging content.",
          subsections: [
            {
              heading: "How Social Media Strengthens Your Brand",
              bullets: [
                "Audience engagement",
                "Brand awareness",
                "Content promotion",
                "Community building",
                "Customer interaction",
              ],
            },
          ],
        },
      ],
    },
    {
      heading: "Key Takeaways",
      bullets: [
        "SEO boosts search visibility and enhances organic traffic.",
        "A professional website gains good impression and facilitates convertion.",
        "Good content creates trust and authority and it engages customers.",
        "Social media marketing helps build brand visibility and engagement with customers.",
      ],
    },
  ] satisfies readonly BlogArticleSection[],
} as const;

export const blogPosts = [featuredBlog, cloudServicesBlog, aiSearchBlog] as const;

export const blogArticles = {
  [featuredBlog.slug]: featuredBlogArticle,
  [cloudServicesBlog.slug]: cloudServicesBlogArticle,
  [aiSearchBlog.slug]: aiSearchBlogArticle,
} as const;

export function getBlogNavigation(slug: string) {
  const index = blogPosts.findIndex((post) => post.slug === slug);

  return {
    previous: index > 0 ? blogPosts[index - 1] : null,
    next: index >= 0 && index < blogPosts.length - 1 ? blogPosts[index + 1] : null,
  };
}

export type BlogPost = (typeof blogPosts)[number];
export type BlogArticle = (typeof blogArticles)[keyof typeof blogArticles];

export { aiSearchBlog, aiSearchBlogArticle } from "@/data/ai-search-blog";
export { cloudServicesBlog, cloudServicesBlogArticle } from "@/data/cloud-services-blog";
