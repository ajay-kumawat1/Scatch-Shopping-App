const mongoose = require('mongoose');
const config = require('config');

const debug = require('debug')('development:mongoose');

mongoose.connect(`${config.get("MONGO_URI")}`) 
.then(() => {
    debug("MongoDB Connected");
})
.catch(err => {
    debug(err);
})

module.exports = mongoose;
