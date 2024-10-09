// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// GET all contacts
router.get('/', contactController.getAllContacts);

// GET contact by ID
router.get('/:id', contactController.getContactById);

// POST add new contact
router.post('/', contactController.addContact);

// PUT update contact by ID
router.put('/:id', contactController.updateContact);

// DELETE remove contact by ID
router.delete('/:id', contactController.deleteContact);

// DELETE remove all contacts
router.delete('/', contactController.deleteAllContacts);

module.exports = router;

