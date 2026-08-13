/**
 * BLUE ROSE PRODUCTION - Master Data Store
 * Includes Categorized Services, Venues, FAQs, and Budget Estimator Data
 */

const VARAJA_DATA = {
  brand: {
    name: "BLUE ROSE PRODUCTION",
    shortName: "BLUE ROSE",
    tagline: "Bespoke Event Management & Luxury Weddings",
    location: "India • Worldwide Destination Events",
    phone: "+91 98765 43210",
    whatsapp: "+91 98765 43210",
    email: "concierge@blueroseproduction.com",
    address: "UB City, Vittal Mallya Road, Bengaluru & South Extension II, New Delhi, India",
    stats: {
      couples: 250,
      googleRating: 4.9,
      reviewsCount: 250,
      experienceYears: 10,
      weddingsCompleted: 150
    }
  },

  serviceCategories: [
    "All Offerings",
    "Royal Weddings",
    "Decor & Scenography",
    "Hospitality & Concierge",
    "Destination & Galas"
  ],

  services: [
    {
      id: "complete-planning",
      number: "01",
      category: "Royal Weddings",
      title: "Complete Wedding & Event Planning",
      subtitle: "End-to-End Creative Curation & Production",
      description: "Comprehensive management from visual concepting, venue sourcing, budget allocation, and vendor selection to day-of seamless execution.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
      features: [
        "Full Budget Management & Contract SLA Audit",
        "Master Multi-Day Timeline & Run-of-Show Schedules",
        "Exclusive Artist & Live Entertainment Curation",
        "On-site Concierge Lead Team of 20+ Specialists"
      ]
    },
    {
      id: "decor-styling",
      number: "02",
      category: "Decor & Scenography",
      title: "Event Decor & Floral Scenography",
      subtitle: "Architectural Florals & Spatial Styling",
      description: "Bespoke production design, custom stage & mandap scenography, floral sculptures, ambient lighting, and editorial styling.",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
      features: [
        "Bespoke 3D Decor Renderings & Spatial Layouts",
        "Exotic Dutch Floral Sourcing & Master Sculpting",
        "Custom Furniture, Drapery & Architectural Lighting",
        "Theme Conceptualization across Multi-Day Events"
      ]
    },
    {
      id: "venue-vendor",
      number: "03",
      category: "Royal Weddings",
      title: "Palace Venue & Vendor Management",
      subtitle: "Curated Heritage Palaces & Elite Artisans",
      description: "Direct access to India’s most coveted heritage palaces, luxury beachfront resorts, celebrated caterers, and renowned artisans.",
      image: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=85",
      features: [
        "Private Access to Royal Palaces & Estates",
        "Net Pricing Vendor Contract Audit",
        "Celebrity Chef & Custom Menu Tasting Curation",
        "Technical Stage, Sound & Lighting Management"
      ]
    },
    {
      id: "photography-video",
      number: "04",
      category: "Decor & Scenography",
      title: "Photography & Cinematography",
      subtitle: "Cinematic Storytelling & Editorial Framing",
      description: "Partnering with award-winning event cinematographers and editorial fashion photographers to capture every emotion in high art.",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
      features: [
        "4K Drone Cinematography & Same-Day Teasers",
        "Editorial Couples Portraits & High Fashion Framing",
        "Fine-Art Printed Italian Leather Bound Albums",
        "Private Client Cloud Media Archive Access"
      ]
    },
    {
      id: "guest-concierge",
      number: "05",
      category: "Hospitality & Concierge",
      title: "White-Glove Guest Concierge",
      subtitle: "Airport VIP Transfers & Hospitality Desk",
      description: "Warm Indian hospitality managed with military precision — luxury fleet transfers, personalized welcome hampers, and 24/7 guest helpdesk.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
      features: [
        "Airport VIP Meet & Greet with Chauffeur Fleet",
        "Custom Mobile Guest Portal & Rooming Manifests",
        "Personalized Welcome Gift Hampers & Keepsakes",
        "24/7 On-call Hospitality Desk at Host Hotels"
      ]
    },
    {
      id: "bridal-groom",
      number: "06",
      category: "Hospitality & Concierge",
      title: "Couture Styling & Trousseau",
      subtitle: "Bridal Wardrobe & Makeup Masterclass",
      description: "Personal styling consultations with India’s leading couturiers, makeup masterclasses, hair trial management, and trousseau packaging.",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
      features: [
        "VIP Access to Top Indian Fashion Houses",
        "Celebrity Makeup Artist Bookings",
        "Heirloom Jewelry Security & Logistics",
        "On-Call Wardrobe Stylist & Draping Masters"
      ]
    },
    {
      id: "destination-weddings",
      number: "07",
      category: "Destination & Galas",
      title: "Destination Weddings & Logistics",
      subtitle: "Rajasthan Palaces to Beaches of Goa & Italy",
      description: "Specialized logistics and cultural planning for destination celebrations in Rajasthan, Goa, Kerala, Italy, Thailand, and Dubai.",
      image: "https://images.unsplash.com/photo-1545232979-fbf422502396?auto=format&fit=crop&w=1200&q=85",
      features: [
        "Flight Charters & Inter-City Fleet Coordination",
        "Cross-Border Customs & Permission Clearances",
        "Destination Scouting & Weather Contingency Plans",
        "Global Sourcing for Specialized Ingredients & Artists"
      ]
    },
    {
      id: "corporate-social",
      number: "08",
      category: "Destination & Galas",
      title: "Corporate Galas & High-Net Events",
      subtitle: "Milestones, Summits & Private Galas",
      description: "High-octane anniversary galas, milestone birthdays, corporate summits, and private luxury dinners designed with sophisticated grandeur.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
      features: [
        "High-Profile VIP Guest Protocol & Security",
        "Custom Multi-Course Culinary Tasting Menus",
        "Immersive Visual Projection Mapping & Lighting",
        "Exclusive Symphony & Musical Performances"
      ]
    }
  ],

  venues: [
    {
      id: "v1",
      name: "City Palace & Jagmandir Island",
      location: "Udaipur, Rajasthan",
      type: "Royal Heritage Palace",
      capacity: "300 – 800 Guests",
      image: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=800&q=85",
      badge: "EXCLUSIVE ACCESS"
    },
    {
      id: "v2",
      name: "Umaid Bhawan Palace",
      location: "Jodhpur, Rajasthan",
      type: "Art Deco Royal Estate",
      capacity: "200 – 600 Guests",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85",
      badge: "HERITAGE LEGEND"
    },
    {
      id: "v3",
      name: "The St. Regis Goa Resort",
      location: "Cavelossim, Goa",
      type: "Oceanfront Luxury Resort",
      capacity: "150 – 500 Guests",
      image: "https://images.unsplash.com/photo-1545232979-fbf422502396?auto=format&fit=crop&w=800&q=85",
      badge: "COASTAL RETREAT"
    },
    {
      id: "v4",
      name: "Taj Falaknuma Palace",
      location: "Hyderabad, Telangana",
      type: "19th Century Nizam Residence",
      capacity: "100 – 400 Guests",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85",
      badge: "ROYAL PRIVILEGE"
    },
    {
      id: "v5",
      name: "Villa d'Este & Villa Balbiano",
      location: "Lake Como, Italy",
      type: "Italian Renaissance Villa",
      capacity: "80 – 250 Guests",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=85",
      badge: "GLOBAL DESTINATION"
    },
    {
      id: "v6",
      name: "Mandapa, A Ritz-Carlton Reserve",
      location: "Ubud, Bali",
      type: "Tropical Sanctuary & Riverfront",
      capacity: "100 – 350 Guests",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85",
      badge: "GLOBAL DESTINATION"
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
      story: "Set amidst the architectural grandeur of a 150-year-old Rajbari in Kolkata, Ananya & Arjun's celebration was a poetic tribute to classic Bengali heritage. BLUE ROSE PRODUCTION orchestrated a 3-day royal affair featuring fragrant marigold mandaps, traditional Shehnai recitals, authentic Zamindari cuisine curated by celebrity chefs, and a candlelit lakeside reception.",
      highlights: [
        "Custom Rajbari restoration with 10,000+ tuberose blooms",
        "Authentic 9-course Royal Bengali feast served on silver thalis",
        "Live Sitar & Shehnai ensemble by classical maestros",
        "Seamless management of 450 VIP guests with zero delays"
      ],
      testimonialQuote: "BLUE ROSE PRODUCTION brought our dream royal Bengali wedding to life with unmatched grace and perfection. Every detail was extraordinary!"
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
      testimonialQuote: "Our guests are still talking about how magical Udaipur felt under BLUE ROSE PRODUCTION’s leadership. Pure perfection!"
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
      testimonialQuote: "BLUE ROSE PRODUCTION executed a massive 600-guest wedding seamlessly. They handled everything with warmth and extreme professionalism!"
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
      testimonialQuote: "Intimate, warm, and utterly magical. BLUE ROSE PRODUCTION turned our vision into an unforgettable memory."
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

  faqs: [
    {
      q: "How far in advance should we book BLUE ROSE PRODUCTION?",
      a: "We recommend booking 6 to 12 months prior to your target event date, especially for multi-day destination weddings in Rajasthan or Goa where heritage palace bookings and celebrity artists require early reservation."
    },
    {
      q: "Do you manage international destination events outside India?",
      a: "Yes! We specialize in cross-border luxury events across Dubai, Lake Como (Italy), Bali (Indonesia), Thailand, and Sri Lanka, managing flight charters, international customs, and local venue logistics seamlessly."
    },
    {
      q: "What is your fee structure and budget management policy?",
      a: "We operate on a transparent fixed professional management fee structure calculated on scale and event scope. All vendor contracts are billed directly at net cost with zero hidden markups or surprise surcharges."
    },
    {
      q: "Can you work alongside our family’s preferred caterers or priest?",
      a: "Absolutely. We respect family traditions and heritage relationships. We collaborate seamlessly with your preferred vendors while auditing contract SLAs and managing on-site logistics."
    }
  ],

  testimonials: [
    {
      id: "t1",
      coupleName: "Ananya & Arjun Roy",
      location: "Kolkata • Royal Rajbari Wedding",
      rating: 5,
      quote: "BLUE ROSE PRODUCTION made our wedding look like it belonged on the pages of Vogue. The coordination between our 450 guests, international artists, and venue staff was flawless. They handled every detail with extreme grace!",
      date: "February 2026",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "t2",
      coupleName: "Meera & Rohan Singhania",
      location: "Udaipur • City Palace Celebration",
      rating: 5,
      quote: "Planning a destination palace wedding from London seemed daunting until we met the BLUE ROSE PRODUCTION team. They took care of everything from boat charters to 3D decor setups. We could simply relax and enjoy our special days.",
      date: "January 2026",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "t3",
      coupleName: "Aisha & Siddharth Malhotra",
      location: "Goa • St. Regis Beachfront",
      rating: 5,
      quote: "The aesthetic sensitivity BLUE ROSE PRODUCTION possesses is unmatched. The beach mandap design was breathtaking, and their guest hospitality team took personal care of all our family members coming from across the world.",
      date: "November 2025",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "t4",
      coupleName: "Rhea & Kabir Kapoor",
      location: "Jaipur • Fairmont & Jai Mahal",
      rating: 5,
      quote: "Managing a 600-person Punjabi wedding requires high energy and razor-sharp organization. BLUE ROSE PRODUCTION delivered both in abundance! Our Sangeet night was the talk of the town.",
      date: "December 2025",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "t5",
      coupleName: "Devika & Vikram Rathore",
      location: "Jodhpur • Heritage Haveli",
      rating: 5,
      quote: "If you want an event that feels high-end, deeply personal, and completely stress-free, BLUE ROSE PRODUCTION is the only team to trust in India. Truly world-class event creators.",
      date: "October 2025",
      avatar: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=200&q=80"
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
  ]
};
