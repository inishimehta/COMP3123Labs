// index.js

const http = require("http");
const employeeModule = require("./Employee");

console.log("Lab 03 - NodeJs");

const port = process.env.PORT || 8081;

const server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    res.writeHead(405, { "Content-Type": "text/plain" });
    return res.end(http.STATUS_CODES[405]);
  }

  const url = req.url;

  if (url === "/" || url === "/index" || url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    return res.end("<h1>Welcome to Lab Exercise 03</h1>");
  }

  if (url === "/employee") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(employeeModule.getAll()));
  }

  if (url === "/employee/names") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const names = employeeModule.getNamesAscending();
    return res.end(JSON.stringify(names));
  }

  if (url === "/employee/totalsalary") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const total = employeeModule.getTotalSalary();
    return res.end(JSON.stringify({ totalsalary: total }));
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  return res.end(http.STATUS_CODES[404]);
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
