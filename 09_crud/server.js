import express from "express";

const serverApp = express();

// :: CRUD ::
// C = CREATE => POST
// R = READ   => GET
// U = UPDATE => UPDATE
// D = DELETE => DELETE

serverApp.get('/', (req, res) => {
    console.log("This is home route");
    res.send('This is your response');
});

serverApp.get('/products', (req, res) => {
    console.log("this is products route");
    
    res.json({
        products: [
            { product: "iphone", price: 120000 },
            { product: "Samsung", price: 12000 },
            { product: "realme", price: 10000 }
        ]
    })
})

const port = 3000;
serverApp.listen(port, () => { console.log(`express server is running on port : ${port}`) })
