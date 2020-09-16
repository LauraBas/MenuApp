import React, { Component, ChangeEvent } from 'react';


export class Items extends Component<{name: string; price: number; selected: boolean;quantity: number; handleInput:(quantity: number, name: string) => void; handleChange:(name: string) => void}, {}> {
    constructor(props: any) {
        super(props)
        this.onClick = this.onClick.bind(this); 
        this.onChange = this.onChange.bind(this);  
    }
    onClick(e :React.MouseEvent) {
        this.props.handleChange(this.props.name);   
    }
    onChange(e: ChangeEvent<HTMLInputElement>) {
        let quantity = parseInt(e.target.value)
        this.props.handleInput(quantity, this.props.name);       

    }

    render() {
        let isSelected = this.props.selected;
        let quantity;
        if (isSelected){
            quantity =           
            <td scope="row">
            <input className="quantity" onChange={this.onChange}  type="number" min="1" value={this.props.quantity}/> 
            </td>                        
        }
        return <tr>
                    <td scope="row"><p>{this.props.name}</p></td>
                    <td scope="row"><p>{this.props.price}</p> </td>                               
                    <td scope="row">
                        <input checked={this.props.selected} type="checkbox" onClick={this.onClick} /> 
                    </td>                   
                    {quantity} 
                      
                                     
                </tr>
    }
}



export default Items;