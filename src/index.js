import express from 'express';
import bodyParser from 'body-parser';
import { newPerson } from './services/db.js';

const app = express();
app.use(bodyParser.json());

const port = process.env.API_PORT || 8088;

app.use(express.json());

app.get('/api/person/:id', async (req, res, next) => {
  res.send(`🌵 ${req.params.id}`);
});

app.post('/api/person', async (req, res, next) => {
  try {
    await newPerson(req.body.name);
  } catch (err) {
    next(err);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
