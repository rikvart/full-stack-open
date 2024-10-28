const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
var morgan = require("morgan");
const app = express();
const baseUrl = "http://localhost:3001/api/notes";

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

morgan.token("body", (req) => {
  return JSON.stringify(req.body);
});

app.use(morgan("tiny"));

let persons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

const logResponseBody = (req, res, next) => {
  let oldSend = res.send;
  res.send = function (body) {
    console.log("Response Body:", body);
    oldSend.apply(res, arguments);
  };
  next();
};

const generateId = () => {
  const maxId =
    persons.length > 0 ? Math.max(...persons.map((n) => Number(n.id))) : 0;
  return String(maxId + 1);
};

const personsNum = () => {
  const amount = persons.length;
  return amount;
};

app.post(
  "/api/persons",
  logResponseBody,
  morgan(":method :url :status :res[content-length] - :response-time ms :body"),
  (request, response) => {
    const newPerson = {
      id: generateId(),
      name: request.body.name,
      number: request.body.number.toString(),
    };

    const existingPerson = persons.find(
      (person) => person.name.toLowerCase() === newPerson.name.toLowerCase()
    );

    if (existingPerson) {
      response.json({ error: "name must be unique" });
    } else if (newPerson.name === "" || newPerson.number === "") {
      response.json({ error: "missing information" });
    } else {
      persons = persons.concat(newPerson);
      response.status(201).json(newPerson);
    }
  }
);

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/info", (request, response) => {
  response.send(
    "Phonebook has info for " + personsNum() + " people </br>" + Date()
  );
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.delete("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
});

app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  const person = persons.find((person) => person.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
