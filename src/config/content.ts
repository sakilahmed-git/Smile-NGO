export const impactStats = [
  { label: "lives supported", value: "540+" },
  { label: "community programs", value: "10+" },
  { label: "verified donations", value: "₹20k+" },
  { label: "active volunteers", value: "12+" },
];

export const projects = [
  {
    slug: "assam-flood-relief-campaign",
    title: "Assam Flood Relief Campaign",
    category: "Flood Relief",
    summary:
      "Our ongoing relief campaign is supporting families affected by the recent floods in Assam with essential supplies and direct community assistance.",
    location: "Upper Assam",
    progress: 20,
    metric: "Currently accepting donations and relief support",
    imageSrc: "/gallery/community/ChatGPT Image Aug 8, 2026, 12_56_21 PM.png",
    status: "Ongoing",
  },

  {
  slug: "plantation-drive",
  title: "Plantation Drive",
  category: "Environment",
  summary:
    "Community plantation drives across Gossaigaon and villages in the BTC region of Assam, bringing volunteers and local communities together to plant and care for trees.",
  location: "Gossaigaon & villages across BTC, Assam",
  progress: 100,
  metric: "Completed",
  imageSrc: "/images/ChatGPT Image Aug 8, 2026, 03_44_57 PM.png",
  status: "Completed",
},

  {
    slug: "student-recognition",
    title: "Student Recognition",
    category: "Education",
    summary:
      "Encouraging students to perform their best by recognizing academic achievement and providing prizes to motivate them to continue learning and succeeding.",
    location: "Gossaigaon, Assam",
    progress: 100,
    metric: "Completed",
    imageSrc: "/images/ChatGPT Image Aug 8, 2026, 03_46_50 PM.png",
    status: "Completed",
  },

  {
    slug: "community-events",
    title: "Community Events",
    category: "Community",
    summary:
      "Supporting and participating in small community events that bring local people together, encourage participation and create positive moments for the community.",
    location: "Gossaigaon, Assam",
    progress: 100,
    metric: "Completed",
    imageSrc: "/images/ChatGPT Image Aug 8, 2026, 03_54_21 PM.png",
    status: "Completed",
  },
];

export const galleryItems = [
  "Community classroom",
  "Health camp",
  "Volunteer orientation",
  "Food kit packing",
  "Student mentoring",
  "Field visit",
];

export const team = [
  
  { name: "Rubul Ahmed Sheikh", role: "Co-Founder & General Secretary" },
  { name: "Ariful Hassan Khan", role: "Co-Founder & President" },
  { name: "Hafizur Rahman Bhuyan", role: "Vice-President" },
  { name: "Habibar Rahman", role: "Assistant Secretary" },
  { name: "Shahin Hossain", role: "Treasurer" },
  { name: "Abdullah Sk", role: "Executive Member" },
  { name: "Ashique Mehmood", role: "Executive Member" },
  { name: "Shahin Akhtar", role: "Executive Member" },
  { name: "Abdul Alim", role: "Executive Member" },
  { name: "Rejaul Islam Sheikh", role: "Executive Member" },
  { name: "Pronoy Tudu", role: "Executive Member" },
  { name: "Rohijuddin Sheikh", role: "Executive Member" },
];

export const reports = [
  { title: "Annual Impact Report 2025", meta: "Audited program and finance summary", fileName: "annual-impact-2025.pdf" },
  { title: "Quarterly Donation Ledger", meta: "Approved donation receipts and allocations", fileName: "donation-ledger-q2-2026.pdf" },
  { title: "Child Safety Policy", meta: "Safeguarding, consent and reporting standards", fileName: "child-safety-policy.pdf" },
];

export const blogPosts = [
  {
    slug: "learning-labs-update",
    title: "How local learning labs keep children connected to school",
    excerpt: "A field note on tutoring, safe spaces and parent engagement.",
    coverImage: "/blog/learning-labs.svg",
    date: "2026-08-01",
    published: true,
  },
];

export const events = [
  {
    slug: "monthly-health-camp",
    title: "Monthly Health Camp",
    excerpt: "Screening, nutrition counselling and referral support for families.",
    image: "/events/health-camp.svg",
    date: "2026-08-18",
    location: "Patna Community Centre",
    published: true,
    status: "Upcoming",
    time: "10:00 AM",
  },
];

export const facebookFallbackPosts = [
  {
    title: "Learning Lab reopened after monsoon repairs",
    date: "Aug 2, 2026",
    body: "Students returned to a refreshed centre with new reading corners and mentoring circles.",
  },
  {
    title: "Nutrition kits verified and delivered",
    date: "Jul 27, 2026",
    body: "Field coordinators completed beneficiary verification before distributing monthly kits.",
  },
  {
    title: "Volunteer weekend completed",
    date: "Jul 20, 2026",
    body: "New volunteers trained on safeguarding, documentation and respectful field communication.",
  },
];

export const donationDetails = {
  upiId: "smilengo@sbi",
  accountName: "SMILE NGO",
  ifsc: "SBIN0007996",
  bank: "State Bank of India",
};

// --- New exports below, added for the rebuilt homepage. Existing exports above are unchanged. ---

export const siteStats = [
  { label: " lives supported", value: "540+" },
  { label: " community programs", value: "10+" },
  { label: " verified donations", value: "₹20k+" },
  { label: " active volunteers", value: "12+" },
];

