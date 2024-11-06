//description: get all contact
//route will be GET /api/contacts
//acesss define. public

const { get } = require("../routes/contactRoutes");

const getContacts = (req, res) => {
  // res.send("Get all contacts");
  res.status(200).json({ message: "Get all contacts" });
};

//description: Create contact
//route will be POST /api/contacts
//acesss define. public

const createContact = (req, res) => {
  console.log("the requested body is:", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(201).json({ message: "Create contact" });
};

//description: Get contact by id
//route will be GET /api/contacts/:id
//acesss define. public

const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

//description: Update contact by id
//route will be PUT /api/contacts/:id
//acesss define. public

const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

//description: Delete contact by id
//route will be DELETE /api/contacts/:id
//acesss define. public

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
