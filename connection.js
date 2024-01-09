require('dotenv').config()
const mongoose = require("mongoose");


//Connect To DATABASE
async function ConnectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL); 
    console.log("DB Connected !!");
  } catch (error) {
    console.log("error", error);
  }
}

module.exports = ConnectDB; 