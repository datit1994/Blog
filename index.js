var express = require("express");
var app = require("express")();
var bodyParser = require('body-parser');
var server = require("http").Server(app);
var io = require("socket.io")(server)
server.listen(3000, () => {console.log("Server is running port 3000");})

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs")
app.set("views", "./views")
app.use(express.static("public"))

app.get('/', (req, res) => {
  res.render("home11111");
})

app.get('/admin', (req, res) => {
  res.render("login", {title:"Login"});
})

app.post('/logininfo', urlencodedParser , (req, res) => {
  if(req.body.username == "123" && req.body.password == "123"){
    res.render("home", {permission:"admin"})
  } else {
    res.redirect("login")
  }
})

io.on("connection", function(socket){
	console.log(socket.id + " connected");
	socket.on("disconnect", function(){
		console.log(socket.id + " disconnected");
	})

  socket.on("new-post", (data) => {
    console.log(data);
  })

})
