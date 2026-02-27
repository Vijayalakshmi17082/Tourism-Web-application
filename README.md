# Tourism Management Portal

A premium, full-stack web application for digitalizing tourism services.

## Tech Stack
- **Frontend**: HTML5, CSS3 (Vanilla), JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Design**: Modern Glassmorphism, Responsive UI

## Features
- **Destination Explorer**: Interactive cards with pricing and locations.
- **Booking Management**: Quick enquiry form for users.
- **Admin Dashboard**: Secure panel for CRUD operations on bookings.
- **MySQL Persistence**: Real-time data handling.

## Setup Instructions

### 1. Database Setup
1. Open your MySQL client (like XAMPP's phpMyAdmin or MySQL Workbench).
2. Create a new database: `CREATE DATABASE tourism_db;`
3. Import or run the contents of `database.sql` to create the tables and sample data.

### 2. Backend Config
1. Navigate to `server/server.js`.
2. Update the `db` connection object with your MySQL credentials:
   ```javascript
   const db = mysql.createConnection({
       host: 'localhost',
       user: 'root',
       password: 'your_password_here',
       database: 'tourism_db'
   });
   ```

### 3. Run the Application
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Open your browser and go to `http://localhost:3000`.

## Project Structure
- `public/`: Frontend assets (HTML, CSS, JS).
- `server/`: Express server logic and API endpoints.
- `database.sql`: SQL schema for the project.
