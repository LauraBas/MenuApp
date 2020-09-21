import {menuItem} from "./components/Menu"

export default function calculateHungryDateOffer(items: menuItem[]){

    let mains = items.filter(item => item.type == 'main')
    let drinks = items.filter(item => item.type == 'drink')
    let desserts = items.filter(item => item.type == 'dessert')
    let total = 0

    while (mains.length >= 2 && drinks.length >= 2 && desserts.length >= 1){
        total += 40
        mains.pop()
        mains.pop() 
        drinks.pop()
        drinks.pop()
        desserts.pop()
    }
    return { 
        total: total,
        remainingItems: mains.concat(drinks).concat(desserts)
    }
}