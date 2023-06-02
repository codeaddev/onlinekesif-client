const express = require("express");
const cors = require('cors');
const { testPayment } = require("../testPayment");
const { payment3D } = require("../payment");


const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());



app.get("/odeme", (req, res) => {
    res.json({ message: "Hello from server!" });
  });


app.post('/odeme/3D', async (req, res) => {
    const param = req.body;
    try {
      const result = await testPayment(param);
      res.json({ result });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });
app.post('/odeme/3DPay', async (req, res) => {
    const param = req.body;
    try {
      const result = await payment3D(param);
      res.json({ result });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});