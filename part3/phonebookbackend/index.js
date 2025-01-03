const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

let persons = [
  { id: "1", name: "Arto Hellas", number: "040-123456" },
  { id: "2", name: "Ada Lovelace", number: "39-44-5323523" },
  { id: "3", name: "Dan Abramov", number: "12-43-234345" },
  { id: "4", name: "Mary Poppendieck", number: "39-23-6423122" },
];

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Logging
morgan.token("body", (req) => JSON.stringify(req.body));
app.use(morgan("tiny"));

// Log response body middleware
const logResponseBody = (req, res, next) => {
  let oldSend = res.send;
  res.send = function (body) {
    console.log("Response Body:", body);
    oldSend.apply(res, arguments);
  };
  next();
};

// Utility functions
const generateId = () => {
  const maxId =
    persons.length > 0 ? Math.max(...persons.map((n) => Number(n.id))) : 0;
  return String(maxId + 1);
};

const personsNum = () => persons.length;

// Routes
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/info", (req, res) => {
  res.send(
    `Phonebook has info for ${personsNum()} people<br>${new Date()}`
  );
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  const person = persons.find((person) => person.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.post(
  "/api/persons",
  logResponseBody,
  morgan(":method :url :status :res[content-length] - :response-time ms :body"),
  (req, res) => {
    const { name, number } = req.body;

    if (!name || !number) {
      return res.status(400).json({ error: "missing information" });
    }

    const existingPerson = persons.find(
      (person) => person.name.toLowerCase() === name.toLowerCase()
    );

    if (existingPerson) {
      return res.status(400).json({ error: "name must be unique" });
    }

    const newPerson = {
      id: generateId(),
      name,
      number: number.toString(),
    };

    persons = persons.concat(newPerson);
    res.status(201).json(newPerson);
  }
);

app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  persons = persons.filter((person) => person.id !== id);
  res.status(204).end();
});

// Serve static files after API routes
app.use(express.static(path.join(__dirname, "dist")));

// Fallback for SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
