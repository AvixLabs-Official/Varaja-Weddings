/**
 * THE KNOT - Master Data Store
 * Official Wedding Planning Suite: Checklist, Budget Advisor, Guest RSVP Manager, Registry & Cash Funds
 */

const THEKNOT_DATA = {
  brand: {
    name: "the knot",
    tagline: "Free Online Wedding Planner, Couples Websites, RSVPs & Registry",
    supportEmail: "help@theknot.com",
    phone: "1-800-THE-KNOT"
  },

  planningPortals: [
    {
      id: "portal-checklist",
      title: "Interactive Checklist",
      desc: "Stay organized with your personalized step-by-step 12-month wedding countdown.",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>`,
      link: "#checklist",
      actionText: "Track Your Tasks"
    },
    {
      id: "portal-budget",
      title: "Budget Advisor",
      desc: "Get personalized spending estimates across venue, photography, decor & attire.",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
      link: "#budget",
      actionText: "Calculate Budget"
    },
    {
      id: "portal-guests",
      title: "Guests & RSVPs",
      desc: "Collect addresses, track RSVPs online, organize meal preferences and seating.",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
      link: "#guests",
      actionText: "Manage Guest List"
    },
    {
      id: "portal-registry",
      title: "Registry & Cash Funds",
      desc: "Combine cash funds, honeymoon experiences, and retail items in one place.",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>`,
      link: "#registry",
      actionText: "Create Registry"
    }
  ],

  checklist: [
    {
      timeframe: "12 - 9 Months Out",
      items: [
        { id: "c1", task: "Determine overall budget & estimated guest count scope", category: "Budget", completed: true },
        { id: "c2", task: "Reserve your dream heritage palace or beachfront venue", category: "Venue", completed: true },
        { id: "c3", task: "Take The Knot Style Quiz to define your wedding vision", category: "Style", completed: true },
        { id: "c4", task: "Set up lead ceremony & reception timeline milestones", category: "Timeline", completed: true }
      ]
    },
    {
      timeframe: "8 - 6 Months Out",
      items: [
        { id: "c5", task: "Design custom couple wedding website & guest RSVP portal", category: "Website", completed: false },
        { id: "c6", task: "Schedule wedding dress & suit fittings with couture salons", category: "Attire", completed: false },
        { id: "c7", task: "Build Newlywed Cash Fund & luxury gift registry wishlist", category: "Registry", completed: false },
        { id: "c8", task: "Collect digital guest addresses & contact phone numbers", category: "Guests", completed: false }
      ]
    },
    {
      timeframe: "5 - 3 Months Out",
      items: [
        { id: "c9", task: "Finalize floral decor, stage lighting & table centerpieces", category: "Decor", completed: false },
        { id: "c10", task: "Select multi-course dining menu & signature cocktail list", category: "Catering", completed: false },
        { id: "c11", task: "Send gold foil Save-the-Date invitations & room block links", category: "Paper", completed: false },
        { id: "c12", task: "Book hotel room blocks for out-of-town guests", category: "Travel", completed: false }
      ]
    },
    {
      timeframe: "2 - 1 Month Out",
      items: [
        { id: "c13", task: "Confirm final RSVPs & finalize interactive seating chart", category: "RSVP", completed: false },
        { id: "c14", task: "Apply for marriage license & verify local paperwork", category: "Legal", completed: false },
        { id: "c15", task: "Conduct final on-site dry run of multi-day event timeline", category: "Execution", completed: false }
      ]
    }
  ],

  budgetCategories: [
    { name: "Reception Venue & Dining", percent: 45, desc: "Site rental, multi-course dining, bar service, tax & tip." },
    { name: "Photography & Cinematography", percent: 12, desc: "Full-day coverage, 4K drone video, albums & engagement session." },
    { name: "Florals & Stage Scenography", percent: 10, desc: "Mandaps, ceremony arches, centerpieces, candles & linens." },
    { name: "Couture Attire, Rings & Beauty", percent: 9, desc: "Bridal gowns, suits, wedding bands, hair & airbrush makeup." },
    { name: "Music, Bands & Sound Rigs", percent: 8, desc: "Ceremony acoustics, cocktail jazz quartet & reception DJ." },
    { name: "Planning & Day-Of Coordination", percent: 8, desc: "Lead event planner, timeline execution & logistics." },
    { name: "Stationery & Guest Favors", percent: 4, desc: "Invitations, digital website, guest hampers & thank-yous." },
    { name: "Guest VIP Fleet & Travel Shuttles", percent: 4, desc: "Airport transfers, luxury getaway cars & guest shuttles." }
  ],

  guestList: [
    { id: "g1", name: "Ananya Roy", party: "Party of 2", rsvpStatus: "Attending", meal: "Vegetarian Thali", table: "Table 1 - Royal Mandap" },
    { id: "g2", name: "Rohan Singhania", party: "Party of 4", rsvpStatus: "Attending", meal: "Non-Veg Gourmet", table: "Table 2 - Lake View" },
    { id: "g3", name: "Siddharth Malhotra", party: "Party of 2", rsvpStatus: "Attending", meal: "Vegan Special", table: "Table 1 - Royal Mandap" },
    { id: "g4", name: "Kabir Kapoor", party: "Party = 2", rsvpStatus: "Pending", meal: "TBD", table: "Unassigned" },
    { id: "g5", name: "Devika Rathore", party: "Party of 3", rsvpStatus: "Attending", meal: "Vegetarian Thali", table: "Table 3 - Courtyard" }
  ],

  registryItems: [
    {
      id: "r1",
      title: "Newlywed Honeymoon Cash Fund in Italy",
      category: "Cash Fund",
      price: "$2,500 Goal",
      funded: "75% Funded",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "r2",
      title: "KitchenAid Artisan Stand Mixer - Pistachio",
      category: "Kitchen & Home",
      price: "$449.99",
      funded: "1 Gifted",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "r3",
      title: "Villeroy & Boch 16-Piece Porcelain Set",
      category: "Tabletop & Dining",
      price: "$320.00",
      funded: "2 Gifted",
      image: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "r4",
      title: "Sunset Wine Tasting Experience in Tuscany",
      category: "Experience Gift",
      price: "$250.00",
      funded: "4 Gifted",
      image: "https://images.unsplash.com/photo-1545232979-fbf422502396?auto=format&fit=crop&w=600&q=80"
    }
  ],

  realWeddings: [
    {
      id: "rw1",
      couple: "Olivia & Ethan",
      location: "New York, NY • Glasshouse Chelsea",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85",
      snippet: "A chic modern black-tie wedding overlooking the Manhattan skyline with white orchids."
    },
    {
      id: "rw2",
      couple: "Ananya & Arjun",
      location: "Kolkata, India • Heritage Rajbari",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85",
      snippet: "A romantic 3-day royal Bengali celebration draped in 10,000 fresh tuberose strands."
    },
    {
      id: "rw3",
      couple: "Sophia & Liam",
      location: "Napa Valley, CA • Vineyard Estate",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85",
      snippet: "An outdoor sunset vineyard ceremony with rustic wooden tables and acoustic violin."
    }
  ]
};
