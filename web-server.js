const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.static("public"));

app.get("/cats", (req, res) => {
  res.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Cat</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>
        <h1>Cat</h1>
        <p>This is my second route ${Math.random()}</p>
        <img src="/images/cat.jpg" />
      </body>
    </html>
  `);
});

app.get("/hello", (req, res) => {
  let r = Math.random();
  if (r > 0.5) {
    res.json({ n: r, dani: true });
  } else {
    res.json({ n: r, dani: false });
  }
});

app.get("/randomNumbers", (req, res) => {
  res.json(
    Array(100)
      .fill()
      .map(x => Math.random())
  );
});

app.get("/getPrueba", (req, res) => {
  res.sendFile(__dirname + "/views/prueba.html");
});

app.listen(PORT);
console.log(`Listening on port ${PORT}`);
