const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// MySQL Connection Setup
// Note: You need to have MySQL installed and a database created using database.sql
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Viji@323', // Change this to your MySQL password
    database: 'tourism_db'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL Database');
});

// --- API ENDPOINTS (The "Sample Backend Connect" Part) ---

// 1. Get all destinations
app.get('/api/destinations', (req, res) => {
    db.query('SELECT * FROM destinations', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// 2. Create a new booking (Create)
app.post('/api/bookings', (req, res) => {
    const { customer_name, email, destination_id } = req.body;
    const booking_date = new Date();
    const query = 'INSERT INTO bookings (customer_name, email, destination_id, booking_date) VALUES (?, ?, ?, ?)';

    db.query(query, [customer_name, email, destination_id, booking_date], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ message: 'Booking created', id: result.insertId });
    });
});

// 3. Get all bookings for Admin (Read)
app.get('/api/admin/bookings', (req, res) => {
    const query = `
        SELECT b.*, d.name as destination_name 
        FROM bookings b 
        JOIN destinations d ON b.destination_id = d.id
    `;
    db.query(query, (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// 4. Update booking status (Update)
app.put('/api/admin/bookings/:id', (req, res) => {
    const { status } = req.body;
    db.query('UPDATE bookings SET status = ? WHERE id = ?', [status, req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Status updated' });
    });
});

// 5. Delete a booking (Delete)
app.delete('/api/admin/bookings/:id', (req, res) => {
    db.query('DELETE FROM bookings WHERE id = ?', [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Booking deleted' });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

