import http from 'http';

// create server
const server = http.createServer((req, res) => {

    console.log("server is requesting by someone !");
    // console.log(req, "..req");
    // console.log(req.url, "..req.url");      // --> / (home)

    req.url === "/about" && res.end('You are in about page');
    req.url === "/contact" && res.end('You are in contact page');

    // res.end("Thanku for reqesting our server");
})

// running server
const port = 2000;
server.listen(port, () => console.log(`server is runing on port : ${port}`));
