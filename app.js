const express = require("express");
const app = express();

require("dotenv").config();

const port = process.env.PORT || 8000;
const path = require("path");
const dbConnect = require("./config/dbConnect");

const debug = require("debug")("development:app");

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/", require("./routes/index"));
app.use("/owners", require("./routes/ownerRoute"));
app.use("/products", require("./routes/productRoute"));
app.use("/users", require("./routes/userRoute"));

app.listen(port, () => {
    debug(`Server is running on port ${port}`);
})