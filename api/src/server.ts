import express from "express";

const port = process.env.NODE_PORT || 4848;


export function run () {
  
  const app = express();   
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  }); 
  const mysql      = require('mysql');
  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'menu'
  });

  

  app.get("/", function(_, res) {
    connection.connect(function(err: Error) {
      connection.query("SELECT * FROM menu", (err :Error, results :any, fields :any) => {
        if (err) throw err;
        console.log(results);
        res.type('text/plain').send(results);
      })
    });
  });
 
  

  return app.listen(port, function () {
    // Port is forwarded by docker to 80.
    console.log(`Listening on http://localhost:${port}`);
  })
}


if(process.env.NODE_ENV !== 'testing') {
  run();
}
