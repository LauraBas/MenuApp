import React, { Component } from 'react';
import { MenuSection } from './MenuSection';


export class Menu extends Component<{}, {}> {

    render() {
        return <div>                   
                    <h1>Menu</h1> 
                    <MenuSection title={"Meal"}/>
                    <MenuSection title={"Drinks"}/>
                    <MenuSection title={"Desserts"}/>  
                    <button type="submit">Done!</button>                 
                </div>
    }
}

export default Menu;

