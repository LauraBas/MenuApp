import express from "express";


interface Item {
  id :string
}

const port = process.env.NODE_PORT || 4848;

export function run () {
  
  const app = express();   

  app.use(express.json()) 

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
      connection.query("SELECT * FROM menu", (err :Error, results :any, fields :any) => {
        if (err) throw err;
        res.type('text/plain').send(results);
    })
  });

  app.post("/", function(req, res){
    

    connection.query("INSERT INTO purchase (pending) VALUES (TRUE)", (err :Error, results :any, fields :any) => {
      if (err) console.log(err);

      const values  = req.body.map((item :Item) => { return [item.id, results.insertId]})      

      connection.query("INSERT INTO menuPurchaseLink (menuID, purchaseID) VALUES ?", [values] , (err :Error, results :any, fields :any) => {
        if (err) throw err     
        setTimeout(function(){ 
          res.send()
        }, 3000) 
      })
    })
  });
  
  return app.listen(port, function () {
    console.log(`Listening on http://localhost:${port}`);
  })

}


if(process.env.NODE_ENV !== 'testing') {
  run();
}
