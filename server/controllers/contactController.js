// controllers/contactController.js
const Contact = require('../models/Contact');

// GET all contacts
exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET contact by ID
exports.getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (contact) {
            res.status(200).json(contact);
        } else {
            res.status(404).json({ message: 'Contact not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST add new contact
exports.addContact = async (req, res) => {
    const contact = new Contact({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
    });

    try {
        const savedContact = await contact.save();
        res.status(201).json(savedContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// PUT update contact by ID
exports.updateContact = async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedContact) {
            res.status(200).json(updatedContact);
        } else {
            res.status(404).json({ message: 'Contact not found' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// DELETE remove contact by ID
exports.deleteContact = async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        if (deletedContact) {
            res.status(200).json({ message: 'Contact deleted' });
        } else {
            res.status(404).json({ message: 'Contact not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// DELETE remove all contacts
exports.deleteAllContacts = async (req, res) => {
    try {
        await Contact.deleteMany();
        res.status(200).json({ message: 'All contacts deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

