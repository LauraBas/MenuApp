import React, { Component } from 'react';
import { MenuSection } from './MenuSection';
import calculateHotOffer from '../calculateHotOffer';
import calculateHungryDateOffer from '../calculateHungryDateOffer';
import {Button,  ListItem, Dialog, DialogTitle, CircularProgress} from '@material-ui/core';
import Offers from './Offers';


export interface menuItem {
    type: string
    name: string
    price: number
    selected: boolean
    quantity: number
    id: number
}

export class Menu extends Component<{}, { items: menuItem[], orderPending: boolean, orderDelivered: boolean}> {
    constructor(props :{}) {
        super(props)
        this.selectedItem = this.selectedItem.bind(this); 
        this.changeQuantity = this.changeQuantity.bind(this);
        this.enumerateItems = this.enumerateItems.bind(this);
        this.order = this.order.bind(this);

        this.state = { 
            items:[],
            orderPending: false,
            orderDelivered: false
        }

    }
       
    componentWillMount() {
        const cache = localStorage.getItem('items')
        if (cache) {
            this.setState({items: JSON.parse(cache)})
        } else {
            fetch(`http://localhost:4848/`)
            .then(res => res.json())
            .then(menuItem => {               
                this.setState({
                    items: menuItem,
                })
            });
        }
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
            const newItems = this.state.items.map(item => {
                return {
                    name: item.name,
                    type: item.type,
                    price: item.price,
                    selected: false,
                    quantity: 1,
                    id: item.id
                }
            })           
            this.setState({
                orderPending: false,
                orderDelivered: true, 
                items: newItems
            })
            localStorage.setItem('items', JSON.stringify(newItems)) 
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

        localStorage.setItem('items', JSON.stringify(newItems))
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
        localStorage.setItem('items', JSON.stringify(newItems))      
    }

    enumerateItems(item: menuItem){
        const arr = []
        for(let i = 0; i < item.quantity; i++) {
            arr.push(item)
        }
        return arr
    }

    calculateTotal() {        
        const checked = this.state.items.filter(i=> i.selected)
        const enumeratedItems = checked.flatMap(this.enumerateItems)
        const firstOfferApplied = calculateHungryDateOffer(enumeratedItems)    
        const secondOfferApplied = calculateHotOffer(firstOfferApplied.remainingItems)
        let total =  firstOfferApplied.total + secondOfferApplied.total 

        for (let i = 0; i < secondOfferApplied.remainingItems.length; i++){
                total += secondOfferApplied.remainingItems[i].price;             
        }       
        return total;
    }
  
      
    render() {
        const noItemsChecked = this.state.items.filter(item => item.selected).length == 0 
        
        return <div>                   
                    <h1>Menu</h1> 
                    <div className="menu"> 
                        <div className="container">                                                                                     
                            <Offers />
                            <MenuSection title={"Mains"} changeQuantity={this.changeQuantity} selectedItem={this.selectedItem} items={this.state.items.filter(i => i.type == "main")} />
                            <MenuSection title={"Drinks"} changeQuantity={this.changeQuantity} selectedItem={this.selectedItem} items={this.state.items.filter(i => i.type == "drink")}/>                       
                            <MenuSection title={"Desserts"} changeQuantity={this.changeQuantity} selectedItem={this.selectedItem} items={this.state.items.filter(i => i.type == "dessert")}/>                                     
                        </div>  
                        
                        {this.state.items.filter(item => item.selected).map(i => 
                            <ListItem className="orderItems">{i.name}  {i.quantity} </ListItem>)}                
                        
                        <p>Total Price: £{this.calculateTotal().toFixed(2)}</p>  
                    </div>  
                    {!this.state.orderPending 
                        ? <Button variant="contained"color="secondary"onClick={this.order} type="submit" disabled={noItemsChecked}>Place your order!</Button>
                        : <CircularProgress color="secondary"/>
                    }    
                    <Dialog                        
                        open={this.state.orderDelivered}
                        onClose={() => {this.setState({orderDelivered: false})}}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">Your order is ready!</DialogTitle>
                    </Dialog>  
                                                
                </div>
    }
}

export default Menu;

