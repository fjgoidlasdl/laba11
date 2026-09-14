const http = require('http');
const p = (16 * Math.atan(1/5) - 4 * Math.atan(1/239)).toFixed(23);
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>Тимошенко Егор Иванович<br>477<br>$<p></h1>');
});

server.listen(3000, () => {
  console.log('Сервер запущен на http://localhost:3000');
});
