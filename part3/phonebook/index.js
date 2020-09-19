const express = require("express");
const morgan  = require("morgan");
const app = express();

app.use(express.json());

app.use(morgan("tiny"));

let people = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];

app.get("/api/persons", (req, res) => {
  res.json(people);
});

app.get("/info", (req, res) => {
  res.send(`<p>phonebook has info for ${people.length} people</p>
  <p>${new Date()}</p>`);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = people.find((p) => p.id === id);
  if (!person) {
    res.status(400).end();
  }
  res.json(person);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  people = people.filter((p) => p.id !== id);
  res.status(204).end();
});

app.post("/api/persons",(req,res) => {
  const person = req.body;
  if(!person.name || !person.number){
    res.status(400).end();
  }
  
  person.id = Math.floor(Math.random() * 1000000);
  people = people.concat(person);
  res.status(201).end();
})



app.listen(3000);
