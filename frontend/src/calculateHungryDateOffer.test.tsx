import calculateHungryDateOffer from "./calculateHungryDateOffer";
import { expect } from "chai";
import { menuItem } from "./components/Menu";


describe("offer calculator", function() {
    it("applies no discount and returns items if empty", () => {
        const input :menuItem[] = []

        const result = calculateHungryDateOffer(input)

        const expectedTotal = 0
        const expectedRemainingItems :menuItem[] = []
        expect(result.total).to.eql(expectedTotal)
        expect(result.remainingItems).to.have.deep.members(expectedRemainingItems)
    })

    it("applies no discount if not enough products", () => {
        const input = [{name: "Avo on toast", type: "main", price: 8.50, id: 0, selected: true, quantity: 1}]

        const result = calculateHungryDateOffer(input)

        const expectedTotal = 0
        const expectedRemainingItems = [{name: "Avo on toast", type: "main", price: 8.50, id: 0, selected: true, quantity: 1}]
        expect(result.total).to.eql(expectedTotal)
        expect(result.remainingItems).to.have.deep.members(expectedRemainingItems)
    })

    it("applies one time discount", () => {
        const input = [
            {name: "Avo on toast", type: "main", price: 8.50, id: 0, selected: true, quantity: 1},
            {name: "Pesto pasta with pine nuts and mozzarella ", type: "main", price: 9.50, id: 2, selected: true, quantity: 1},
            {name: "mojito", type:"drink", price:8, id: 7, selected:true, quantity:1},
            {name: "White Russian ", type:"drink", price:9.20, id: 6, selected:true, quantity:1},
            {name: "cheesecake", type:"dessert", price:6.80, id:11, selected:true, quantity:1},
        ]

        const result = calculateHungryDateOffer(input)

        const expectedTotal = 40
        const expectedRemainingItems :menuItem[] = []
        expect(result.total).to.eql(expectedTotal)
        expect(result.remainingItems).to.have.deep.members(expectedRemainingItems)
    })

    it("applies discount twice and has remaining items", () => {
        const input = [
            {name: "Avo on toast", type: "main", price: 8.50, id: 0, selected: true, quantity: 1},
            {name: "Pesto pasta with pine nuts and mozzarella ", type: "main", price: 9.50, id: 2, selected: true, quantity: 1},
            {name: "mojito", type:"drink", price:8, id: 7, selected:true, quantity:1},
            {name: "White Russian ", type:"drink", price:9.20, id: 6, selected:true, quantity:1},
            {name: "cheesecake", type:"dessert", price:6.80, id:11, selected:true, quantity:1},
            {name: "Avo on toast", type: "main", price: 8.50, id: 0, selected: true, quantity: 1},
            {name: "Pesto pasta with pine nuts and mozzarella ", type: "main", price: 9.50, id: 2, selected: true, quantity: 1},
            {name: "mojito", type:"drink", price:8, id: 7, selected:true, quantity:1},
            {name: "White Russian ", type:"drink", price:9.20, id: 6, selected:true, quantity:1},
            {name: "cheesecake", type:"dessert", price:6.80, id:11, selected:true, quantity:1},
            {name: "cheesecake", type:"dessert", price:6.80, id:11, selected:true, quantity:1},
        ]

        const result = calculateHungryDateOffer(input)

        const expectedTotal = 80
        const expectedRemainingItems = [{name: "cheesecake", type:"dessert", price:6.80, id:11, selected:true, quantity:1},]
        expect(result.total).to.eql(expectedTotal)
        expect(result.remainingItems).to.have.deep.members(expectedRemainingItems)
    })
})


