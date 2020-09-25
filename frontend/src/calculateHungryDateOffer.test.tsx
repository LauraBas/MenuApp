import calculateHungryDateOffer from "./calculateHungryDateOffer";
import { expect } from "chai";
import { menuItem } from "./components/Menu";


// only choose most expensive

// only applied once

// returns discount, not price

// returns remains items


describe("offer calculator", function() {
    it("applies no discount and returns items if empty", () => {
        const input :menuItem[] = []

        const result = calculateHungryDateOffer(input)

        const expectedDiscount = 0
        const expectedRemainingItems :menuItem[] = []
        expect(result.discount).to.eql(expectedDiscount)
        expect(result.remainingItems).to.have.deep.members(expectedRemainingItems)
    })

    it("applies no discount if not enough products", () => {
        const input = [{name: "Avo on toast", type: "main", price: 8.50, id: 0, selected: true, quantity: 1}]

        const result = calculateHungryDateOffer(input)

        const expectedDiscount = 0
        const expectedRemainingItems = [{name: "Avo on toast", type: "main", price: 8.50, id: 0, selected: true, quantity: 1}]
        expect(result.discount).to.eql(expectedDiscount)
        expect(result.remainingItems).to.have.deep.members(expectedRemainingItems)
    })

    it("applies one time discount", () => {
        const input = [
            {name: "Avo on toast", type: "main", price: 8, id: 0, selected: true, quantity: 1},
            {name: "Pesto pasta with pine nuts and mozzarella ", type: "main", price: 9, id: 2, selected: true, quantity: 1},
            {name: "mojito", type:"drink", price:8, id: 7, selected:true, quantity:1},
            {name: "White Russian ", type:"drink", price:9, id: 6, selected:true, quantity:1},
            {name: "cheesecake", type:"dessert", price:8, id:11, selected:true, quantity:1},
        ]

        const result = calculateHungryDateOffer(input)

        const expectedDiscount = 2
        const expectedRemainingItems :menuItem[] = []
        expect(result.discount).to.eql(expectedDiscount)
        expect(result.remainingItems).to.have.deep.members(expectedRemainingItems)
    })

    it("applies discount once on most expensive items and has remaining items", () => {
        const input = [
            {name: "White Russian ", type:"drink", price:12, id: 6, selected:true, quantity:1},
            {name: "Avo on toast", type: "main", price: 8.50, id: 0, selected: true, quantity: 1},
            {name: "Pesto pasta with pine nuts and mozzarella ", type: "main", price: 10, id: 2, selected: true, quantity: 1},
            {name: "Avo on toast", type: "main", price: 8.50, id: 0, selected: true, quantity: 1},
            {name: "cheesecake", type:"dessert", price:10, id:11, selected:true, quantity:1},
            {name: "Pesto pasta with pine nuts and mozzarella ", type: "main", price: 11, id: 2, selected: true, quantity: 1},
            {name: "mojito", type:"drink", price:8, id: 7, selected:true, quantity:1},
            {name: "mojito", type:"drink", price:8, id: 7, selected:true, quantity:1},
            {name: "White Russian ", type:"drink", price:10, id: 6, selected:true, quantity:1},
            {name: "cheesecake", type:"dessert", price:6.80, id:11, selected:true, quantity:1},
            {name: "cheesecake", type:"dessert", price:6.80, id:11, selected:true, quantity:1},
        ]

        const result = calculateHungryDateOffer(input)

        const expectedTotal = 13
        const expectedRemainingItems = [
            {name: "Avo on toast", type: "main", price: 8.50, id: 0, selected: true, quantity: 1},
            {name: "mojito", type:"drink", price:8, id: 7, selected:true, quantity:1},
            {name: "Avo on toast", type: "main", price: 8.50, id: 0, selected: true, quantity: 1},
            {name: "mojito", type:"drink", price:8, id: 7, selected:true, quantity:1},
            {name: "cheesecake", type:"dessert", price:6.80, id:11, selected:true, quantity:1},
            {name: "cheesecake", type:"dessert", price:6.80, id:11, selected:true, quantity:1}
        ]
        expect(result.discount).to.eql(expectedTotal)
        expect(result.remainingItems).to.have.deep.members(expectedRemainingItems)
    })
})


