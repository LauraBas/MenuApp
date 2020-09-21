import { menuItem } from "./components/Menu";

export default function calculateHotOffer(items: menuItem[]){
    let mains = items.filter(item => item.type == 'main')
    let drinks = items.filter(item => item.type == 'drink')
    let desserts = items.filter(item => item.type == 'dessert')
    let total = 0

    while (mains.length >= 1 && drinks.length >= 1){
        let m = mains.pop() 
        let d = drinks.pop()
        if (m) total += m.price
        if (d) total += d.price         
    }
    return {
        total: total * 0.9,
        remainingItems: mains.concat(drinks).concat(desserts)
    }
}