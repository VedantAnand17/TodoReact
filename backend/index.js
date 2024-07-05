const express = require('express')
const { createTodo } = require('./types');
const { todo } = require('./db');
const app = express();

app.use(express.json());

app.get('/todo',async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
    }
    // putting in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "todo created"
    })
});

app.get('todos', (req, res) => {
    const todos = todo.find({});
    res.json(todos);
});

app.post('/comleted', async () => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo completed"
    })
});

app.listen(3000);