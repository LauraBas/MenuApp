import React, { Component, MouseEvent } from 'react';
import { MenuSection } from './MenuSection';
import { type } from 'os';

export interface menuItem {
    type: string
    name: string
    price: number
    selected: boolean
    quantity: number
}



export class Menu extends Component<{}, { items: menuItem[]}> {
    constructor(props :{}) {
        super(props)
        this.handleChange = this.handleChange.bind(this); 
        this.handleInput = this.handleInput.bind(this);
        this.alert = this.alert.bind(this);
        
        this.state = {
            items: [
                {type:"main", name:"Avo on toast", price:5.50, selected:false, quantity:1},
                {type:"main", name:"Lasagna", price:5.50, selected:false,quantity:1},
                {type:"main", name:"Pesto pasta with pine nuts and mozzarella", price:7.25, selected:false, quantity:1},
                {type:"drink", name:"Gin and Tonic", price:6.75, selected:false, quantity:1}, 
                {type:"drink", name:"Mojito", price:11.50, selected:false, quantity:1},
                {type:"dessert", name:"Brownie with vainilla ice cream", price:9.75, selected:false,quantity:1},
                {type:"dessert", name:"Sticky Toffy Puddin", price:8.40, selected:false,quantity:1}
            ]
        }
    }
    
    alert(e :React.MouseEvent){
        
        alert("Your order is cooking :) !")   
        setTimeout(function(){ alert("Your order is ready!!"); }, 2000) 
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
                    selected: !item.selected,
                    quantity: item.quantity

                 }
            }
        })

        this.setState({
            items: newItems
        })
      }    

      handleInput(quantity: number, name: string) {
          console.log(name, quantity)
          const newItems = this.state.items.map(item =>{
              if(item.name !== name){
                  return item
              } else{
                  return {
                    name: item.name,
                    type: item.type,
                    price: item.price,
                    selected: item.selected,
                    quantity: quantity

                  }
              }
          })
          this.setState({
            items: newItems
        })         
      }

      calculateTotal() {
        const checked = this.state.items.filter(i=> i.selected)               
        let total= 0
        for (let i = 0; i < checked.length; i++){
             total += checked[i].price * checked[i].quantity;             
        }       
        return total;
      }

    render() {
        return <div>                   
                    <h1>Menu</h1> 
                    <div className="menu">                   
                        <div className="container">
                            <MenuSection title={"Mains"} handleInput={this.handleInput} handleChange={this.handleChange} items={this.state.items.filter(i => i.type == "main")} />
                            <MenuSection title={"Drinks"} handleInput={this.handleInput} handleChange={this.handleChange} items={this.state.items.filter(i => i.type == "drink")}/>                       
                            <MenuSection title={"Desserts"} handleInput={this.handleInput} handleChange={this.handleChange} items={this.state.items.filter(i => i.type == "dessert")}/>                                     
                        </div>    
                    <p>Total Price: {this.calculateTotal()}</p>  
                    </div>                                                    
                    <button  onClick={this.alert} type="submit">Done!</button>                                        
                </div>
    }
}

export default Menu;
