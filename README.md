# VARAJA — Luxury Wedding Planners & Royal Event Management

<p align="center">
  <img src="favicon.svg" width="90" alt="VARAJA Monogram Logo">
  <br>
  <b>Your Story. Beautifully Celebrated.</b>
  <br>
  <i>A high-end, editorial web application for India's premier luxury wedding planning & design studio.</i>
</p>

---

## 💎 Project Overview

**VARAJA** is a client showcase and high-conversion web application designed for a luxury wedding planning and event management agency in India. The design embraces a high-fashion, editorial visual language — featuring generous whitespace, warm ivory (`#FAF8F5`) and champagne (`#F4EFE6`) palettes, obsidian surfaces, and subtle muted gold accents (`#C5A059`).

---

## ✨ Key Features & Architecture

1. **Sticky Glassmorphic Navigation**:
   - Fixed header with brand monogram logo, navigation links, and auto-hide drawer logic when the mobile navigation overlay or case-study modal opens.

2. **Full-Screen Cinematic Hero Section**:
   - High-resolution cinematic Indian wedding background visual, gradient overlay, and subtle animated scroll indicator.

3. **Animated Trust Counters**:
   - Understated animated counters showcasing **250+ Happy Couples**, **4.9 ★ Google Rating**, **10+ Years of Experience**, and **150+ Royal Weddings**.

4. **Editorial About & Philosophy**:
   - Two-column editorial story framing custom wedding planning, spatial design, floral scenography, and white-glove hospitality.

5. **Curated Services Grid**:
   - 8 bespoke service cards covering Complete Wedding Planning, Wedding Decor & Styling, Venue & Vendor Management, Photography & Videography, Bridal & Groom Styling, Guest Concierge, Destination Weddings, and Corporate Galas.

6. **Interactive Case Studies Portfolio ("Celebrations We've Crafted")**:
   - Asymmetrical editorial gallery layout featuring real Indian wedding projects (*Ananya & Arjun* - Bengali Wedding in Kolkata; *Rohan & Meera* - Royal Marwari Palace in Udaipur; *Siddharth & Aisha* - Oceanfront in Goa; *Kabir & Rhea* - Grand Punjabi Anand Karaj in Jaipur, etc.).
   - Clicking any project opens an interactive detailed case-study modal page with photo gallery, story, highlights, and client testimonial.

7. **Immersive Featured Wedding Showcase**:
   - Dedicated showcase section for *The Wedding of Ananya & Arjun* with photography collage, behind-the-scenes narrative, and venue stats.

8. **Why Choose Us Section**:
   - 6 advantages highlighting Personalized Planning, Attention to Detail, Elite Vendor Network, Seamless Day-of Execution, Transparent Communication, and Stress-Free Experience.

9. **Testimonials Carousel**:
   - Interactive slider carousel with 5-star ratings, realistic client quotes, avatars, and wedding locations.

10. **Google Reviews Trust Banner**:
    - Highlighting 4.9 / 5 rating and 250+ verified Google reviews with direct CTA.

11. **Filterable Photo Gallery & Lightbox Modal**:
    - Filter tabs (`All`, `Weddings`, `Decor`, `Haldi`, `Reception`, `Corporate`) and full-screen image lightbox modal view.

12. **4-Step Planning Process Timeline**:
    - `01 Let's Talk` → `02 Plan` → `03 Design` → `04 Celebrate`.

13. **Consultation Enquiry Form & API Backend**:
    - Form fields for Name, Phone, Email, Date, Location, Service Type, Budget Range, and Message.
    - Node.js Express backend serving `/api/inquiry` route with live validation and success alert.

14. **Persistent Floating WhatsApp CTA**:
    - Floating glass badge with live green pulse dot for instant concierge chat on mobile and desktop.

15. **Mobile Bottom Navigation Dock**:
    - Mobile-first bottom action bar for instant 1-tap navigation on smartphones.

---

## 🛠️ Technology Stack

- **Frontend**: HTML5, Vanilla CSS3 (Custom Luxury Editorial System), ES6+ JavaScript.
- **Typography**: `Cormorant Garamond` / `Playfair Display` (Serif Display) paired with `Inter` (Sans-Serif).
- **Backend Server**: Node.js & Express (`server.js`) on Port `8090`.
- **Responsive System**: Mobile-first design supporting 4K desktop down to 250px mobile screens.

---

## 🚀 Local Development Setup

```bash
# 1. Clone repository
git clone https://github.com/AvixLabs-Official/Varaja-Weddings.git
cd Varaja-Weddings

# 2. Install dependencies
npm install

# 3. Start local development server
npm start
```

Open your browser and navigate to `http://localhost:8090/`.

---

## 📜 License & Copyright

© 2026 VARAJA Luxury Weddings & Events. All Rights Reserved.
