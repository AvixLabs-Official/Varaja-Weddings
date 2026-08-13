/**
 * VARAJA LUXURY WEDDINGS & EVENTS - Data Store
 */

const VARAJA_DATA = {
  brand: {
    name: "VARAJA",
    tagline: "Luxury Weddings & Royal Event Management",
    location: "India • Worldwide Destination Weddings",
    phone: "+91 98765 43210",
    whatsapp: "+91 98765 43210",
    email: "concierge@varajaweddings.com",
    address: "UB City, Vittal Mallya Road, Bengaluru & South Extension II, New Delhi, India",
    stats: {
      couples: 250,
      googleRating: 4.9,
      reviewsCount: 250,
      experienceYears: 10,
      weddingsCompleted: 150
    }
  },

  services: [
    {
      id: "complete-planning",
      title: "Complete Wedding Planning",
      subtitle: "End-to-End Curation & Execution",
      description: "Comprehensive management from visual concepting, venue sourcing, budget allocation, and vendor selection to day-of seamless execution.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
      features: [
        "Full Budget Management & Contract Negotiation",
        "Comprehensive Timeline & Run-of-Show Schedules",
        "Exclusive Artist & Entertainment Curation",
        "On-site Concierge Team of 15+ Specialists"
      ]
    },
    {
      id: "decor-styling",
      title: "Wedding Decor & Styling",
      subtitle: "Architectural Florals & Scenography",
      description: "Bespoke production design, bespoke mandap scenography, floral installations, ambient lighting, and editorial tabletop styling.",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
      features: [
        "Bespoke 3D Decor Renderings & Spatial Layouts",
        "Exotic Floral Sourcing & Master Sculpting",
        "Custom Furniture, Drapery & Architectural Lighting",
        "Theme Conceptualization across Multi-Day Events"
      ]
    },
    {
      id: "venue-vendor",
      title: "Venue & Vendor Management",
      subtitle: "Curated Palaces, Forts & Elite Artisans",
      description: "Direct access to India’s most coveted heritage palaces, luxury beachfront resorts, celebrated caterers, and renowned artisans.",
      image: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=85",
      features: [
        "Private Access to Royal Palaces & Private Estates",
        "Contract Negotiation & Logistics Audit",
        "Celebrity Chef & Gastronomy Menu Curation",
        "Technical Production & Stage Sound Management"
      ]
    },
    {
      id: "photography-video",
      title: "Photography & Videography",
      subtitle: "Cinematic Storytelling & Editorial Portraits",
      description: "Partnering with award-winning wedding cinematographers and editorial fashion photographers to capture every emotion in high art.",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
      features: [
        "4K Drone Cinematography & Same-Day Edit Teasers",
        "Editorial Couples Portraits & High Fashion Framing",
        "Fine-Art Printed Leather Bound Albums",
        "Private Client Cloud Archive Access"
      ]
    },
    {
      id: "bridal-groom",
      title: "Bridal & Groom Styling",
      subtitle: "Couture Selection & Trousseau Curation",
      description: "Personal styling consultations with India’s leading couturiers, makeup masterclasses, hair trial management, and trousseau packaging.",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
      features: [
        "VIP Access to Top Indian Fashion Houses",
        "Celebrity Makeup Artist & Hair Master Bookings",
        "Jewelry Curation & Heirloom Security",
        "On-Call Wardrobe Stylist & Draping Masters"
      ]
    },
    {
      id: "guest-concierge",
      title: "Guest Concierge & Hospitality",
      subtitle: "White-Glove Airport Arrivals & Logistics",
      description: "Warm Indian hospitality managed with military precision — luxury fleet transfers, personalized welcome hampers, and 24/7 guest helpdesk.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
      features: [
        "Airport VIP Meet & Greet with Chauffeur Fleet",
        "Custom Mobile Guest App & Rooming Manifests",
        "Personalized Welcome Gift Hampers & Keepsakes",
        "24/7 Guest Relations Desk at Host Hotels"
      ]
    },
    {
      id: "destination-weddings",
      title: "Destination Weddings",
      subtitle: "Palaces in Rajasthan to Beaches of Goa & Bali",
      description: "Specialized logistics and cultural planning for destination celebrations in Rajasthan, Goa, Kerala, Italy, Thailand, and Dubai.",
      image: "https://images.unsplash.com/photo-1545232979-fbf422502396?auto=format&fit=crop&w=1200&q=85",
      features: [
        "Flight Charters & Inter-City Fleet Coordination",
        "Cross-Border Customs & Permission Clearances",
        "Destination Scouting & Climate Contingency Plans",
        "Global Sourcing for Specialized Ingredients & Artists"
      ]
    },
    {
      id: "corporate-social",
      title: "Corporate & Social Galas",
      subtitle: "Anniversaries, Milestones & High-Net Events",
      description: "High-octane anniversary galas, milestone birthdays, corporate summits, and private luxury dinners designed with sophisticated grandeur.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
      features: [
        "Curated High-Profile Guest Security & Protocol",
        "Custom Multi-Course Culinary Tasting Menus",
        "Immersive Visual Projection Mapping & Lighting",
        "Exclusive Musical Acts & Symphony Performances"
      ]
    }
  ],

  projects: [
    {
      id: "ananya-arjun",
      title: "Ananya & Arjun",
      subtitle: "An Elegant Bengali Wedding",
      location: "Kolkata, West Bengal",
      eventType: "Traditional Bengali Heritage Wedding",
      date: "February 2026",
      guestCount: "450 Guests",
      venue: "Taj Bengal & Heritage Rajbari, Kolkata",
      coverImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85"
      ],
      story: "Set amidst the architectural grandeur of a 150-year-old Rajbari in Kolkata, Ananya & Arjun's celebration was a poetic tribute to classic Bengali heritage. VARAJA orchestrated a 3-day royal affair featuring fragrant marigold mandaps, traditional Shehnai recitals, authentic Zamindari cuisine curated by celebrity chefs, and a candlelit lakeside reception.",
      highlights: [
        "Custom Rajbari restoration with 10,000+ tuberose blooms",
        "Authentic 9-course Royal Bengali feast served on silver thalis",
        "Live Sitar & Shehnai ensemble by classical maestros",
        "Seamless management of 450 VIP guests with zero delays"
      ],
      testimonialQuote: "VARAJA brought our dream royal Bengali wedding to life with unmatched grace and perfection. Every detail was extraordinary!"
    },
    {
      id: "rohan-meera",
      title: "Rohan & Meera",
      subtitle: "Royal Marwari Palace Wedding",
      location: "Udaipur, Rajasthan",
      eventType: "Royal Destination Palace Wedding",
      date: "January 2026",
      guestCount: "350 Guests",
      venue: "City Palace & Jagmandir Island, Udaipur",
      coverImage: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85"
      ],
      story: "A regal multi-day celebration in the City of Lakes. Guests arrived via illuminated royal boats to Lake Pichola for a magical Sangeet night followed by a sunset wedding ceremony framed by ancient Mewar architecture and a fireworks spectacle over the water.",
      highlights: [
        "Private boat charter across Lake Pichola for 350 guests",
        "Custom floating mandap built with Dutch white roses & gold mirror work",
        "Performance by Bollywood playback singers & Sufi troupes",
        "Full royal procession with decorated elephants & vintage cars"
      ],
      testimonialQuote: "Our guests are still talking about how magical Udaipur felt under VARAJA’s leadership. Pure perfection!"
    },
    {
      id: "sid-aisha",
      title: "Siddharth & Aisha",
      subtitle: "Sunset Oceanfront Beach Wedding",
      location: "Goa, India",
      eventType: "Contemporary Luxury Beach Wedding",
      date: "November 2025",
      guestCount: "250 Guests",
      venue: "The St. Regis Goa Resort",
      coverImage: "https://images.unsplash.com/photo-1545232979-fbf422502396?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1545232979-fbf422502396?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85"
      ],
      story: "Combining chic coastal aesthetics with traditional Indian rituals, Siddharth & Aisha celebrated their union on the golden sands of Goa. Highlights included a tropical pastel Haldi party, a high-energy Poolside Sangeet, and an ethereal beachfront Pheras ceremony at dusk.",
      highlights: [
        "Pastel acrylic mandap positioned directly overlooking the Arabian Sea",
        "Curated Portuguese-Goan fusion food stations",
        "Sunset acoustic violin performance during ring exchange",
        "Eco-friendly floral installations with zero plastic waste"
      ],
      testimonialQuote: "The attention to design and guest hospitality made our Goa wedding completely stress-free for us and our families."
    },
    {
      id: "kabir-rhea",
      title: "Kabir & Rhea",
      subtitle: "Grand Punjabi Anand Karaj",
      location: "Jaipur, Rajasthan",
      eventType: "Royal Punjabi Wedding & Sangeet Gala",
      date: "December 2025",
      guestCount: "600 Guests",
      venue: "Fairmont Jaipur & Jai Mahal Palace",
      coverImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85"
      ],
      story: "A vibrant celebration of Punjabi culture amidst Rajasthan's palatial grandeur. Featuring a serene morning Anand Karaj in a custom floral Gurdwara setup, followed by a 1000-person Sangeet gala with concert-grade lighting and international performers.",
      highlights: [
        "Custom 360-degree concert stage for Sangeet night",
        "Serene morning Gurdwara structure created inside palace gardens",
        "Luxury gift hampers with custom brass keepsakes for every guest",
        "24-Hour live chaat counters and international dessert bar"
      ],
      testimonialQuote: "VARAJA executed a massive 600-guest wedding seamlessly. They handled everything with warmth and extreme professionalism!"
    },
    {
      id: "vikram-devika",
      title: "Vikram & Devika",
      subtitle: "Intimate Heritage Haveli Ceremony",
      location: "Jodhpur, Rajasthan",
      eventType: "Intimate Heritage Royal Wedding",
      date: "October 2025",
      guestCount: "180 Guests",
      venue: "RAAS Jodhpur & Umaid Bhawan Gardens",
      coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=85"
      ],
      story: "An intimate, deeply personal celebration for 180 close family and friends in the shadow of Mehrangarh Fort. Candlelit courtyards, handwoven silk textiles, and curated Rajasthani folk performances created an unforgettable atmosphere.",
      highlights: [
        "10,000 hand-lit wax diyas across historic stone courtyards",
        "Private acoustic performance by Manganiyar folk legends",
        "Custom heirloom brass favors crafted by local Jodhpur artisans",
        "Personalized butler service for every guest room"
      ],
      testimonialQuote: "Intimate, warm, and utterly magical. VARAJA turned our vision into an unforgettable memory."
    },
    {
      id: "aditya-pooja",
      title: "Aditya & Pooja",
      subtitle: "Royal South Indian Temple Wedding",
      location: "Mahabalipuram, Tamil Nadu",
      eventType: "Traditional Coastal South Indian Wedding",
      date: "March 2026",
      guestCount: "400 Guests",
      venue: "InterContinental Chennai Mahabalipuram Resort",
      coverImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85"
      ],
      story: "A sacred Muhurtham ceremony overlooking the ancient shore temple ruins. Adorned with fresh jasmine strands, banana leaf motifs, and traditional Nadaswaram melodies, transitioning into a modern evening reception under palm groves.",
      highlights: [
        "Handcrafted carved wooden temple mandap draped in Mogra & Kanchipuram silk",
        "Traditional Sadhya feast served on fresh banana leaves with 26 authentic delicacies",
        "Carnatic fusion band performance at sunset",
        "Bespoke silk saree & dhoti gifting concierge"
      ],
      testimonialQuote: "The reverence for our South Indian traditions coupled with modern luxury design was remarkable."
    }
  ],

  whyChooseUs: [
    {
      number: "01",
      title: "Personalized Planning",
      description: "No templates or cookie-cutter packages. Every detail, color palette, and experience is tailored specifically around your love story and heritage."
    },
    {
      number: "02",
      title: "Attention to Every Detail",
      description: "From custom monograms and guest room hampers to precision micro-timelines, we obsess over every touchpoint so nothing is left to chance."
    },
    {
      number: "03",
      title: "Trusted Vendor Network",
      description: "Direct partnerships with India's premier palatial venues, celebrity chefs, top couture stylists, and master floral architects."
    },
    {
      number: "04",
      title: "Seamless Execution",
      description: "Our on-site team of 20+ seasoned event managers, guest concierges, and technical directors execute your multi-day events with military precision."
    },
    {
      number: "05",
      title: "Transparent Communication",
      description: "Real-time budget tracking, live vendor dashboards, and clear contract audits ensure complete peace of mind with zero hidden surprises."
    },
    {
      number: "06",
      title: "Stress-Free Experience",
      description: "You and your family remain honored guests at your own wedding while VARAJA carries the entire operational and creative weight."
    }
  ],

  testimonials: [
    {
      id: "t1",
      coupleName: "Ananya & Arjun Roy",
      location: "Kolkata • Royal Rajbari Wedding",
      rating: 5,
      quote: "VARAJA made our wedding look like it belonged on the pages of Vogue. The coordination between our 450 guests, international artists, and venue staff was flawless. They handled every detail with extreme grace!",
      date: "February 2026",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "t2",
      coupleName: "Meera & Rohan Singhania",
      location: "Udaipur • City Palace Celebration",
      rating: 5,
      quote: "Planning a destination palace wedding from London seemed daunting until we met the VARAJA team. They took care of everything from boat charters to 3D decor setups. We could simply relax and enjoy our special days.",
      date: "January 2026",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "t3",
      coupleName: "Aisha & Siddharth Malhotra",
      location: "Goa • St. Regis Beachfront",
      rating: 5,
      quote: "The aesthetic sensitivity VARAJA possesses is unmatched. The beach mandap design was breathtaking, and their guest hospitality team took personal care of all our family members coming from across the world.",
      date: "November 2025",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "t4",
      coupleName: "Rhea & Kabir Kapoor",
      location: "Jaipur • Fairmont & Jai Mahal",
      rating: 5,
      quote: "Managing a 600-person Punjabi wedding requires high energy and razor-sharp organization. VARAJA delivered both in abundance! Our Sangeet night was the talk of the town.",
      date: "December 2025",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "t5",
      coupleName: "Devika & Vikram Rathore",
      location: "Jodhpur • Heritage Haveli",
      rating: 5,
      quote: "If you want a wedding that feels high-end, deeply personal, and completely stress-free, VARAJA is the only team to trust in India. Truly world-class event creators.",
      date: "October 2025",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    }
  ],

  galleryItems: [
    { id: "g1", category: "Weddings", title: "Royal Mandap at Lake Pichola", location: "Udaipur", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85" },
    { id: "g2", category: "Decor", title: "Dutch Floral & Gold Scenography", location: "Jaipur", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85" },
    { id: "g3", category: "Haldi", title: "Marigold & Pastel Sunken Haldi", location: "Goa", image: "https://images.unsplash.com/photo-1545232979-fbf422502396?auto=format&fit=crop&w=1200&q=85" },
    { id: "g4", category: "Reception", title: "Candlelit Rajbari Courtyard Dinner", location: "Kolkata", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85" },
    { id: "g5", category: "Weddings", title: "Traditional Bengali Wedding Rituals", location: "Kolkata", image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85" },
    { id: "g6", category: "Decor", title: "Glass Crystal Sangeet Stage Design", location: "Jaipur", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85" },
    { id: "g7", category: "Haldi", title: "Traditional Brass Urli Floral Haldi", location: "Udaipur", image: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=85" },
    { id: "g8", category: "Reception", title: "Oceanfront Starlight Banquet Table", location: "Goa", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85" },
    { id: "g9", category: "Corporate", title: "High-Net Luxury Brand Summit Gala", location: "Bengaluru", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85" }
  ],

  processSteps: [
    {
      step: "01",
      name: "Let's Talk",
      title: "Discovery & Vision Alignment",
      desc: "We begin with an in-depth consultation to understand your love story, aesthetic preferences, family traditions, guest headcount, and target budget."
    },
    {
      step: "02",
      name: "Plan",
      title: "Concept, Venues & Master Timeline",
      desc: "We present curated palace/resort options, negotiate venue contracts, build the financial master plan, and establish precision event timelines."
    },
    {
      step: "03",
      name: "Design",
      title: "Scenography & Production Design",
      desc: "Our design studio creates 3D visual renderings for mandaps, floral installations, menu tastings, artist bookings, and guest hospitality logistics."
    },
    {
      step: "04",
      name: "Celebrate",
      title: "Flawless Execution & Hospitality",
      desc: "Our 20+ member on-site production team manages logistics, artists, and guest concierge so you and your family can immerse in your celebration."
    }
  ]
};
