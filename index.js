const { server } = require("./api/server.js");

const port = 3300;
server.listen(port, () => {
  console.log(`/n+++ Server Listening On Port ${port} /n`);
});
