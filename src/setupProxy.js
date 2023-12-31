const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = (app) => {
  app.use(
    createProxyMiddleware("/GetInstallments", {
      target: "https://posservice.esnekpos.com/api/services/",
      secure: false,
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/EYV3DPay", {
      target: "https://posservice.esnekpos.com/api/pay/",
      secure: false,
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/ProcessQuery", {
      target: "https://posservice.esnekpos.com/api/services/",
      secure: false,
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/service_turkpos_prod.asmx", {
      target: "https://posws.param.com.tr/turkpos.ws/",
      secure: false,
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/service_turkpos_test.asmx", {
      target: "https://test-dmz.param.com.tr:4443/turkpos.ws/",
      secure: false,
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/api", {
      target: "https://posservice.esnekpos.com/api/services/GetInstallments",
      changeOrigin: true,
      secure: false,
    })
  );
};
//"start": "concurrently \"npm run server\" \"react-scripts start\"",
