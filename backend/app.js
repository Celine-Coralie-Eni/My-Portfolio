const express = require("express");
const multer = require("multer");
const cors = require("cors");
const { Pool } = require("pg");
const upload = multer({ dest: "uploads/" });

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.post("/upload", upload.single("achievement"), async (req, res) => {
  const { originalname, filename, path } = req.file;
  const { title, description } = req.body;
  await pool.query(
    "INSERT INTO achievements (title, description, filename, originalname) VALUES ($1, $2, $3, $4)",
    [title, description, filename, originalname]
  );
  res.json({ message: "Uploaded!" });
});

app.get("/achievements", async (req, res) => {
  const result = await pool.query("SELECT * FROM achievements");
  res.json(result.rows);
});

// app.listen(5000, () => console.log("Backend running on port 5000"));
app.listen(5000, "0.0.0.0", () => {
  console.log("Backend running on port 5000");
});
