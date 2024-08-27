const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");

require("dotenv").config();

const port = process.env.PORT || 8000;
const path = require("path");
const dbConnect = require("./config/dbConnect");

const debug = require("debug")("development:app");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
}));

app.use(flash());


app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/", require("./routes/index"));
app.use("/owners", require("./routes/ownerRoute"));
app.use("/products", require("./routes/productRoute"));
app.use("/users", require("./routes/userRoute"));

app.listen(port, () => {
    debug(`Server is running on port ${port}`);
})