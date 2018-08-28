import React, { Component } from 'react';
import './App.css';
import DivingShop from './DivingShop';

export class DivingShopSites extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h3>SomeDays Dives</h3>;

        //let item = this.props.item;
        //let selected = this.props.selected == item.name;
        //console.log("rendereD area " + item.name + " (sel:" + selected + ",state.sel:"+ this.props.selected + ")");
        //return (
        //    <div className="diving-area" style={{ display: selected ? '' : 'none' }} data-selected={selected} >
        //        {[].map.call(item.locations, (NEWITEM, i) => {
        //            return (
        //                <DivingShop item={NEWITEM} />
        //                );
        //        })}
        //    </div>
        //);
    }
}

export default DivingShopSites;
