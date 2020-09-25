import calculateBestDiscount from "./calculateBestDiscount";
import { expect } from "chai";
import { menuItem } from "./components/Menu";

describe("calculate the highest discount for n items", function(){
    it('no items return 0 discount', function(){
        const input :menuItem[] = []

        const result = calculateBestDiscount(input)

        expect(result).to.eql(0)
    })
    
    it('should calculate the best discount', function(){
        const input :menuItem[] = [
            {name: "White Russian ", type:"drink", price:10, id: 6, selected:true, quantity:1},
            {name: "Avo on toast", type: "main", price: 8, id: 0, selected: true, quantity: 1},
            {name: "Pesto pasta with pine nuts and mozzarella ", type: "main", price: 12, id: 2, selected: true, quantity: 1},            
            {name: "cheesecake", type:"dessert", price:12, id:11, selected:true, quantity:1},            
            {name: "mojito", type:"drink", price:8, id: 7, selected:true, quantity:1},           
        ]

        const result = calculateBestDiscount(input)

        expect(result).to.eql(10)
    })
    it('should calculate the best discount for many items', function(){
        const input :menuItem[] = [
            {name: "White Russian ", type:"drink", price:10, id: 6, selected:true, quantity:1},
            {name: "Avo on toast", type: "main", price: 8, id: 0, selected: true, quantity: 1},
            {name: "Pesto pasta with pine nuts and mozzarella ", type: "main", price: 12, id: 2, selected: true, quantity: 1},            
            {name: "cheesecake", type:"dessert", price:12, id:11, selected:true, quantity:1},            
            {name: "mojito", type:"drink", price:8, id: 7, selected:true, quantity:1}, 
            {name: "White Russian ", type:"drink", price:6, id: 6, selected:true, quantity:1},
            {name: "Avo on toast", type: "main", price: 6, id: 0, selected: true, quantity: 1},
                      
        ]

        const result = calculateBestDiscount(input)

        expect(result).to.eql(11.2)
    })

})
