import * as menuData from '../menu.json'

export function getMenu() {
    // connection.query("SELECT * FROM menu", (err :Error, results :any, fields :any) => {
    //     if (err) throw err;
    //     onDone(results)
    // })
    const mains = menuData.food.map(item => ({name: item.name, price: item.price/100, type: "main"}))
    const drinks = menuData.drink.map(item => ({name: item.name, price: item.price/100, type: "drink"}))
    const desserts = menuData.dessert.map(item => ({name: item.name, price: item.price/100, type: "dessert"}))
    return mains.concat(drinks).concat(desserts)
}