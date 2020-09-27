import express from "express";
import * as repository from "./localRepository" 
import * as orderService from "./service" 

export interface Item {
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
     const menu = repository.getMenu()      
      res.type('text/plain').send(menu);           
    });

  app.post("/", function(req, res){  
    repository.saveOrder(req.body)
    orderService.orderReady(function(){
      res.sendStatus(200)
    })
  });
  
  return app.listen(port, function () {
    console.log(`Listening on http://localhost:${port}`);
  })
}

if(process.env.NODE_ENV !== 'testing') {
  run();
}

