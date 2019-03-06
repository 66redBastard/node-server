const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hey, I\'m a Node.js app! Bitch!')
})

app.listen(3000, () => {
    console.log('Server is up on 3000. bitch')
})








// var http = require('http');
//
// var server = http.createServer(function(req, res){
  //     res.writeHead(200, {'Content-type' : 'text/plain'});
  //     res.write('Hello node.js on digital ocean!');
  //     res.end();
  // });
  //
  // server.listen(8080);
  // console.log('Listening port :8080');
