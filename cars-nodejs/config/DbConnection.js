// DbConnection.js
const mongoose = require('mongoose');

try {
  mongoose.connect("mongodb://localhost:27017/carren", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Database is connected");
} catch (error) {
  console.error("Error connecting to the database:", error.message);
}

module.exports = mongoose;
