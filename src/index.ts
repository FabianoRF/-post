import express from 'express';
import './database/connection';

const app = express();

app.use(express.json());

app.get('/postages', (request, response) => {
  response.send('Hello world');
});

app.listen(3333, () => {
  console.log('*** Server started on port 3333!');
});
