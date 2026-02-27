// Mock Data for demonstration (In production, these come from MySQL)
const destinations = [
    // North India Special
    {
        id: 1, category: 'North India', name: 'Ladakh Eco-Reserves', location: 'Ladakh', price: 52000,
        ecoFeature: '100% Plastic Free | Solar Powered Stays',
        planning: '4 Days: Leh, Nubra Valley, Pangong Tso, Eco-Village Stay',
        subPlaces: ['Thiksey Monastery', 'Magnetic Hill', 'Zanskar River', 'Hunder Dunes'],
        image: 'https://images.unsplash.com/photo-1581791538302-03537b9c97bf?auto=format&fit=crop&w=800'
    },
    {
        id: 2, category: 'North India', name: 'Rishikesh Yoga Retreat', location: 'Uttarakhand', price: 18000,
        ecoFeature: 'Zero-Waste Kitchen | Organic Farms',
        planning: '3 Days: Ganga Aarti, Rafting, Meditation, Ashram Tour',
        subPlaces: ['Laxman Jhula', 'Beatles Ashram', 'Neer Garh Waterfall', 'Triveni Ghat'],
        image: 'https://images.unsplash.com/photo-1598977123418-4545550ad41b?auto=format&fit=crop&w=800'
    },
    // South India Special
    {
        id: 3, category: 'South India', name: 'Munnar Tea Estates', location: 'Kerala', price: 32000,
        ecoFeature: 'Carbon Neutral Transport | Spice Garden Tours',
        planning: '3 Days: Tea Garden Trek, Eravikulam, Lake Safari, Spice Walk',
        subPlaces: ['Mattupetty Dam', 'Tea Museum', 'Anamudi Peak', 'Echo Point'],
        image: 'https://images.unsplash.com/photo-1549410141-860f71907cb5?auto=format&fit=crop&w=800'
    },
    {
        id: 4, category: 'South India', name: 'Hampi Heritage Trail', location: 'Karnataka', price: 22000,
        ecoFeature: 'Heritage Preservation Focus | Cycle-only Zones',
        planning: '3 Days: Virupaksha Temple, Vitthala Ruins, Coracle Ride, Sunset Point',
        subPlaces: ['Stone Chariot', 'Lotus Mahal', 'Matanga Hill', 'Tungabhadra River'],
        image: 'https://images.unsplash.com/photo-1589133400589-9e7943f11469?auto=format&fit=crop&w=800'
    },
    {
        id: 5, category: 'South India', name: 'Ooty Bio-Reserve', location: 'Tamil Nadu', price: 28000,
        ecoFeature: 'Botanical Conservation | No-Motor Zones',
        planning: '3 Days: Botanical Garden, Nilgiri Train, Lake Boating, Pykara Falls',
        subPlaces: ['Doddabetta Peak', 'Rose Garden', 'Avalanche Lake', 'Mudumalai'],
        image: 'https://images.unsplash.com/photo-1590623192225-acc966216dd5?auto=format&fit=crop&w=800'
    }
];

let bookings = [
    { id: 101, customer: 'Alice Johnson', destination: 'Bali Bliss', status: 'confirmed', date: '2024-03-24' },
    { id: 102, customer: 'Bob Smith', destination: 'Swiss Alps', status: 'pending', date: '2024-03-25' }
];

// Initialize Home Page
function initHome() {
    const grid = document.getElementById('destinations-grid');
    if (!grid) return;

    grid.innerHTML = destinations.map(dest => `
        <div class="card" onclick="location.href='details.html?id=${dest.id}'" style="cursor: pointer;">
            <div style="position: absolute; top: 20px; right: 20px; background: var(--secondary); color: white; padding: 0.4rem 1rem; border-radius: 50px; font-size: 0.75rem; font-weight: 700; z-index: 5;">
                ${dest.category}
            </div>
            <img src="${dest.image}" alt="${dest.name}">
            <h3>${dest.name}</h3>
            <p style="color: var(--text-dim); margin-bottom: 1rem; font-size: 0.9rem;">📍 ${dest.location}</p>
            
            <div style="background: rgba(45, 212, 192, 0.1); padding: 0.8rem; border-radius: 12px; margin-bottom: 1.5rem; border: 1px dashed var(--primary);">
                <p style="font-size: 0.8rem; color: var(--primary); font-weight: 600;">🌿 Eco: ${dest.ecoFeature}</p>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 1rem;">
                <div>
                    <span style="font-size: 0.75rem; color: var(--text-dim); display: block;">Plan Price</span>
                    <span class="price">₹${dest.price.toLocaleString('en-IN')}</span>
                </div>
                <span class="btn btn-primary" style="padding: 0.6rem 1.2rem; font-size: 0.85rem; border-radius: 100px;">Explore</span>
            </div>
        </div>
    `).join('');
}

