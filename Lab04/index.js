const express = require('express');
const app = express();

// Middleware to parse JSON for POST bodies
app.use(express.json());

// GET /hello -> "Hello Express JS"
app.get('/hello', (req, res) => {
  res.type('text/plain').send('Hello Express JS');
});

// GET /user?firstname=&lastname=
// Defaults to Pritesh Patel when query params are missing
app.get('/user', (req, res) => {
  const firstname = req.query.firstname || 'Nishi';
  const lastname = req.query.lastname || 'Mehta';
  res.json({ firstname, lastname });
});

// POST /user/:firstname/:lastname -> returns JSON
app.post('/user/:firstname/:lastname', (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// POST /users -> expects body: [{ firstname, lastname }, ...]
app.post('/users', (req, res) => {
  const users = req.body;

  // Validate: must be an array of objects with firstname and lastname
  if (!Array.isArray(users)) {
    return res.status(400).json({ error: 'Body must be an array of users' });
  }
  for (const u of users) {
    if (
      !u ||
      typeof u !== 'object' ||
      typeof u.firstname !== 'string' ||
      typeof u.lastname !== 'string'
    ) {
      return res.status(400).json({
        error: 'Each user must be an object with string firstname and lastname',
      });
    }
  }

  res.json(users);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
