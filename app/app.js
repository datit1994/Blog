var React     = require("react");
var ReactDOM  = require("react-dom");

var App = require("./components/App.js");
var LoginPage = require("./components/LoginPage.js");
var AdminPage = require("./components/AdminPage.js")
var socket = io();
var permission;


ReactDOM.render(
  <div>
    <App />
  </div>
  , document.getElementById("root")
)
