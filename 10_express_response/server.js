import express from "express";
import path from 'path';

const app = express();

const products = [
    { product: "iphone", price: 120000 },
    { product: "Samsung", price: 12000 },
    { product: "realme", price: 10000 }
]

// to send json file in response ::

app.get('/', (req, res) => {
    console.log("This is home route");
    // res.end("To end response");
    res.send("resp.send --> to send plain text");
});

app.get('/products', (req, res) => {
    // res.json({products})                  // modern syntax   
    res.json({ product: products[2] })                  // modern syntax   
})
// --------------------------------------------------------------
// to send html file in response ::

const dir = path.resolve();        // resolve --> for get absolute path
console.log(dir, "...path");       // E:\Mern_Basics\10_express_response

// now we have to join path in current path(dir) 
const url = path.join(dir, './index.html');
console.log(url, "...url");        // E:\Mern_Basics\10_express_response\index.html 


app.get('/about', (req, res) => {
    // res.sendFile('./index.html')
    //// TypeError: path must be absolute or specify root to res.sendFile.
    //// so we have have to pass absolute path in sendFile.

    res.sendFile(url);
})

const port = 1200;
app.listen(port, () => {
    console.log("Express server is running");
})
