const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8090;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend files
app.use(express.static(path.join(__dirname, './')));

// In-Memory Storage for Consultation Enquiries
const enquiriesStore = [];

// API Endpoint for Event & Wedding Consultation Inquiry
app.post('/api/inquiry', (req, res) => {
  try {
    const { name, phone, email, date, location, eventType, budget, message } = req.body;

    if (!name || !phone || !email) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in your name, phone number, and email address.'
      });
    }

    const newEnquiry = {
      id: 'BRP-' + Date.now().toString(36).toUpperCase(),
      name,
      phone,
      email,
      date: date || 'TBD',
      location: location || 'TBD',
      eventType: eventType || 'Complete Event & Wedding Planning',
      budget: budget || 'Undisclosed',
      message: message || '',
      submittedAt: new Date().toISOString()
    };

    enquiriesStore.unshift(newEnquiry);
    console.log(`[BLUE ROSE PRODUCTION] New Consultation Request Received from ${name} (${email})`);

    return res.status(200).json({
      success: true,
      message: `Thank you, ${name}! Your consultation request has been received. Our luxury event concierge will contact you within 12 hours.`,
      enquiryId: newEnquiry.id
    });
  } catch (error) {
    console.error('Error processing inquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error processing request. Please try contacting via WhatsApp or phone.'
    });
  }
});

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✨ BLUE ROSE PRODUCTION Server running at http://localhost:${PORT}`);
});
