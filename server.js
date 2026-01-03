const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

/* ===== FORM DATA → GOOGLE SHEET ===== */
app.post("/save-excel", async (req, res) => {

  const {
    name,
    phonenum,
    age,
    gender,
    address,
    complain,
    department
  } = req.body;

  try {
    await fetch("https://script.google.com/macros/s/AKfycbxJMHBaWmiYsQIdBD9sWSe8Rd3mK-KnvQBgcf9zwVFzwPdIe7AJMf00UbmCNcRYlja8/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        phone: phonenum,
        age,
        gender,
        address,
        complain,
        department
      })
    });

    res.send("✅ Data Google Sheet me save ho gaya");

  } catch (error) {
    console.error(error);
    res.status(500).send("❌ Google Sheet error");
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


