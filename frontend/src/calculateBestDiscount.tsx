import {menuItem} from "./components/Menu";
import calculateHotOffer from './calculateHotOffer';
import calculateHungryDateOffer from './calculateHungryDateOffer';

// returns sum of discounts
export default function calculateBestDiscount(items: menuItem[]) :number{

    let a;
    let b;
    let remaining = items;
    // choose the higher discount and store it in discount variable
    let discount = 0;

    while(true){
        // getDiscountAndRemaininItems for first offer
        a = calculateHungryDateOffer(remaining)
        // getDiscountAndRemaininItems for second offer
        b = calculateHotOffer(remaining);

        // Return the sum of the discounts when no offer can be applied.
        if (a.discount == 0 && b.discount == 0){
            return discount
        } else {
            // if the first offer is higher than the second offer, take out the first offer items from the array. 
            if (a.discount > b.discount){
                discount += a.discount
                remaining = a.remainingItems
                // if the second offer is higher than the first offer, take out the second offer items from the array. 
            } else  {
                discount += b.discount
                remaining = b.remainingItems
            } 
        }
    }
   

    








}
