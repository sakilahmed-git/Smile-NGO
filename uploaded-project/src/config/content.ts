export const impactStats = [
  { label: "lives supported", value: "540+" },
  { label: "community programs", value: "10+" },
  { label: "verified donations", value: "₹20k+" },
  { label: "active volunteers", value: "12+" },
];

// Header stat strip under the hero (matches live counters on smilengoassam.org)
export const siteStats = [
  { label: "Members", value: "0" },
  { label: "Projects", value: "2" },
  { label: "Events", value: "2" },
  { label: "Volunteers", value: "0" },
];

export const assistanceSteps = {
  title: "If you need assistance",
  intro: "For individuals and families facing hardship or an emergency.",
  ctaLabel: "Apply for Aid",
  ctaHref: "/contact",
  steps: [
    { title: "Apply online", body: "Fill a short assistance form and attach supporting documents." },
    { title: "We review your request", body: "Our team verifies each request fairly and in confidence." },
    { title: "Aid is provided", body: "Approved assistance is disbursed directly to those in need." },
  ],
};

export const contributeSteps = {
  title: "If you wish to contribute",
  intro: "Every contribution goes wholly towards relief and welfare.",
  ctaLabel: "Donate Now",
  ctaHref: "/donate",
  steps: [
    { title: "Choose an amount", body: "Give securely by UPI, bank transfer or card." },
    { title: "Get your acknowledgement", body: "Receive an instant donation acknowledgement by email." },
    { title: "It reaches the people", body: "Your gift funds healthcare, education and relief." },
  ],
};

export const latestActivity = [
  {
    kind: "donation",
    tag: "Donation",
    title: "Flood Relief \u2014 Scan & Pay",
    body: "Support our Assam flood relief. Every contribution counts and reaches families directly.",
    ctaLabel: "Donate Now",
    ctaHref: "/donate",
    showQr: true,
  },
  {
    kind: "programme",
    tag: "Programme",
    title: "Winter Blanket Drive",
    body: "Distributing warm blankets to families across Kokrajhar this winter season.",
    ctaLabel: "Learn More",
    ctaHref: "/projects",
    showQr: false,
  },
];

export const founderMessage = {
  name: "Ariful Hassan Khan",
  role: "Founder & President",
  quote:
    "Welcome to SMILE NGO. Together, with transparency and dedication, we can build a stronger and more compassionate community for everyone. I invite you to join hands with us.",
};

export const aboutSummary = {
  since: "Serving our community since 2025",
  body: "SMILE NGO is a registered community organization serving Kokrajhar with dedication and transparency. Through our programmes in education, welfare and community development, we bring people together to create lasting positive change at the grassroots.",
};

export const objectives = [
  {
    title: "Social Welfare & Upliftment",
    body: "Work for the welfare, dignity and upliftment of underprivileged and marginalised sections of society.",
  },
  {
    title: "Education & Skill Development",
    body: "Promote literacy, education and vocational skills so families can build sustainable livelihoods.",
  },
  {
    title: "Health & Sanitation",
    body: "Organise health camps, awareness drives and sanitation programmes for underserved communities.",
  },
  {
    title: "Sustainable Development",
    body: "Implement projects that create lasting social, economic and environmental impact for beneficiaries.",
  },
];

export const financialYearImpact = {
  intro: "Year-on-year summary of our work across financial years (April\u2013March).",
  years: [
    {
      year: "FY 2025-26",
      stats: [
        { label: "Members Enrolled", value: "25" },
        { label: "Programmes Held", value: "4" },
        { label: "Families Reached", value: "60" },
      ],
    },
  ],
};

export const membershipInfo = {
  eyebrow: "Become a member",
  title: "Join Our Organization",
  body: "A chance to do something for the society, awaken your soul and feel great. Experience the joy and satisfaction of bringing a smile to others through our organization.",
  tiers: ["Executive / General Member", "Honorary Member", "Volunteer", "Advisor"],
  ctaLabel: "Register Now",
  ctaHref: "/volunteers/apply",
};

