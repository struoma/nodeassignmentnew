const http = require("http");
const fs = require("fs");
const PORT = 8000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  fs.readFile("./index.html", (err, data) => {
    if (err) console.log(err);
    else {
      res.write(data);
    }

    res.end();
  });
});

server.listen(PORT, () => {
  console.log("listening at " + PORT);
});
