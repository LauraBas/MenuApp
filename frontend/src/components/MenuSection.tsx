import React, { Component, MouseEvent } from 'react';
import { Items } from './Items';
import { menuItem } from "./Menu"


export class MenuSection extends Component<{title: string; items: menuItem[]; handleChange:() => void}, {}> {

    render() {
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
                                {this.props.items.map(menuItem => 
                                <Items name={menuItem.name} price={menuItem.price} handleChange={this.props.handleChange}/>)}                  
                                
                        </tbody>
                    </table>                                                                                                                                                                                
                </div>
    }
}

export default MenuSection;