export const managementTeam = [
  { name: "Ariful Hassan Khan", role: "President" },
  { name: "Rubul Ahmed Sheikh", role: "General Secretary" },
  { name: "Treasurer", role: "Treasurer" },
  { name: "Executive Member", role: "Executive Member" },
];

export const testimonials = [
  {
    quote:
      "This organization brings our whole neighbourhood together. The transparency in every programme is truly rare.",
    name: "A Community Member",
    role: "Member",
  },
  {
    quote:
      "I joined for one event and stayed on. The dedication of the committee inspires everyone around them.",
    name: "A Volunteer",
    role: "Volunteer",
  },
  {
    quote:
      "Their work on the ground has touched so many families. Proud to be associated with such a sincere team.",
    name: "A Well-wisher",
    role: "Well-wisher",
  },
];

export const documentsChecklist = [
  "New Society Registration",
  "Registration Renewal / Annual Return",
  "Annual Audit of Accounts",
  "PAN Card (Society)",
  "12A Registration (Income-Tax Exemption)",
  "80G Registration (Donor Tax Benefit)",
  "NGO Darpan (NITI Aayog) ID",
  "CSR-1 Registration (Corporate CSR Funds)",
  "FCRA Registration (Foreign Funds)",
  "Income-Tax Return (ITR-7)",
  "GST Registration",
];

export const projects = [
  {
    slug: "community-welfare-programme",
    title: "Community Welfare Programme",
    category: "Welfare",
    status: "Ongoing",
    summary:
      "Ongoing support for families of our area through welfare initiatives and mutual aid.",
    location: "Kokrajhar, Assam",
    progress: 60,
    metric: "60 families reached",
    imageSrc: "/gallery/community/learning-lab.svg",
  },
  {
    slug: "digital-literacy-camp",
    title: "Digital Literacy Camp",
    category: "Education",
    status: "Planned",
    summary:
      "Basic computer and smartphone training for students and senior citizens.",
    location: "Kokrajhar, Assam",
    progress: 15,
    metric: "Enrolment opening soon",
    imageSrc: "/gallery/community/nutrition-camp.svg",
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
  { name: "Rubul Ahmed Sheikh", role: "General Secretary" },
  { name: "Ariful Hassan Khan", role: "President" },
  { name: "Hafizur Rahman Bhuyan", role: "Vice-President" },
  { name: "Habibar Rahman", role: "Assistant Secretary" },
];

export const reports = [
  { title: "Annual Impact Report 2025", meta: "Audited program and finance summary", fileName: "annual-impact-2025.pdf" },
  { title: "Quarterly Donation Ledger", meta: "Approved donation receipts and allocations", fileName: "donation-ledger-q2-2026.pdf" },
  { title: "Child Safety Policy", meta: "Safeguarding, consent and reporting standards", fileName: "child-safety-policy.pdf" },
];

export const blogPosts = [
  {
    slug: "community-programmes-underway",
    title: "Our community programmes are underway",
    excerpt:
      "From welfare drives to cultural celebrations, our programmes for this year are taking shape. Stay tuned for updates.",
    coverImage: "/blog/learning-labs.svg",
    date: "2026-08-03",
    published: true,
  },
  {
    slug: "welcome-to-our-new-website",
    title: "Welcome to our new website",
    excerpt:
      "We are delighted to launch the official website of SMILE NGO. Explore our work, events and ways to get involved.",
    coverImage: "/blog/learning-labs.svg",
    date: "2026-08-02",
    published: true,
  },
];

export const events = [
  {
    slug: "monthly-general-meeting",
    title: "Monthly General Meeting",
    excerpt:
      "All members are requested to attend the monthly general meeting. Agenda will be shared in advance.",
    image: "/events/health-camp.svg",
    date: "2026-08-13",
    time: "11:00 AM",
    location: "Community Hall",
    status: "Upcoming",
    published: true,
  },
  {
    slug: "community-service-drive",
    title: "Community Service Drive",
    excerpt: "A cleanliness and awareness drive \u2014 volunteers welcome!",
    image: "/events/health-camp.svg",
    date: "2026-08-24",
    time: "09:00 AM",
    location: "Local Area",
    status: "Upcoming",
    published: true,
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
