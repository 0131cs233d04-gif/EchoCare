const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.post("/save-excel", async (req, res) => {
  const {
    name,
    phonenum,
    age,
    gender,
    address,
    complain,
    department,
    date,
    time
  } = req.body;

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzPgm6W5QhY8gNB2ffQMQneGYtz9L9-rd7MT6Evo6FdDrAybG0gjz9UBQZ6PCGePWg/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name || "",
          phone: phonenum || "",
          age: age || "",
          gender: gender || "",
          address: address || "",
          complain: complain || "",
          department: department || "",
          date: date || "",
          time: time || ""
        })
      }
    );

    const text = await response.text();
    console.log("Google Script Response:", text);

    if (!response.ok || !text.includes("Success")) {
      throw new Error(text);
    }

    return res.send("✅ Appointment successfully booked");

  } catch (error) {
    console.error("❌ Error:", error);
    return res.status(500).send("❌ Appointment save failed");
  }
});

app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});


