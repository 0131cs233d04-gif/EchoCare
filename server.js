const express = require("express");
const ExcelJS = require("exceljs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.post("/save-excel", async (req, res) => {

    console.log("REQ BODY 👉", req.body);

    const {
        name,
        phonenum,
        age,
        gender,
        address,
        complain,
        department
    } = req.body;

    const workbook = new ExcelJS.Workbook();
    const filePath = path.join(__dirname, "appointments.xlsx");

    try {
        let sheet;

        try {
            await workbook.xlsx.readFile(filePath);
            sheet = workbook.getWorksheet("Appointments");
        } catch {
            sheet = workbook.addWorksheet("Appointments");
            sheet.columns = [
                { header: "Department", key: "department" },
                { header: "Name", key: "name" },
                { header: "Phone", key: "phonenum" },
                { header: "Age", key: "age" },
                { header: "Gender", key: "gender" },
                { header: "Address", key: "address" },
                { header: "Complain", key: "complain" }
            ];
        }

        sheet.addRow([
            department,
            name,
            phonenum,
            age,
            gender,
            address,
            complain
        ]);

        await workbook.xlsx.writeFile(filePath);

        res.send("✅ Data Excel me save ho gaya");

    } catch (err) {
        console.error(err);
        res.status(500).send("❌ Error saving data");
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