// Render Details Page
function renderDetails(id) {
    const container = document.getElementById('details-view');
    if (!container) return;

    const dest = destinations.find(d => d.id == id);
    if (!dest) {
        container.innerHTML = '<h1>Destination not found</h1>';
        return;
    }

    container.innerHTML = `
        <div class="details-hero" style="background-image: url('${dest.image}')">
            <div class="hero-content">
                <span style="color: var(--primary); text-transform: uppercase; letter-spacing: 3px; font-weight: 600;">Full Adventure Guide</span>
                <h1 style="font-size: clamp(2.5rem, 6vw, 4rem); margin-top: 0.5rem;">${dest.name}</h1>
                <p style="color: #cbd5e1; font-size: 1.2rem;">${dest.location} • Explore the beauty of incredible India</p>
            </div>
        </div>

        <div class="info-grid">
            <div class="main-info">
                <section style="margin-bottom: 4rem;">
                    <h2 style="margin-bottom: 2rem; font-size: 2.2rem;">Must Visit Places</h2>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                        ${dest.subPlaces.map(spot => `
                            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 20px; display: flex; align-items: center; gap: 1rem;">
                                <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--primary);"></div>
                                <span style="font-size: 1.1rem; font-weight: 600;">${spot}</span>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <h2 style="margin-bottom: 2rem; font-size: 2.2rem;">Planned Itinerary</h2>
                <div class="itinerary-card">
                    ${dest.planning.split(',').map((step, index) => `
                        <div class="day-item">
                            <div class="day-number">${index + 1}</div>
                            <div>
                                <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 0.5rem;">Phase ${index + 1}</h4>
                                <p style="color: #94a3b8; font-size: 1.1rem;">${step.trim()}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="sidebar">
                <div class="itinerary-card" style="border: 2px solid var(--primary); background: rgba(0,210,255,0.05); text-align: center; padding: 2.5rem;">
                    <span style="color: var(--text-dim); text-transform: uppercase; letter-spacing: 2px; font-size: 0.8rem;">Starting Budget</span>
                    <h2 style="font-size: 3rem; color: white; margin-top: 0.5rem;">₹${dest.price.toLocaleString('en-IN')}</h2>
                    <p style="color: var(--primary); font-size: 0.9rem; margin-top: 1rem;">Includes Travel, Entry & Guide</p>
                </div>

                <div class="itinerary-card">
                    <h3 style="margin-bottom: 1.5rem; display: flex; align-items: center; gap: 10px;">🏨 Stay Recommendations</h3>
                    <ul style="list-style: none; color: var(--text-dim);">
                        ${dest.hotels.split(',').map(h => `<li style="margin-bottom: 1rem; padding-left: 1.5rem; position: relative;">
                            <span style="position: absolute; left: 0; color: var(--primary);">✦</span>
                            ${h.trim()}
                        </li>`).join('')}
                    </ul>
                </div>

                <div class="booking-form" style="margin: 0; width: 100%; max-width: none;">
                    <h3 style="margin-bottom: 1.5rem;">Reserve Your Slot</h3>
                    <form id="detailEnquiry">
                        <input type="text" placeholder="Full Name" required>
                        <input type="email" placeholder="Email Address" required>
                        <select style="margin-bottom: 1.5rem;">
                            <option>March 2024</option>
                            <option>April 2024</option>
                            <option>May 2024</option>
                        </select>
                        <button class="btn btn-primary" style="width: 100%;">Contact Agent</button>
                    </form>
                </div>
            </div>
        </div>
    `;
}

// Handle Enquiry Submission
const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const destId = document.getElementById('destination_id').value;
        const destName = destinations.find(d => d.id == destId).name;

        // Simulate API call to backend
        const newBooking = {
            id: Math.floor(Math.random() * 1000),
            customer: name,
            destination: destName,
            status: 'pending',
            date: new Date().toISOString().split('T')[0]
        };

        bookings.push(newBooking);
        alert('Enquiry Sent Successfully! Admin will contact you soon.');
        enquiryForm.reset();
    });
}

// Render Admin Table (CRUD Simulation)
function renderAdminTable() {
    const tableBody = document.getElementById('bookings-table');
    const totalCount = document.getElementById('total-count');
    if (!tableBody) return;

    totalCount.innerText = bookings.length;
    tableBody.innerHTML = bookings.map(b => `
        <tr>
            <td>#${b.id}</td>
            <td>${b.customer}</td>
            <td>${b.destination}</td>
            <td><span class="status-badge status-${b.status}">${b.status}</span></td>
            <td>${b.date}</td>
            <td>
                <button onclick="updateStatus(${b.id})" class="btn" style="padding: 0.3rem 0.6rem; background: var(--secondary); color: white; font-size: 0.8rem;">Confirm</button>
                <button onclick="deleteBooking(${b.id})" class="btn" style="padding: 0.3rem 0.6rem; background: var(--accent); color: white; font-size: 0.8rem;">Delete</button>
            </td>
        </tr>
    `).join('');
}

// Update Status (Update)
function updateStatus(id) {
    const booking = bookings.find(b => b.id === id);
    if (booking) {
        booking.status = 'confirmed';
        renderAdminTable();
    }
}

// Delete Booking (Delete)
function deleteBooking(id) {
    if (confirm('Are you sure you want to delete this enquiry?')) {
        bookings = bookings.filter(b => b.id !== id);
        renderAdminTable();
    }
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
    initHome();
});