export const assistanceSteps = {
  title: "Need help from us?",
  intro:
    "If your family needs support through one of our programs, here is how to reach our field team.",
  steps: [
    {
      title: "Tell us what you need",
      body: "Call, WhatsApp or message us with your location and the kind of support you're looking for.",
    },
    {
      title: "Field visit and verification",
      body: "A coordinator visits or calls to understand your situation and confirm eligibility.",
    },
    {
      title: "Support is arranged",
      body: "We connect you to the right program — education, health, relief or document assistance.",
    },
  ],
  ctaHref: "tel:+917002372041",
  ctaLabel: "Call 7002372041",
};

export const contributeSteps = {
  title: "Want to contribute?",
  intro: "Every donation is tracked and reported. Here is how your support reaches the field.",
  steps: [
    {
      title: "Choose how to give",
      body: "Donate via UPI or bank transfer, or volunteer your time and skills.",
    },
    {
      title: "Get verified",
      body: "Upload your payment screenshot and our admin team approves it before it's counted publicly.",
    },
    {
      title: "See the impact",
      body: "Follow field updates, reports and stories showing exactly where support goes.",
    },
  ],
  ctaHref: "/donate",
  ctaLabel: "Donate Now",
};

export const latestActivity = [
  {
    title: "Support This Month's Drive",
    tag: "Donate",
    body: "Scan the UPI QR code to make a verified contribution directly to our current programs.",
    ctaHref: "/donate",
    ctaLabel: "View Donation Details",
    showQr: true,
  },
  {
    title: "Monthly Health Camp",
    tag: "Upcoming Event",
    body: "Free screening, nutrition counselling and referral support for families in Gossaigaon.",
    ctaHref: "/events",
    ctaLabel: "See Event Details",
    showQr: false,
  },
];

export const aboutSummary = {
  since: "Working with communities in Kokrajhar and Gossaigaon, Assam",
  body:
    "SMILE NGO runs education, health and relief programs for underserved families in the Kokrajhar and Gossaigaon region of Assam. Our field team works directly with communities, keeping donation records transparent and verified by our admin team before they are counted publicly.",
};

export const founderMessage = {
  name: "Rubul Ahmed",
  role: "Founder & General Secretary",
  quote:
    "Every child deserves a fair start and every family deserves dignity. SMILE NGO exists to make that possible, one verified act of support at a time.",
};

export const objectives = [
  {
    title: "Education access",
    body: "Support first-generation learners with tutoring, learning materials and safe study spaces.",
  },
  {
    title: "Health & nutrition",
    body: "Run regular health camps, nutrition kits and counselling for children and mothers.",
  },
  {
    title: "Relief & dignity",
    body: "Provide rapid relief — hygiene kits, blankets and essentials — during floods and emergencies.",
  },
  {
    title: "Transparent giving",
    body: "Keep every donation, report and policy open for donors and the community to review.",
  },
];

export const financialYearImpact = {
  intro:
    "A snapshot of SMILE NGO's growing work across education, health, environment, community development and humanitarian support.",
  years: [
    {
      year: "FY 2025–26",
      stats: [
        { label: "Children & students reached", value: "500+" },
        { label: "Community programmes", value: "10+" },
        { label: "Active volunteers", value: "12" },
        { label: "Humanitarian & relief support", value: "Growing" },
      ],
    },
    {
      year: "FY 2024–25",
      stats: [
        { label: "Organisation established", value: "2025" },
        { label: "Core focus", value: "Community welfare" },
        { label: "Programmes initiated", value: "Grassroots" },
        { label: "Volunteer network", value: "Growing" },
      ],
    },
  ],
};

export const membershipInfo = {
  eyebrow: "Get involved",
  title: "Join Our Organization",
  body:
    "Become a member, volunteer or advisor and take part in our education, health and relief programs across Kokrajhar and Gossaigaon.",
  tiers: ["General Member", "Volunteer", "Advisor", "Life Member"],
  ctaHref: "/volunteers/apply",
  ctaLabel: "Register Now",
};

export const managementTeam = [
  { name: "Rubul Ahmed", role: "Founder and General Secretary" },
  { name: "Ariful Hassan Khan", role: "President" },
  { name: "Hafizur Rahman Bhuyan", role: "Vice-President" },
  { name: "Habibar Rahman", role: "Assistant Secretary" },
];

export const testimonials = [
  {
    name: "Community volunteer",
    role: "Learning Labs, Kokrajhar",
    quote:
      "Seeing the children's confidence grow at the learning centre every week is why I keep coming back to volunteer.",
  },
  {
    name: "Program beneficiary",
    role: "Nutrition Circle, Gossaigaon",
    quote:
      "The monthly health camp caught a problem early for my mother. The team followed up with us for months after.",
  },
  {
    name: "Local donor",
    role: "Monthly UPI supporter",
    quote:
      "I like that every rupee I send is tracked and reported back. It's the most transparent giving I've done.",
  },
];

export const documentsChecklist = [
  "Society/Trust registration certificate",
  "PAN card of the organization",
  "12A and 80G registration",
  "FCRA registration (for foreign contributions)",
  "Annual audited financial statements",
  "Latest board/general body resolution",
];