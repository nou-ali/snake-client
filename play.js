const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541"
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", (data) => {
    console.log("Recived data connection is establisted")
  });
  console.log("Connecting ...");
  conn.on("data", (data) => {
    console.log(data)
  });

  // event handler to let the client know that they have connected to game server

  conn.on("connect", (connect) => {
    console.log("Successfully connected to game server")
  });

  conn.on('connect', () => {
    conn.write("Name: NAA");

// setTimeout (() => {
//   conn.write("Move: up");
// }, 1000)
    
  });
  return conn;
};

// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", handleUserInput);
//   return stdin;
// };


// const handleUserInput = function(key) {
//   if (key === 'w') {
//     process.exit();
//   }
// };

module.exports = {
  connect
};

