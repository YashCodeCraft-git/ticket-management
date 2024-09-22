const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket'); // Adjust path as necessary

// Validation function
const validateTicket = (ticket) => {
    const errors = [];
    if (!ticket.title || typeof ticket.title !== 'string') {
        errors.push('Title is required and must be a string.');
    }
    if (!ticket.description || typeof ticket.description !== 'string') {
        errors.push('Description is required and must be a string.');
    }
    if (!ticket.status || !['open', 'closed'].includes(ticket.status)) {
        errors.push('Status must be either "open" or "closed".');
    }
    return errors;
};

// Create a new ticket
router.post('/', async (req, res) => {
    const ticket = req.body;
    const validationErrors = validateTicket(ticket);
    
    if (validationErrors.length > 0) {
        return res.status(400).json({ message: validationErrors });
    }

    // Proceed to save the ticket to the database
    try {
        const newTicket = await Ticket.create(ticket);
        res.status(201).json(newTicket);
    } catch (error) {
        res.status(500).json({ message: 'Error creating ticket', error });
    }
});

// Update a ticket
router.put('/:id', async (req, res) => {
    const ticketId = req.params.id;
    const ticket = req.body;
    const validationErrors = validateTicket(ticket);
    
    if (validationErrors.length > 0) {
        return res.status(400).json({ message: validationErrors });
    }

    
    try {
        const updatedTicket = await Ticket.findByIdAndUpdate(ticketId, ticket, { new: true });
        if (!updatedTicket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }
        res.json(updatedTicket);
    } catch (error) {
        res.status(500).json({ message: 'Error updating ticket', error });
    }
});


module.exports = router;
