const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "#Bangla71",
  database: "stock_management",
});

app.post("/create", (req, res) => {
  const i_id = req.body.i_id;
  const i_name = req.body.i_name;
  const i_Quantity = req.body.i_Quantity;
  const i_Unit_price = req.body.i_Unit_price;
  const s_id = req.body.s_id;
  const t_id = req.body.t_id;
  const so_id = req.body.so_id;
  const dh_id = req.body.dh_id;
  const entry_date = req.body.entry_date;

  db.query(
    "INSERT INTO items (i_id, i_name, i_Quantity, i_Unit_price, s_id,t_id,so_id,dh_id,entry_date) VALUES (?,?,?,?,?,?,?,?,?)",
    [i_id, i_name, i_Quantity, i_Unit_price, s_id,t_id,so_id,dh_id,entry_date],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/items", (req, res) => {
  db.query("SELECT * FROM items", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const i_id = req.body.i_id;
  const i_Quantity = req.body.i_Quantity;
  db.query(
    "UPDATE items SET i_Quantity = ? WHERE i_id = ?",
    [i_Quantity, i_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:i_id", (req, res) => {
  const i_id = req.params.i_id;
  db.query("DELETE FROM items WHERE i_id = ?", i_id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3006, () => {
  console.log("Yey, your server is running on port 3004");
});
