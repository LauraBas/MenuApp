// mysqlRepository
import {Item} from "./server"

export function getMenu(connection :any, onDone :(results :any) => void) {
    connection.query("SELECT * FROM menu", (err :Error, results :any, fields :any) => {
        if (err) throw err;
        onDone(results)
    })
}

export function saveOrder(connection :any, onDone :(results :any) => void, items: Item[]) {

    connection.query("INSERT INTO purchase (pending) VALUES (TRUE)", (err :Error, results :any, fields :any) => {
      if (err) console.log(err);
      const purchaseID = results.insertId
      const values  = items.map((item :Item) => { return [item.id, purchaseID]})      

      connection.query("INSERT INTO menuPurchaseLink (menuID, purchaseID) VALUES ?", [values] , (err :Error, results :any, fields :any) => {
        if (err) throw err     

        setTimeout(function(){ 
          connection.query("UPDATE purchase SET pending = FALSE, delivered = TRUE WHERE id = " + purchaseID, (err :Error, results :any, fields :any) => {
            if (err) console.log(err);

            onDone(results)
          });
        }, 5000)         
      })      
    })

}