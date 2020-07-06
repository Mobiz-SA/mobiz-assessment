const { v4: uuid } = require("uuid");
const _ = require("lodash");
const fs = require("fs");
const contacts = JSON.parse(fs.readFileSync("./contacts.json", "utf8"));

exports.index = function (req, res) {
  res.status(200).json(contacts);
};

exports.add = function (req, res) {
  contact = req.body.contact;
  if (
    !contact ||
    !contact.firstName ||
    !contact.lastName ||
    !contact.cellphone
  ) {
    res.status(400).json(contact);
    return;
  }
  contact.id = uuid();
  contacts.push(contact);
  res.status(201).json(contact);
};

exports.get = function (req, res) {
  const contact = _.find(contacts, ["id", req.params.id]);
  if (contact) res.status(200).json(contact);
  else res.status(404).json({ error: "Cannot find contact" });
};

exports.delete = function (req, res) {
  const result = _.remove(contacts, (contact) => {
    return contact.id == req.params.id;
  });
  if (!result || result.length == 0)
    res.status(404).json({ error: "Cannot find contact" });
  else res.status(204).json();
};

exports.patch = function (req, res) {
  const contact = _.find(contacts, ["id", req.params.id]);
  if (contact && req.body.contact) {
    contact.firstName = req.body.contact.firstName;
    contact.lastName = req.body.contact.lastName;
    contact.cellphone = req.body.contact.cellphone;
    res.status(200).json(contact);
  } else res.status(404).json({ error: "Cannot find contact" });
};
