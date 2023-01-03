const PORT=8000

const express=require('express')
const cors=require('cors')
const axios=require("axios")
require("dotenv").config()

/* eslint-disable */
const app=express()

app.get('/',(req,res)=>{
    var config = {
        method: 'get',
        url: 'https://onlinekesif.com/blog/wp-json/wp/v2/posts',
        headers: { 
          'accepts': 'application/json'
        }
      };
      
      axios(config)
      .then(function (response) {
    
        console.log(JSON.stringify(response.data));
        res.json(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    
})




app.listen(8000,()=>console.log("backend running"))

