export const latestBlogSection = {
  eyebrow: "LATEST INSIGHTS",
  title: "Our Latest Blog",
  subtitle: "Stay updated with the latest technology and digital growth insights.",
  viewAllLabel: "View All Blogs",
  viewAllHref: "/blogs/",
} as const;

export const featuredBlog = {
  slug: "digital-marketing-online-business-growth",
  category: "Digital Marketing",
  title: "Digital Marketing: The Key to Online Business Growth",
  excerpt:
    "In today's competitive digital landscape, businesses need more than a website to grow. Digital marketing connects your brand with the right audience through SEO, content, social media, and data-driven campaigns that turn visibility into measurable revenue.",
  image: "/images/blog/digital-marketing-growth.jpg",
  imageAlt:
    "Digital marketing analytics dashboards and SEO performance charts showing online business growth metrics",
  publishedAt: "May 15, 2026",
  readTime: "5 min read",
  href: "/blogs/digital-marketing-online-business-growth/",
  readMoreLabel: "Read More",
} as const;

export const featuredBlogArticle = {
  ...featuredBlog,
  intro:
    "Digital marketing has become the foundation of sustainable online business growth. Whether you are a startup building brand awareness or an enterprise scaling lead generation, a strategic digital presence helps you reach customers where they already spend their time—search engines, social platforms, and across the web.",
  sections: [
    {
      heading: "Why Digital Marketing Matters",
      body: "Consumers research products, compare services, and make purchasing decisions online. Without a structured digital marketing strategy, even the best products can remain invisible. SEO improves discoverability, content marketing builds trust, social media strengthens engagement, and paid campaigns accelerate qualified lead flow.",
    },
    {
      heading: "Core Channels That Drive Growth",
      body: "Search engine optimization helps your business rank for high-intent keywords. Content marketing educates prospects and supports conversions. Social media marketing amplifies brand visibility and community loyalty. Together, these channels create a consistent funnel from awareness to action.",
    },
    {
      heading: "Building a Results-Focused Strategy",
      body: "Successful digital marketing is not about random posting—it is about alignment. Define your audience, set measurable goals, track performance with analytics, and refine campaigns based on real data. Businesses that invest in integrated digital strategies consistently outperform competitors relying on outdated or fragmented tactics.",
    },
    {
      heading: "Partner for Long-Term Success",
      body: "Byte Infomedia helps businesses design and execute digital marketing programs that combine SEO, content, social media, and conversion-focused web experiences. With the right strategy and execution partner, online growth becomes predictable, scalable, and sustainable.",
    },
  ],
} as const;
