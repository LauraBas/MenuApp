import {menuItem} from "./components/Menu"

export default function calculateHungryDateOffer(items: menuItem[]){

    let mains = items.filter(item => item.type == 'main').sort((a, b) => b.price - a.price);
    let drinks = items.filter(item => item.type == 'drink').sort((a, b) => b.price - a.price);
    let desserts = items.filter(item => item.type == 'dessert').sort((a, b) => b.price - a.price);
    let discount = 0

   if (mains.length >= 2 && drinks.length >= 2 && desserts.length >= 1){
        
        const m1 = mains.shift();
        const m2 = mains.shift();
        const d1 = drinks.shift();
        const d2 = drinks.shift();
        const de1 = desserts.shift();
        let total = m1!.price + m2!.price + d1!.price + d2!.price + de1!.price;
        discount = total - 40;
    }
       
    
    return { 
        discount: discount,
        remainingItems: mains.concat(drinks).concat(desserts)
    }
}