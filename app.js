const express = require('express');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.static('public')); // Serve static files
app.set('view engine', 'ejs'); // Set EJS as the view engine


const messages = [
  { text: 'Hi there!', user: 'Amando', added: new Date() },
  { text: 'Hello World!', user: 'Charles', added: new Date() },
];

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages });
});

app.get('/new', (req, res) => {
  res.render('form', { title: 'New Message' });
});

app.post('/new', (req, res) => {
  const { messageText, messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect('/');
});

app.get('/message/:id', (req, res) => {
  const message = messages[req.params.id];
  if (!message) return res.status(404).send('Message not found');
  res.render('message', { title: 'Message Detail', message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
