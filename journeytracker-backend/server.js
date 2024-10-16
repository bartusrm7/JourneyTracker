const express = require("express");
const cors = require("cors");

const app = express();
const port = 5174;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
