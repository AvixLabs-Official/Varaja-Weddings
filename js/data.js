/**
 * BLUE ROSE PRODUCTION - Realistic Agency Data Store
 * Established Wedding Planning & Event Management Studio
 */

const BLUEROSE_DATA = {
  brand: {
    name: "BLUE ROSE PRODUCTION",
    shortName: "BLUE ROSE",
    tagline: "Wedding Planning & Event Management",
    supportEmail: "hello@blueroseproduction.com",
    phone: "+91 98765 43210",
    whatsapp: "919876543210",
    address: "Bengaluru • New Delhi, India"
  },

  trust: {
    googleReviews: "250+ Google Reviews",
    strengths: ["Personalized Planning", "End-to-End Coordination"]
  },

  about: {
    title: "Thoughtful Planning for Life's Most Beautiful Moments",
    subtitle: "ABOUT BLUE ROSE PRODUCTION",
    description: "At BLUE ROSE PRODUCTION, we believe every wedding should be a true reflection of the couple's unique story. From conceptual design and venue selection to logistics management and day-of coordination, our experienced team works closely with you to ensure a stress-free, seamless wedding experience.",
    values: [
      {
        title: "Personalized Design",
        desc: "We craft bespoke themes, color palettes, and spatial decor tailored to your personal style and heritage."
      },
      {
        title: "Transparent Management",
        desc: "Clear timelines, honest budget guidance, and direct vendor coordination with zero hidden surprises."
      },
      {
        title: "Seamless Execution",
        desc: "Our dedicated on-site team handles every detail so you and your families can celebrate every moment."
      }
    ]
  },

  services: [
    {
      id: "s1",
      number: "01",
      title: "Full-Service Wedding Planning",
      subtitle: "End-to-End Conceptualization & Execution",
      desc: "Complete planning management covering timeline design, budget optimization, vendor sourcing, contract reviews, and flawless on-site coordination."
    },
    {
      id: "s2",
      number: "02",
      title: "Decor & Spatial Design",
      subtitle: "Floral Styling, Stage & Ambience",
      desc: "Creating captivating event visual themes — custom mandap styling, floral arrangements, ambient lighting, and bespoke seating layouts."
    },
    {
      id: "s3",
      number: "03",
      title: "Destination Weddings",
      subtitle: "Heritage Palaces & Coastal Resorts",
      desc: "Expert destination planning across Rajasthan heritage properties, Goa beachfronts, and international venues with complete travel logistics."
    },
    {
      id: "s4",
      number: "04",
      title: "Guest Hospitality & Logistics",
      subtitle: "Transfers, Accommodations & Concierge",
      desc: "Ensuring your guests feel cared for — airport transfers, room allocations, welcome hampers, and dedicated hospitality desks throughout the celebrations."
    }
  ],

  weddings: [
    {
      id: "w1",
      title: "Ananya & Arjun",
      location: "Heritage Rajbari, Kolkata",
      type: "3-Day Traditional & Contemporary Wedding",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85",
      snippet: "An intimate celebration blending traditional rituals with timeless floral design and candlelit evenings."
    },
    {
      id: "w2",
      title: "Meera & Rohan",
      location: "Lakeside Resort, Udaipur",
      type: "Destination Palace Wedding",
      image: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=800&q=85",
      snippet: "A vibrant multi-event destination wedding set against scenic lake views and heritage architecture."
    },
    {
      id: "w3",
      title: "Aisha & Siddharth",
      location: "Beachfront Estate, Goa",
      type: "Sunset Coastal Celebration",
      image: "https://images.unsplash.com/photo-1545232979-fbf422502396?auto=format&fit=crop&w=800&q=85",
      snippet: "A relaxed beachfront celebration featuring pastel Mandap florals, oceanfront vows, and a lively Sangeet."
    }
  ],

  gallery: [
    {
      caption: "Floral Mandap Design",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85"
    },
    {
      caption: "Sangeet Stage Lighting",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85"
    },
    {
      caption: "Tablescape & Dining Details",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=85"
    },
    {
      caption: "Heritage Reception Setup",
      image: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=800&q=85"
    }
  ],

  reviews: [
    {
      id: "r1",
      couple: "Ananya & Arjun Roy",
      event: "Kolkata Wedding",
      quote: "The BLUE ROSE team made our wedding planning completely effortless. Their attention to detail, calm presence, and beautiful decor execution surpassed our expectations.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "r2",
      couple: "Meera & Rohan Singhania",
      event: "Udaipur Destination Wedding",
      quote: "Managing a destination wedding for 300+ guests seemed overwhelming, but BLUE ROSE PRODUCTION handled every detail smoothly. Our families could truly enjoy the celebrations.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "r3",
      couple: "Aisha & Siddharth Malhotra",
      event: "Goa Beach Wedding",
      quote: "Their design sensibility is incredible. The floral setup on the beach looked magical, and their on-ground coordination team was super responsive throughout.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    }
  ]
};
