// import express from 'express';
const express =require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("Hello express");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
    // console.log("Server is running at port " + PORT);
});