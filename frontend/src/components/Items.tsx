import React, { Component } from 'react';


export class Items extends Component<{name: string; price: number}, {}> {

    render() {
        return <tr>
                    <td scope="row"><p>{this.props.name}</p></td>
                    <td scope="row"><p>{this.props.price}</p> </td>                               
                    <td scope="row"><input type="checkbox" /> </td>                    
                </tr>
    }
}



export default Items;