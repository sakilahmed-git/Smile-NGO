export const siteConfig = {
  name: "SMILE NGO",
  description:
    "A transparent, community-led NGO platform supporting education, health, nutrition and dignity programs for children and families.",
  url: "https://smilengo.org",
  phone: "+91 98765 43210",
  email: "hello@smilengo.org",
  address: "SMILE Community Centre, Patna, Bihar, India",
  whatsapp: "919876543210",
  social: {
    facebookPageUrl:
      process.env.NEXT_PUBLIC_FACEBOOK_PAGE_URL ?? "https://www.facebook.com/profile.php?id=61587482858117",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  },
};
