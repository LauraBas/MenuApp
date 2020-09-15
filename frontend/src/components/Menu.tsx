import React, { Component, MouseEvent } from 'react';
import { MenuSection } from './MenuSection';

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
    }

    handleChange() {
        alert('you clicked!'); 
      }

    render() {
        return <div>                   
                    <h1>Menu</h1> 
                    <MenuSection title={"Mains"} handleChange={this.handleChange} items={[{type:"main", name:"lulu", price:0, selected:false}, {type:"main", name:"daisy", price:0, selected:false}]}/>
                    <MenuSection title={"Drinks"} handleChange={this.handleChange} items={[{type:"drink", name:"bobo", price:0, selected:false}, {type:"drink", name:"Isla", price:0, selected:false}]}/>
                    <MenuSection title={"Desserts"} handleChange={this.handleChange} items={[{type:"dessert", name:"laua", price:0, selected:false}, {type:"dessert", name:"Leon", price:0, selected:false}]}/>  
                    <button type="submit">Done!</button>                 
                </div>
    }
}

export default Menu;
