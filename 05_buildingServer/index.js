import http from 'http';
// console.log(http, "...http");  // methods, status codes etc,

// to create server ::
const server = http.createServer((req, res) => {
    console.log("Our server is established successfully !");
    const date = new Date();
    console.log("last time server hit on ", date.toLocaleDateString(), date);

    res.end("Thank you for requesting server");
});

// to run server
const port = 1000;
server.listen(port, () => console.log(`Server is running on port : ${port}`));






