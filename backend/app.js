const express = require("express");
const app = express();

// Assign Port Number
const port = 5000;
app.listen(port, () => console.log(`Server is up and running on port ${port}`));