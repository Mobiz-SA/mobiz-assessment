const fs = require('fs')
const express = require('express')
const app = express()

const contacts = JSON.parse(fs.readFileSync('./contacts.json', 'utf8'))

app.get('/', (req, res) => res.send(contacts))

app.listen(3000, () => console.log(`server listening`))
