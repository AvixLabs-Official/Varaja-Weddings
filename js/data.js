/**
 * THE KNOT - Master Data Store
 * Official Wedding Planning Suite, Vendor Directory, Checklist, Budget, and Registry Data
 */

const THEKNOT_DATA = {
  brand: {
    name: "the knot",
    tagline: "Free Online Wedding Planner, Vendors, Websites & Registry",
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
      desc: "Get personalized spending estimates across venues, photo, decor & catering.",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
      link: "#budget",
      actionText: "Calculate Budget"
    },
    {
      id: "portal-vendors",
      title: "Vendor Marketplace",
      desc: "Connect with 300,000+ top-rated local venues, photographers & planners.",
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
      link: "#vendors",
      actionText: "Find Local Vendors"
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
        { id: "c1", task: "Determine overall budget & estimated guest count", category: "Budget", completed: true },
        { id: "c2", task: "Explore & tour local wedding venues with availability", category: "Venue", completed: true },
        { id: "c3", task: "Take The Knot Style Quiz to define your wedding vision", category: "Style", completed: true },
        { id: "c4", task: "Hire your primary wedding planner or lead coordinator", category: "Planner", completed: true }
      ]
    },
    {
      timeframe: "8 - 6 Months Out",
      items: [
        { id: "c5", task: "Book lead wedding photographer, videographer & DJ", category: "Vendors", completed: false },
        { id: "c6", task: "Schedule wedding dress & suit fittings with bridal salon", category: "Attire", completed: false },
        { id: "c7", task: "Create your free wedding website on The Knot", category: "Website", completed: false },
        { id: "c8", task: "Set up your Newlywed Cash Fund & gift registry", category: "Registry", completed: false }
      ]
    },
    {
      timeframe: "5 - 3 Months Out",
      items: [
        { id: "c9", task: "Finalize floral decor, centerpieces & stage lighting", category: "Decor", completed: false },
        { id: "c10", task: "Attend catering tasting & select multi-course dinner menu", category: "Catering", completed: false },
        { id: "c11", task: "Order & mail your official wedding invitations", category: "Invitations", completed: false },
        { id: "c12", task: "Reserve hotel room blocks for out-of-town guests", category: "Travel", completed: false }
      ]
    },
    {
      timeframe: "2 - 1 Month Out",
      items: [
        { id: "c13", task: "Confirm final RSVPs & build seating chart arrangement", category: "RSVP", completed: false },
        { id: "c14", task: "Apply for marriage license & verify local paperwork", category: "Legal", completed: false },
        { id: "c15", task: "Distribute day-of timeline to all vendors & wedding party", category: "Day-Of", completed: false }
      ]
    }
  ],

  budgetCategories: [
    { name: "Reception Venue & Catering", percent: 45, desc: "Site fee, food, bar service, rentals, tax and tip." },
    { name: "Photography & Videography", percent: 12, desc: "Full-day coverage, albums, engagement shoot & video edits." },
    { name: "Flowers & Event Decor", percent: 10, desc: "Ceremony arch, bouquets, centerpieces, candles & linens." },
    { name: "Attire, Rings & Beauty", percent: 9, desc: "Wedding dress, tuxedo, wedding bands, hair & makeup." },
    { name: "Music, Band & DJ", percent: 8, desc: "Ceremony musicians, cocktail hour acoustic & reception DJ." },
    { name: "Wedding Planner / Coordinator", percent: 8, desc: "Full-service planner or day-of wedding coordinator." },
    { name: "Invitations & Paper Goods", percent: 4, desc: "Save-the-dates, invitations, thank-you cards & postage." },
    { name: "Transportation & Favors", percent: 4, desc: "Shuttles, getaway car, welcome bags & guest favors." }
  ],

  vendorCategories: [
    "All Vendors",
    "Reception Venues",
    "Photographers",
    "Catering",
    "Wedding Planners",
    "Florists & Decor",
    "DJs & Live Music"
  ],

  vendors: [
    {
      id: "v1",
      category: "Reception Venues",
      name: "The Glasshouse at Chelsea Piers",
      location: "New York, NY",
      rating: 4.9,
      reviews: 142,
      price: "$$$$",
      image: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=800&q=85",
      badge: "THE KNOT BEST OF WEDDINGS",
      desc: "Waterfront luxury venue with floor-to-ceiling glass windows overlooking the Hudson."
    },
    {
      id: "v2",
      category: "Reception Venues",
      name: "City Palace & Jagmandir Island",
      location: "Udaipur, Rajasthan",
      rating: 4.9,
      reviews: 98,
      price: "$$$$",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85",
      badge: "EXCLUSIVE PALACE",
      desc: "Historic island palace surrounded by Lake Pichola with private boat access."
    },
    {
      id: "v3",
      category: "Photographers",
      name: "Lumière Editorial Photography",
      location: "New York, NY • Worldwide",
      rating: 5.0,
      reviews: 186,
      price: "$$$",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=85",
      badge: "FEATURED IN THE KNOT MAG",
      desc: "Editorial fashion framing, candid wedding moments, and fine-art albums."
    },
    {
      id: "v4",
      category: "Catering",
      name: "Savory & Sage Culinary Arts",
      location: "Los Angeles, CA",
      rating: 4.8,
      reviews: 114,
      price: "$$$",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85",
      badge: "TOP CATERER",
      desc: "Farm-to-table multi-course tasting menus, custom cocktail bars, and dessert stations."
    },
    {
      id: "v5",
      category: "Florists & Decor",
      name: "Bloom & Wild Floral Studio",
      location: "Chicago, IL",
      rating: 4.9,
      reviews: 87,
      price: "$$$",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85",
      badge: "BEST DECORATOR",
      desc: "Bespoke floral arches, hanging greenery, candlelit centerpieces, and stage styling."
    },
    {
      id: "v6",
      category: "DJs & Live Music",
      name: "SoundWave Collective & Symphony",
      location: "Miami, FL",
      rating: 5.0,
      reviews: 130,
      price: "$$",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=85",
      badge: "LIVE ENSEMBLE",
      desc: "High-energy wedding DJs, brass horn sections, and live string quartets."
    }
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
      category: "Experience",
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
