const { createProxyMiddleware } = require("http-proxy-middleware")
const cors=require("cors")
const express = require('express');
const app = express();
module.exports=app=>{
 
    app.use(
        createProxyMiddleware("/GetInstallments",
        {
            target:"https://posservice.esnekpos.com/api/services/",
            secure:false,
            changeOrigin:true
        })
    )
    
    app.use(
        createProxyMiddleware("/api",
        {
            target:"http://localhost:3001",
            changeOrigin:true,
            secure:false,
            
        })
    )
    
}
//"start": "concurrently \"npm run server\" \"react-scripts start\"",