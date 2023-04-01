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
        createProxyMiddleware("/EYV3DPay",
        {
            target:"https://posservice.esnekpos.com/api/pay/",
            secure:false,
            changeOrigin:true
        })
    )
    app.use(
        createProxyMiddleware("/ProcessQuery",
        {
            target:"https://posservice.esnekpos.com/api/services/",
            secure:false,
            changeOrigin:true
        })
    )
    
    app.use(
        createProxyMiddleware("/api",
        {
            target:"https://posservice.esnekpos.com/api/services/GetInstallments",
            changeOrigin:true,
            secure:false,
            
        })
    )
    
}
//"start": "concurrently \"npm run server\" \"react-scripts start\"",