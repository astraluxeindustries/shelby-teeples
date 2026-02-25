import { Review, NavLink, ServiceItem } from './types';

export const BUSINESS_INFO = {
  name: "Shelby Teeples",
  title: "Mortgage Consultant",
  nmls: "1889596",
  company: "Intercap Lending",
  companyNmls: "715386",
  address: "619 S Bluff St Tower 2 Suite 1B, St. George, UT 84770",
  phone: "(425) 876-3025",
  email: "shelby@intercaplending.com",
  hours: "Open 24 hours",
  bio: `Shelby Teeples is a dedicated Mortgage Loan Officer known for her clear communication, strategic guidance, and client-first approach. Licensed across multiple states, she brings versatility and a broad understanding of today’s lending landscape, helping clients confidently navigate everything from Conventional and Jumbo loans to VA, Investment, and first-time homebuyer programs.

Shelby believes that education is the foundation of a successful mortgage experience. She takes time to walk clients through their options, explain the numbers in plain terms, and design financing strategies that align with both short-term needs and long-term goals. Whether working with a first-time buyer or a seasoned investor, her focus remains the same: clarity, transparency, and results.

Her approach blends professionalism with genuine care. Clients consistently appreciate her responsiveness, attention to detail, and commitment to making the process feel smooth and manageable from application to closing. Shelby aims for every borrower she works with to feel supported, empowered, and confident in their decision.

Outside of her professional life, Shelby is deeply rooted in family. She and her husband of 20 years are proud parents of four children. When she is not serving clients, she enjoys camping, hunting, fishing, CrossFit, and playing volleyball. That same energy and discipline she brings to her personal life carries into her work, where she approaches every transaction with focus and dedication.

For Shelby, mortgage lending is not simply about financing homes. It is about helping families create opportunity, stability, and a place to build their future."`,
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Local Resident",
    rating: 5,
    text: "She is very genuine and truly cared about my family.",
    source: "Google"
  },
  {
    id: 2,
    author: "Happy Homebuyer",
    rating: 5,
    text: "She went above and beyond in helping them get prepared to purchase a home!!!",
    source: "Google"
  },
  {
    id: 3,
    author: "Southern Utah Client",
    rating: 5,
    text: "Professional, knowledgeable, and always available to answer our questions. Highly recommended.",
    source: "Google"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Home Purchase Loans",
    description: "Guiding you through every step of buying your dream home with competitive rates and personalized support."
  },
  {
    title: "Refinancing",
    description: "Lower your monthly payments or access your home's equity with our tailored refinancing solutions."
  },
  {
    title: "Investment Property",
    description: "Strategic financing options for real estate investors looking to expand their portfolio in Southern Utah."
  },
  {
    title: "Construction Loans",
    description: "Building your custom home? We offer specialized financing to help you build from the ground up."
  }
];
