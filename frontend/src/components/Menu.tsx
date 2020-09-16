import React, { Component, MouseEvent } from 'react';
import { MenuSection } from './MenuSection';
import { type } from 'os';

export interface menuItem {
    type: string
    name: string
    price: number
    selected: boolean
}



export class Menu extends Component<{}, { items: menuItem[]}> {
    constructor(props :{}) {
        super(props)
        this.handleChange = this.handleChange.bind(this);   
        this.state = {
            items: [
                {type:"main", name:"Avo on toast", price:5.50, selected:false},
                {type:"main", name:"Lasagna", price:5.50, selected:false},
                {type:"main", name:"Pesto pasta with pine nuts and mozzarella", price:7.25, selected:false},
                {type:"drink", name:"boGin and Tonic", price:6.75, selected:false}, 
                {type:"drink", name:"Mojito", price:11.50, selected:false},
                {type:"dessert", name:"Brownie with vainilla ice cream", price:9.75, selected:false},
                {type:"dessert", name:"Sticky Toffy Puddin", price:8.40, selected:false}
            ]
        }
    }

    handleChange(name: string) {
        const newItems = this.state.items.map(item => {
            if(item.name !== name){
                return item
            } else {
                return {
                    name: item.name,
                    type: item.type,
                    price: item.price,
                    selected: !item.selected
                 }
            }
        })

        this.setState({
            items: newItems
        })
      }     

      calculateTotal() {
        const checked = this.state.items.filter(i=> i.selected)
        let total = 0
        for (let i = 0; i < checked.length; i++){
             total += checked[i].price;             
        }
        return total;
      }

    render() {
        return <div>                   
                    <h1>Menu</h1> 
                    <div className="menu">                   
                        <div className="container">
                            <MenuSection title={"Mains"} handleChange={this.handleChange} items={this.state.items.filter(i => i.type == "main")} />
                            <MenuSection title={"Drinks"} handleChange={this.handleChange} items={this.state.items.filter(i => i.type == "drink")}/>                       
                            <MenuSection title={"Desserts"} handleChange={this.handleChange} items={this.state.items.filter(i => i.type == "dessert")}/>                                     
                        </div>    
                    <p>Total: {this.calculateTotal()}</p>  
                    </div>                                                    
                    <button type="submit">Done!</button>                                        
                </div>
    }
}

export default Menu;
