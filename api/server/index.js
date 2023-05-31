const express = require("express");
const cors = require('cors');
const { myFunction } = require("../testPayment");


const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());



app.get("/odeme", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.post('/odeme/3D', (req, res) => {
    const objectParam = req.body;
    // Call your function with the object parameter
    const result = myFunction(objectParam);
    res.json({ result });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});