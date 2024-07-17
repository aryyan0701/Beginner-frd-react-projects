import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// Add middleware
app.use(cors());
app.use(bodyParser.json());

let users = [];

app.get('/', (req,res)=>{
    res.send('welcome to express server')
})

app.post('/users', (req, res)=>{
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
})

app.get('/users', (req, res) => {
    res.json(users);
  });

// // Use default router
// server.use(middleware);
// server.use(router);

const PORT = 3000;

app.listen(PORT, () => console.log(`JSON Server is running on http://localhost:${PORT}`));
