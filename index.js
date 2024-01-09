require('dotenv').config()
const express = require("express");
const ConnectDB = require("./connection");
const app = express();
var subscribers = require("./routes/subscriber");
const port = process.env.PORT || 3000;

app.use(express.json());

//connect DATABASE
ConnectDB();

//call a ROUTER
app.use("/", subscribers);

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`));
