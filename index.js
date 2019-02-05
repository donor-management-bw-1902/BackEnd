const { server } = require("./api/server.js");

require('dotenv').config();
const port = process.env.PORT || 3300;

server.listen(port, () => {
  console.log(`\n+++ Server Listening On Port ${port} +++\n`);
});
