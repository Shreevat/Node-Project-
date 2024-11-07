const { get } = require("../routes/contactRoutes");
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel"); //importing the model
//description: get all contact
//route will be GET /api/contacts
//acesss define. public

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//description: Create contact
//route will be POST /api/contacts
//acesss define. public

const createContact = asyncHandler(async (req, res) => {
  console.log("the requested body is:", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
});

//description: Get contact by id
//route will be GET /api/contacts/:id
//acesss define. public

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("not found");
  }
  res.status(200).json(contact);
});

//description: Update contact by id
//route will be PUT /api/contacts/:id
//acesss define. public

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("not found");
  }

  // const updatedContact = await Contact.
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

//description: Delete contact by id
//route will be DELETE /api/contacts/:id
//acesss define. public

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
