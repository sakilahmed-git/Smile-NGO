export const siteConfig = {
  name: "SMILE NGO",
  description:
    "A transparent, community-led NGO platform supporting education, health, nutrition and dignity programs for children and families.",
  url: "https://smilengo.org",
  phone: "+91 7002372041/+91 7002683620",
  email: "smilengo2025@gmail.com",
  address: "Burichatam No.1, Gossaigaon, Kokrajhar, Assam, 783361",
  whatsapp: "917002372041",
  social: {
    facebookPageUrl:
      process.env.NEXT_PUBLIC_FACEBOOK_PAGE_URL ?? "https://www.facebook.com/profile.php?id=61587482858117",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  },
};
