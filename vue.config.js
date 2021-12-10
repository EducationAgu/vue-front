const {readFileSync} = require("fs");
module.exports = {
  devServer: {
    port: 8081,
    https: {
      key: readFileSync('./create-cert-key.pem'),
      cert: readFileSync('./create-cert.pem')
    },
    hotOnly: false,
  }
}
