import * as menuData from '../menu.json'
import { Item } from './server'
import * as fs from 'fs';
export function getMenu() {
    const mains = menuData.food.map(item => ({name: item.name, price: item.price/100, type: "main"}))
    const drinks = menuData.drink.map(item => ({name: item.name, price: item.price/100, type: "drink"}))
    const desserts = menuData.dessert.map(item => ({name: item.name, price: item.price/100, type: "dessert"}))
    return mains.concat(drinks).concat(desserts)
}

export function saveOrder(items: Item[]) {
    let data = JSON.stringify(items);
    fs.writeFileSync('ordersData/order-' + new Date().toLocaleTimeString(), data);
}