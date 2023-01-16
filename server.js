
var express =require("express");
var cors =require("cors");
var dotenv =require("dotenv"); // Add to import list
var axios = require('axios');
const { API_URL } = require("./src/apis/url");
dotenv.config(); // Configure dotenv to access the env variables

const PORT = 3001 || 8080; 
const app = express();

app.use(cors({ 
  origin: API_URL, 
  credentials: true 
 }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
axios.default.defaults.withCredentials=true

  

  var data = JSON.stringify({
    "MERCHANT": "codead.com.tr",
    "MERCHANT_KEY": "xmRzaOKj6+rf6Fn/cxXgVUwiRO4pkKDVfaHaPE7bGfNICVHPS9YlNg=="
  });
var config = {
    method: 'post',
    url: 'https://posservice.esnekpos.com/api/services/GetInstallments',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
 


app.post(`${API_URL}/api`, (req, res) => {
  res.json("hey")
  axios(config)
  .then(function (response) {
 
  res.json(JSON.stringify(response.data.INSTALLMENTS))
})
  .catch(error => {
        if(error) {
            res.json(JSON.stringify(error));
        }
  })
  
});


console.log("faruk backend")
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});