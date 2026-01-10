const express = require('express');
const cors = require('cors');
const router = require('./src/routes/user.router');

const app = express();
app.use(cors());
app.use(express.json());

// app.get('/',(req, res)=>{
//   res.send("Wellcome");
// });

app.use("/api/user",router);

module.exports = app;