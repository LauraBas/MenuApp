import { menuItem } from "./components/Menu";

export default function calculateHotOffer(items: menuItem[]){
    let mains = items.filter(item => item.type == 'main').sort((a, b) => b.price - a.price);
    let drinks = items.filter(item => item.type == 'drink').sort((a, b) => b.price - a.price);
    let desserts = items.filter(item => item.type == 'dessert');

    let total = 0

    if (mains.length >= 1 && drinks.length >= 1){
        let m = mains.shift() 
        let d = drinks.shift()
        if (m) total += m.price
        if (d) total += d.price         
    }

    const discount = total - (total * 0.9);
    return {
        discount: Math.round(discount * 100) / 100,
        remainingItems: mains.concat(drinks).concat(desserts)
    }
}