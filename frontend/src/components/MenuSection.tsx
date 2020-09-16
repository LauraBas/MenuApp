import React, { Component } from 'react';
import { Items } from './Items';
import { menuItem } from "./Menu"


export class MenuSection extends Component<{title: string; items: menuItem[]; handleInput:(quantity: number, name: string) => void; handleChange:(name: string) => void}, {}> {

    render() {
        console.log(this.props)
        return <div> 
            <h3>{this.props.title}</h3>
            <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Order</th>
                                
                            </tr>                            
                        </thead>
                        <tbody>     
                                {this.props.items.map((menuItem, i) => 
                                <Items 
                                    key={i}
                                    name={menuItem.name} 
                                    price={menuItem.price} 
                                    selected={menuItem.selected}
                                    quantity={menuItem.quantity}
                                    handleChange={this.props.handleChange}                                
                                    handleInput={this.props.handleInput}
                                />)}                  
                                
                        </tbody>
                    </table>                                                                                                                                                                                
                </div>
    }
}

export default MenuSection;