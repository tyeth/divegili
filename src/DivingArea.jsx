import React, { Component } from 'react';
import './DivingArea.css';
import DivingShop from './DivingShop';

export class DivingArea extends Component {
  
    render() {
        let item = this.props.item;
        let selected = this.props.selected === item.name;
        //console.log("rendereD area " + item.name + " (sel:" + selected + ",state.sel:"+ this.props.selected + ")");
        return (
            <div className="DivingArea" style={{ display: selected ? '' : 'none' }} data-selected={selected} >
                {[].map.call(item.locations, (NEWITEM, i) => {
                    return (
                        <DivingShop item={NEWITEM} />
                        );
                })}
            </div>
        );
    }
}

export default DivingArea;
