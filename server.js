const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 5000;
const SECRET = "yourSecretKey";

app.use(cors());
app.use(bodyParser.json());

let users = []; // temporary in-memory storage

// Register
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.json({ message: "User registered successfully" });
});

// Login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Password incorrect" });

  const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
  res.json({ accessToken: token });
});

// Dashboard (protected)
app.get('/dashboard', (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, SECRET);
    res.json({ message: `Welcome ${decoded.username}` });
  } catch {
    res.status(403).json({ message: "Invalid token" });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
