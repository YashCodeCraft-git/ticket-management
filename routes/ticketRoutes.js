const express = require('express');
const Ticket = require('../models/Ticket');
const router = express.Router();

// CREATE a new ticket
router.post('/', async (req, res) => {
    try {
        const ticket = new Ticket(req.body);  // Create ticket
        await ticket.save();  // Save to DB
        res.status(201).json(ticket);  // Send back created ticket
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET all tickets
router.get('/', async (req, res) => {
    const tickets = await Ticket.find();  // Get all tickets
    res.status(200).json(tickets);
});

// GET a ticket by ID
router.get('/:id', async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        res.status(200).json(ticket);
    } catch {
        res.status(404).json({ message: "Ticket not found" });
    }
});

// UPDATE a ticket by ID
router.put('/:id', async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(ticket);
    } catch {
        res.status(400).json({ message: "Failed to update" });
    }
});

// DELETE a ticket by ID
router.delete('/:id', async (req, res) => {
    await Ticket.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Ticket deleted" });
});

module.exports = router;


// This code creates CRUD routes:
// POST / for creating tickets.
// GET / for getting all tickets.
// GET /:id for getting a ticket by its ID.
// PUT /:id for updating a ticket.
// DELETE /:id for deleting a ticket.