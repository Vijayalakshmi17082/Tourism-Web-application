-- Database Schema for Tourism App
CREATE DATABASE IF NOT EXISTS tourism_db;
USE tourism_db;

-- Table for destinations
CREATE TABLE IF NOT EXISTS destinations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    description TEXT,
    hotels TEXT,
    itinerary TEXT,
    price INT,
    image_url VARCHAR(255)
);

-- Table for bookings/enquiries
CREATE TABLE IF NOT EXISTS bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    destination_id INT,
    booking_date DATE,
    status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (destination_id) REFERENCES destinations(id)
);

-- Insert Indian destinations with Hotels and Planning
INSERT INTO destinations (name, location, description, hotels, itinerary, price, image_url) VALUES
('Kashmir Paradise', 'Jammu & Kashmir', 'Experience the "Heaven on Earth" with Shikara rides.', 'The Khyber, Radisson Blu, Vivanta', 'Day 1: Srinagar, Day 2: Pahalgam, Day 3: Gulmarg', 45000, 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d'),
('Goa Beaches', 'Goa', 'Enjoy the vibrant nightlife and serene sun-kissed beaches.', 'Taj Exotica, W Goa, ITC Grand Goa', 'Day 1: North Goa, Day 2: South Goa, Day 3: Casino Night', 25000, 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2'),
('Varanasi Spiritual', 'Uttar Pradesh', 'Discover the ancient spiritual soul of India.', 'BrijRama Palace, Taj Ganges, Radisson', 'Day 1: Ganga Aarti, Day 2: Sarnath, Day 3: Temple Tour', 15000, 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc'),
('Kerala Backwaters', 'Kerala', 'Relax in luxury houseboats through the lush backwaters.', 'Kumarakom Lake Resort, Taj Malabar, Zuri', 'Day 1: Alleppey, Day 2: Munnar, Day 3: Thekkady', 35000, 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944'),
('Jaipur Royal', 'Rajasthan', 'Explore the Pink City and its magnificent palaces.', 'Rambagh Palace, Fairmont, ITC Rajputana', 'Day 1: Amber Fort, Day 2: Hawa Mahal, Day 3: City Palace', 28000, 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da');
