/**
 * BLUE ROSE PRODUCTION - Master Agency Data Store
 * Full-Service Luxury Wedding Planning & Event Management Company
 */

const BLUEROSE_DATA = {
  brand: {
    name: "BLUE ROSE PRODUCTION",
    shortName: "BLUE ROSE",
    tagline: "Bespoke Event Management & Luxury Weddings",
    supportEmail: "concierge@blueroseproduction.com",
    phone: "+91 98765 43210",
    whatsapp: "+91 98765 43210",
    address: "UB City, Vittal Mallya Road, Bengaluru & South Extension II, New Delhi, India"
  },

  agencyStats: {
    couples: "250+",
    googleRating: "4.9 ★",
    experienceYears: "10+",
    weddingsExecuted: "150+"
  },

  services: [
    {
      id: "s1",
      number: "01",
      title: "Full-Service Wedding & Gala Planning",
      subtitle: "End-to-End Creative Design & Production",
      desc: "Comprehensive management from visual concepting, budget allocation, vendor contract SLA audits, and day-of seamless execution.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--knot-coral)" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>`
    },
    {
      id: "s2",
      number: "02",
      title: "3D Floral Scenography & Production Design",
      subtitle: "Architectural Florals & Spatial Styling",
      desc: "Bespoke 3D spatial renders, custom mandap builds, Dutch white rose sculptures, crystal chandeliers, and ambient stage lighting.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--knot-coral)" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`
    },
    {
      id: "s3",
      number: "03",
      title: "Palace Venue Sourcing & VIP Privileges",
      subtitle: "Curated Heritage Estates & Private Islands",
      desc: "Direct access to India’s most coveted heritage palaces, private lake islands in Udaipur, and beachfront sanctuaries in Goa & Lake Como.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--knot-coral)" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`
    },
    {
      id: "s4",
      number: "04",
      title: "White-Glove Guest Hospitality & Concierge",
      subtitle: "Airport VIP Transfers & Hospitality Desk",
      desc: "Warm Indian hospitality managed with precision — luxury airport fleet transfers, custom rooming manifests, and 24/7 guest helpdesk.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--knot-coral)" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
    },
    {
      id: "s5",
      number: "05",
      title: "Royal Gastronomy & Silver Thali Tastings",
      subtitle: "Celebrity Chefs & Global Gourmet Counters",
      desc: "Curated Zamindari feasts served on solid silver thalis, live chaat counters, and international dessert bars managed by master chefs.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--knot-coral)" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`
    },
    {
      id: "s6",
      number: "06",
      title: "Destination Weddings & Flight Charters",
      subtitle: "Rajasthan Palaces to Beaches of Goa & Italy",
      desc: "Cross-border permits, inter-city luxury fleet coordination, air charter logistics, and specialized destination sourcing.",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--knot-coral)" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`
    }
  ],

  venues: [
    {
      id: "v1",
      name: "City Palace & Jagmandir Island",
      location: "Udaipur, Rajasthan",
      capacity: "300 – 800 Guests",
      image: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=800&q=85",
      badge: "EXCLUSIVE ACCESS"
    },
    {
      id: "v2",
      name: "Umaid Bhawan Palace",
      location: "Jodhpur, Rajasthan",
      capacity: "200 – 600 Guests",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85",
      badge: "HERITAGE LEGEND"
    },
    {
      id: "v3",
      name: "The St. Regis Goa Resort",
      location: "Cavelossim, Goa",
      capacity: "150 – 500 Guests",
      image: "https://images.unsplash.com/photo-1545232979-fbf422502396?auto=format&fit=crop&w=800&q=85",
      badge: "COASTAL RETREAT"
    },
    {
      id: "v4",
      name: "Taj Falaknuma Palace",
      location: "Hyderabad, Telangana",
      capacity: "100 – 400 Guests",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85",
      badge: "NIZAM RESIDENCE"
    }
  ],

  checklist: [
    {
      timeframe: "12 - 9 Months Out",
      items: [
        { id: "c1", task: "Determine overall budget scope & guest count with BLUE ROSE PRODUCTION", category: "Budget", completed: true },
        { id: "c2", task: "Reserve heritage palace or beachfront resort venue date", category: "Venue", completed: true },
        { id: "c3", task: "Select visual theme palette & 3D decor scenography vision", category: "Style", completed: true },
        { id: "c4", task: "Set up lead ceremony & multi-day Sangeet milestones", category: "Timeline", completed: true }
      ]
    },
    {
      timeframe: "8 - 6 Months Out",
      items: [
        { id: "c5", task: "Design custom couple wedding website & guest RSVP portal", category: "Website", completed: false },
        { id: "c6", task: "Schedule bridal couture fittings & celebrity makeup masterclass", category: "Attire", completed: false },
        { id: "c7", task: "Build Newlywed Cash Fund & luxury gift registry wishlist", category: "Registry", completed: false },
        { id: "c8", task: "Collect digital guest addresses & contact phone numbers", category: "Guests", completed: false }
      ]
    },
    {
      timeframe: "5 - 3 Months Out",
      items: [
        { id: "c9", task: "Finalize Dutch rose mandap scenography, chandeliers & stage rigs", category: "Decor", completed: false },
        { id: "c10", task: "Attend multi-course menu tasting with royal thali chefs", category: "Catering", completed: false },
        { id: "c11", task: "Send gold foil Save-the-Date invitations & room block links", category: "Paper", completed: false },
        { id: "c12", task: "Book airport VIP chauffeur fleet & hospitality concierge", category: "Logistics", completed: false }
      ]
    },
    {
      timeframe: "2 - 1 Month Out",
      items: [
        { id: "c13", task: "Confirm final RSVPs & finalize interactive seating chart", category: "RSVP", completed: false },
        { id: "c14", task: "Finalize brass urlis, welcome hampers, and heirloom keepsakes", category: "Favors", completed: false },
        { id: "c15", task: "Conduct final on-site dry run with 20+ BLUE ROSE leads", category: "Execution", completed: false }
      ]
    }
  ],

  budgetCategories: [
    { name: "Palace Venue & Royal Banquet", percent: 45, desc: "Palace rentals, silver thali dining, multi-course tastings, & bar services." },
    { name: "3D Floral Scenography & Lighting", percent: 18, desc: "Custom mandaps, Dutch white roses, crystal chandeliers, & stage builds." },
    { name: "Photography & 4K Cinema", percent: 12, desc: "4K drone video, fine-art leather albums, & same-day teasers." },
    { name: "Artist Bookings & Live Sangeet", percent: 10, desc: "Bollywood singers, Sufi troupes, Sitar maestri, & DMX DJ rigs." },
    { name: "Guest VIP Concierge & Chauffeurs", percent: 8, desc: "Airport luxury transfers, welcome hampers, & 24/7 helpdesk." },
    { name: "Stationery, Foil Paper & Favors", percent: 4, desc: "Gold foil invitations, rooming manifests, & heirloom brass favors." },
    { name: "Contingency & SLA Buffer", percent: 3, desc: "Weather backups, emergency floral reserves, & on-call staff." }
  ],

  guestList: [
    { id: "g1", name: "Ananya Roy", party: "Party of 2", rsvpStatus: "Attending", meal: "Zamindari Thali", table: "Table 1 - Royal Mandap" },
    { id: "g2", name: "Rohan Singhania", party: "Party of 4", rsvpStatus: "Attending", meal: "Gourmet Non-Veg", table: "Table 2 - Lake View" },
    { id: "g3", name: "Siddharth Malhotra", party: "Party of 2", rsvpStatus: "Attending", meal: "Jain Special", table: "Table 1 - Royal Mandap" },
    { id: "g4", name: "Kabir Kapoor", party: "Party of 2", rsvpStatus: "Pending", meal: "TBD", table: "Unassigned" },
    { id: "g5", name: "Devika Rathore", party: "Party of 3", rsvpStatus: "Attending", meal: "Zamindari Thali", table: "Table 3 - Courtyard" }
  ],

  testimonials: [
    {
      id: "t1",
      couple: "Ananya & Arjun Roy",
      event: "Kolkata • Heritage Rajbari Wedding",
      quote: "BLUE ROSE PRODUCTION made our wedding look like it belonged on the pages of Vogue. The coordination between our 450 guests, international artists, and venue staff was flawless!",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "t2",
      couple: "Meera & Rohan Singhania",
      event: "Udaipur • City Palace Celebration",
      quote: "Planning a destination palace wedding from London seemed daunting until we met the BLUE ROSE PRODUCTION team. They took care of boat charters to 3D decor setups with extreme perfection.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "t3",
      couple: "Aisha & Siddharth Malhotra",
      event: "Goa • St. Regis Beachfront",
      quote: "The aesthetic sensitivity BLUE ROSE PRODUCTION possesses is unmatched. The beach mandap design was breathtaking, and their guest hospitality team took personal care of our family.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    }
  ],

  realWeddings: [
    {
      id: "rw1",
      couple: "Ananya & Arjun",
      location: "Kolkata, India • Heritage Rajbari",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85",
      snippet: "A romantic 3-day royal Bengali celebration draped in 10,000 fresh tuberose strands and candlelit diyas."
    },
    {
      id: "rw2",
      couple: "Meera & Rohan",
      location: "Udaipur, Rajasthan • City Palace & Jagmandir",
      image: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=800&q=85",
      snippet: "A regal palace affair featuring private boat arrivals across Lake Pichola and a fireworks spectacle."
    },
    {
      id: "rw3",
      couple: "Aisha & Siddharth",
      location: "Goa, India • The St. Regis Resort",
      image: "https://images.unsplash.com/photo-1545232979-fbf422502396?auto=format&fit=crop&w=800&q=85",
      snippet: "A chic coastal celebration with pastel floral mandaps and sunset oceanfront vows."
    }
  ]
};
