import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const usersFilePath = path.resolve(__dirname, 'db.json');

// Add middleware
app.use(cors());
app.use(bodyParser.json());

// Function to read users from the JSON file
const readUsersFromFile = () => {
  try {
    const data = fs.readFileSync(usersFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Function to write users to the JSON file
const writeUsersToFile = (users) => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf8');
};

app.get('/', (req, res) => {
  res.send('Welcome to Express server');
});

app.post('/users', (req, res) => {
  console.log("Received POST request with data:", req.body);
  const user = req.body;
  const users = readUsersFromFile();
  users.push(user);
  writeUsersToFile(users);
  res.status(201).json(user);
});

app.get('/users', (req, res) => {
  const users = readUsersFromFile();
  res.json(users);
});

const PORT = 3000;

app.listen(PORT, () => console.log(`EXPRESS Server is running on http://localhost:${PORT}`));
