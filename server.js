const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db.js");
const dotenv = require("dotenv");
dotenv.config({ path: "./src/config/config.env" });

connectDB();
const app = express();
app.use(express.json());
app.use(
  cors()
);

const PORT = process.env.PORT || 5000;

require("./src/routes/index.js")(app);

const http = require("http");
const server = http.createServer(app);

app.get("*", (req, res) => {
  return res.status(404).json({
    success: false,
    message: `Please check endPoint, not any api of this route!`,
  });
});

server.listen(PORT, (err, res) => {
  if (!err) {
    console.log(`server running on PORT ${PORT}...`);
  }
});
