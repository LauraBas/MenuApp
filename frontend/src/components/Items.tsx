import React, { Component } from 'react';


export class Items extends Component<{name: string; price: number; handleChange:() => void}, {}> {
    constructor(props: any) {
        super(props)
        this.onClick = this.onClick.bind(this);   
    }
    onClick(e :React.MouseEvent) {
        e.preventDefault();
        this.props.handleChange();   
    }

    render() {
        return <tr>
                    <td scope="row"><p>{this.props.name}</p></td>
                    <td scope="row"><p>{this.props.price}</p> </td>                               
                    <td scope="row"><input type="checkbox" onClick={this.onClick}/> </td>                    
                </tr>
    }
}



export default Items;