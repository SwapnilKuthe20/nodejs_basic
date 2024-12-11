import express from "express";
import path from 'path';

const app = express();

// to read static file --> use() middleware 
// express.static middleware for serving static files.
app.use(express.static(path.join(path.resolve(),'public')))

// render() --> use to render ejs file
app.get('/', (req, res) => {
    // res.render('./index.ejs')
    // Error: Failed to lookup view "./index.ejs" in views directory.
    // so we have to add .ejs file in views folder.

    const product = { product: "realme", price: 10000 };
    res.render('./index.ejs', { product });
})


const port = 1300;
app.listen(port, () => {
    console.log(`express server is running on port : ${port}`);
})