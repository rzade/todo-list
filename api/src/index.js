var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var fs = require("fs");
var http = require("http");

const app = express();
app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get("/api/get", (req, res) => {
	const tasks = fs.readFileSync(path.join(__dirname, '../uploads', 'tasks.json'), 'utf8');
	res.json(Object.keys(tasks).length === 0 && tasks.constructor === Object ? [] : JSON.parse(tasks));
});

app.post("/api/save", (req, res) => {
	if (!fs.existsSync(path.join(__dirname, '../uploads'))){ fs.mkdirSync(path.join(__dirname, '../uploads')); }
	fs.writeFileSync(path.join(__dirname, '../uploads', 'tasks.json'), JSON.stringify(req.body));
});

let root = path.join(__dirname, '../../', 'build/')
app.use(express.static(root))
app.use(function(req, res, next) {
  if (req.method === 'GET' && req.accepts('html') && !req.is('json') && !req.path.includes('.')) {
    res.sendFile('index.html', { root })
  } else next()
});

http.createServer(app).listen(1234, () => console.log("Running on:1234"));