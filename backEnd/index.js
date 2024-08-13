import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "form_login",
});

app.get("/data", (req, res) => {
  const sql = 'SELECT * FROM table_form'
  db.query(sql, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
});

app.listen(8000, () => {
  console.log("berhasil di port 8000");
});
