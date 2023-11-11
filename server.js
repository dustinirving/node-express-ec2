import express from 'express'

const app = express();
const port = 5001; // default port to listen

app.get('/', (req, res) => {
  res.send('Hello World with Express!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
