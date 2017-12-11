var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const url = "mongodb://localhost/amaz"

// process.env.DATABASE_URL || 
mongoose.connect(url)
mongoose.connection.once('open', function () {
    console.log(`Mongoose connected to: ${url}`)
});
// mongoose.connect(process.env.DATABASE_URL);


var db = mongoose.connection;

// db.once('open', () => {
//     console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
// });

module.exports = mongoose