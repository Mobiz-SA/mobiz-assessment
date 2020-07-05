const express = require("express");
const app = express();
app.use(express.json());
const contacts = require("./contacts");

app.get("/", contacts.index);
app.get("/contacts", contacts.index);
app.get("/contacts/:id", contacts.get);
app.post("/contacts", contacts.add);
app.delete("/contacts/:id", contacts.delete);
app.patch("/contacts/:id", contacts.patch);

app.listen(3001, () => console.log(`server listening`));
