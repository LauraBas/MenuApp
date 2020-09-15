import React, { Component } from 'react';
import { Items } from './Items';


export class MenuSection extends Component<{title: string}, {}> {

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
                                <Items name={"test"} price={10.25}/>                                                            
                                <Items name={"test"} price={10.25}/>                                                                                                               
                                <Items name={"test"} price={10.25}/>                                                                                                                                                                                                      
                        </tbody>
                    </table>                             
                      
                                                                                                                             
                </div>
    }
}

export default MenuSection;