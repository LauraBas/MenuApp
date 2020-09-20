import React, { Component, MouseEvent } from 'react';
import { MenuSection } from './MenuSection';
import calculateHotOffer from '../calculateHotOffer';
import calculateHungryDateOffer from '../calculateHungryDateOffer';
import Items from './Items';



export interface menuItem {
    type: string
    name: string
    price: number
    selected: boolean
    quantity: number
    id: number
}



export class Menu extends Component<{}, { items: menuItem[], orderPending: boolean}> {
    constructor(props :{}) {
        super(props)
        this.selectedItem = this.selectedItem.bind(this); 
        this.changeQuantity = this.changeQuantity.bind(this);
        this.order = this.order.bind(this);

        this.state = { 
            items:[],
            orderPending: false,
        }

      }
       

    componentWillMount() {
        fetch(`http://localhost:4848/`)
        .then(res => res.json())
        .then(menuItem => {               
            this.setState({
                items: menuItem,
            })
           
        });
    }
    
    order(e :React.MouseEvent){  
        this.setState({
            orderPending: true           
        })
        fetch(`http://localhost:4848/`, {
            method: "POST", 
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.items.filter(item => item.selected))
        })    
        .then(res => res.text())
        .then(() => {
            alert("Your order is ready!!")
            this.setState({
                orderPending: false
            })
        })           
    }

    selectedItem(name: string) {
        const newItems = this.state.items.map(item => {
            if(item.name !== name){
                return item
            } else {
                return { 
                    name: item.name,
                    type: item.type,
                    price: item.price,
                    selected: !item.selected,
                    quantity: 1,
                    id: item.id

                 }
            }
        })

        this.setState({
            items: newItems
        })
      }    

    changeQuantity(quantity: number, name: string) {
        const newItems = this.state.items.map(item =>{
            if(item.name !== name){
                return item
            } else{
                return {
                name: item.name,
                type: item.type,
                price: item.price,
                selected: item.selected,
                quantity: quantity,
                id: item.id

                }
            }
        })
        this.setState({
        items: newItems
     })         
    }

    calculateTotal() {        
        const checked = this.state.items.filter(i=> i.selected)
        const firstOfferApplied = calculateHungryDateOffer(checked)    
        const secondOfferApplied = calculateHotOffer(firstOfferApplied.remainingItems)
        let total =  firstOfferApplied.total + secondOfferApplied.total 
        for (let i = 0; i < secondOfferApplied.remainingItems.length; i++){
                total += secondOfferApplied.remainingItems[i].price * secondOfferApplied.remainingItems[i].quantity;             
        }       
        return total;
    }

    render() {
        const noItemsChecked = this.state.items.filter(item => item.selected).length == 0 
        
        return <div>                   
                    <h1>Menu</h1> 
                    <div className="menu">                   
                        <div className="container">
                            <MenuSection title={"Mains"} changeQuantity={this.changeQuantity} selectedItem={this.selectedItem} items={this.state.items.filter(i => i.type == "main")} />
                            <MenuSection title={"Drinks"} changeQuantity={this.changeQuantity} selectedItem={this.selectedItem} items={this.state.items.filter(i => i.type == "drink")}/>                       
                            <MenuSection title={"Desserts"} changeQuantity={this.changeQuantity} selectedItem={this.selectedItem} items={this.state.items.filter(i => i.type == "dessert")}/>                                     
                        </div>                  
                    <p>Total Price: £{this.calculateTotal().toFixed(2)}</p>  
                    </div>  
                    {!this.state.orderPending 
                        ? <button onClick={this.order} type="submit" disabled={noItemsChecked}>Done!</button>
                        : <h2>Your order is on its way!</h2>
                    }                                                  
                </div>
    }
}

export default Menu;
