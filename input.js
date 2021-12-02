const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MESSAGES} = require("./constants");
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


const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up")
    //connection.write("Say: Hii")
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left")
    //connection.write("Say: it's been a long day")
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down")
    //connection.write("Say: hope you'll get some rest")
  }

  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right")
    //connection.write("Peace out")
  } if (MESSAGES[key]) {
    connection.write(MESSAGES[key])
  }
};



module.exports = {
  setupInput
};
