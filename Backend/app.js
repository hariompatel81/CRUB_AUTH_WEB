const express = require('express');
const cors = require('cors');
const authRouter = require('./src/routes/auth.router');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',(req, res)=>{
  res.send("Wellcome");
});

app.use("/api",authRouter);

module.exports = app;