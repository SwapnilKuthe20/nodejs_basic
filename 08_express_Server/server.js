import express from "express";

const app = express();

const port = 3050;
app.listen(port, () => console.log(`express server is running on port : ${port}`));
