import React, { Component, ChangeEvent } from 'react';
import { TableRow, TableCell, Checkbox } from '@material-ui/core';


export class Items extends Component<{name: string; price: number; selected: boolean;quantity: number; changeQuantity:(quantity: number, name: string) => void; selectedItem:(name: string) => void}, {}> {
    constructor(props: any) {
        super(props)
        this.onClick = this.onClick.bind(this); 
        this.onChange = this.onChange.bind(this);  
    }
    onClick(e :React.MouseEvent) {
        this.props.selectedItem(this.props.name);   
    }
    onChange(e: ChangeEvent<HTMLInputElement>) {
        let quantity = parseInt(e.target.value)
        this.props.changeQuantity(quantity, this.props.name);       

    }

    render() {
        let isSelected = this.props.selected;
        let quantity;
        if (isSelected){
            quantity =           
            <TableCell scope="row">
            <input className="quantity" onChange={this.onChange}  type="number" min="1" placeholder="1"value={this.props.quantity}/>
            </TableCell>                        
        }
        return <TableRow>
                    <TableCell scope="row"><p>{this.props.name}</p></TableCell>
                    <TableCell scope="row"><p>£{this.props.price.toFixed(2)}</p> </TableCell>                               
                    <TableCell scope="row">
                        <Checkbox checked={this.props.selected} onClick={this.onClick} /> 
                    </TableCell>                   
                    {quantity}                                                         
                </TableRow>
    }
}



export default Items;