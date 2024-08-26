const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", async(req, res) => {
    res.send("Hello");
})

app.listen(port, (err) => {
    if(err)
        console.log(err);
        
    console.log(`Server is running on port : ${port}`);
})