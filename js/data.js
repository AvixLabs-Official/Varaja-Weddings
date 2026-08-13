/**
 * BLUE ROSE PRODUCTION - Master Data Store
 * Bespoke Online Wedding Planning Suite, Guest RSVP Manager, Budget Calculator & Luxury Registry
 */

const BLUEROSE_DATA = {
  brand: {
    name: "BLUE ROSE PRODUCTION",
    shortName: "BLUE ROSE",
    tagline: "Bespoke Online Wedding Planner, Couples Websites, RSVPs & Luxury Registry",
    supportEmail: "concierge@blueroseproduction.com",
    phone: "+91 98765 43210",
    address: "UB City, Vittal Mallya Road, Bengaluru & South Extension II, New Delhi, India"
  },

  planningPortals: [
    {
      id: "portal-checklist",
      title: "Interactive Checklist",
      desc: "Stay organized with your personalized step-by-step 12-month wedding countdown.",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>`,
      link: "#checklist",
      actionText: "Track Milestones"
    },
    {
      id: "portal-budget",
      title: "Budget Advisor",
      desc: "Get personalized spending estimates across palace venue, photography, decor & couture.",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
      link: "#budget",
      actionText: "Calculate Budget"
    },
    {
      id: "portal-guests",
      title: "Guests & RSVPs",
      desc: "Collect guest addresses, track RSVPs online, organize silver thali meals and seating.",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
      link: "#guests",
      actionText: "Manage Guest List"
    },
    {
      id: "portal-registry",
      title: "Registry & Cash Funds",
      desc: "Combine cash funds, Lake Como honeymoons, and heritage brass collectibles in one place.",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>`,
      link: "#registry",
      actionText: "Create Registry"
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

  registryItems: [
    {
      id: "r1",
      title: "Honeymoon Cash Fund in Lake Como",
      category: "Newlywed Cash Fund",
      price: "₹5,00,000 Goal",
      funded: "75% Funded",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "r2",
      title: "Villeroy & Boch 24-Piece Gold Dinnerware",
      category: "Tabletop Registry",
      price: "₹85,000",
      funded: "1 Gifted",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "r3",
      title: "Heritage Brass Urli & Candle Candelabras",
      category: "Decor Collectibles",
      price: "₹45,000",
      funded: "2 Gifted",
      image: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "r4",
      title: "Private Sunset Yacht Cruise in Goa",
      category: "Experience Gift",
      price: "₹65,000",
      funded: "4 Gifted",
      image: "https://images.unsplash.com/photo-1545232979-fbf422502396?auto=format&fit=crop&w=600&q=80"
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
