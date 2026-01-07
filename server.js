const express = require("express");

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
    department,
    date,
    time
  } = req.body;

  try {
    const response = await fetch(
      "https://script.google.com/a/macros/jnctbhopal.ac.in/s/AKfycbxJMHBaWmiYsQIdBD9sWSe8Rd3mK-KnvQBgcf9zwVFzwPdIe7AJMf00UbmCNcRYlja8/exec",
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

    if (!response.ok) {
      throw new Error("Google Script error");
    }

    res.send("✅ Appointment successfully booked");

  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).send("❌ Appointment save failed");
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
