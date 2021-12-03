const net = require("net");
const {connect} = require('./play');
const {setupInput} = require("./input");

console.log("Connecting ...");
//connect();
setupInput(connect());




