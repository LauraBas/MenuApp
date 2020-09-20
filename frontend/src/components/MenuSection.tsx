import React, { Component } from 'react';
import { Items } from './Items';
import { menuItem } from "./Menu"
import { TableContainer, Table, Paper, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core';

export class MenuSection extends Component<{title: string; items: menuItem[];changeQuantity:(quantity: number, name: string) => void; selectedItem:(name: string) => void}, {}> {

    render() {
        
        return <div> 
            <h3>{this.props.title}</h3>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">   
                        <TableHead>
                            <TableRow>
                                <TableCell scope="col">Name</TableCell>
                                <TableCell scope="col">Price</TableCell>
                                <TableCell scope="col">Order</TableCell>
                                
                            </TableRow>                            
                            </TableHead>
                        <TableBody>     
                                {this.props.items.map((menuItem, i) => 
                                <Items 
                                    key={i}
                                    name={menuItem.name} 
                                    price={menuItem.price} 
                                    selected={menuItem.selected}
                                    quantity={menuItem.quantity}
                                    selectedItem={this.props.selectedItem}                                
                                    changeQuantity={this.props.changeQuantity}
                                />)}                  
                                
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
    }
}

export default MenuSection;