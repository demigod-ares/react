const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./routes");

const app = express();
const PORT = 3001;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));
// Parse JSON requests
app.use(bodyParser.json());

// =================================================================== //
// if your app is created with express framework
// use a CORS middleware like
var allowCrossDomain = function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  next();
};
// and apply via ******* not needed for HTTP client
app.use(allowCrossDomain); // This was needed for react app running in browser !!!
// ===================================================================== //

// Use routes defined in routes.js
app.use("/api", routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
