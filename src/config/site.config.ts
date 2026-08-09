export const siteConfig = {
  name: "SMILE NGO",
  description:
    "SMILE NGO is a community-led NGO in Kokrajhar and Gossaigaon, Assam, supporting education, health, relief and community development work for families and children.",
  url: "https://www.smilengo.org.in",
  phone: "+91 7002372041/+91 7002683620",
  email: "smilengo2025@gmail.com",
  address: "Burichatam No.1, Gossaigaon, Kokrajhar, Assam, 783361",
  logo: "/logos/15bab117-44da-452d-9634-698c45c64771 (1)-modified.png",
  whatsapp: "917002372041",
  social: {
    facebookPageUrl:
      process.env.NEXT_PUBLIC_FACEBOOK_PAGE_URL ?? "https://www.facebook.com/profile.php?id=61587482858117",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  },
};
