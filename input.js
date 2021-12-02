const net = require("net");

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); 
  return stdin;
};


const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up")
    connection.write("Say: Hii")
  }
  if (key === 'a') {
    connection.write("Move: left")
    connection.write("Say: it's been a long day")
  }
  if (key === 's') {
    connection.write("Move: down")
    connection.write("Say: hope you'll get some rest")
  }

  if (key === 'd') {
    connection.write("Move: right")
    connection.write("Peace out")
  }
};



module.exports = {
  setupInput
};
