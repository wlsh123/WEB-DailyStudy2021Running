const proxy = require('http-proxy-middleware');
// const proxy = require('http')

module.exports = function(app){
  app.use(
    "/api",
    proxy({
      target:'http://localhost:3200',
      changeOrigin:true,
    })
  );
};