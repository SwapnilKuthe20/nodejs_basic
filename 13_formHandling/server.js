import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.post('/form', (req, res) => {
    console.log(req.body, "...req.body");
    res.json({ Result: "Form handling done" })
})

app.listen(1000, () => console.log('Express server run'))