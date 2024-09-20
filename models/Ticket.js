const mongoose = require('mongoose');

// Ticket Schema
const ticketSchema = new mongoose.Schema({
    title: { type: String, required: true },  // Ticket title
    description: { type: String, required: true },  // Ticket details
    status: { type: String, default: "open" },  // open, closed, in-progress
    createdAt: { type: Date, default: Date.now },  // Auto-set date
    updatedAt: { type: Date, default: Date.now },  // Auto-set date
});

module.exports = mongoose.model('Ticket', ticketSchema);

//This defines a ticket with title, description, status, and timestamps.