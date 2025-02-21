const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

app.post("/test", (req, res) => {
  const { message } = req.body;
  res.json({ success: true, received: message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
