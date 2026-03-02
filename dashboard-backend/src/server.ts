import express from 'express';
import cors from 'cors';
import { users, dashboard } from './data';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({ user: { id: user.id, email: user.email, name: user.name } });
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/api/dashboard', (req, res) => {
  res.json(dashboard);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
