import express from 'express'
const app = express();

app.use(express.json());

app.get('/todo', (req, res) => {

});

app.get('todos', (req, res) => {

});

app.post('/comleted', () => {

});

app.listen(3000);