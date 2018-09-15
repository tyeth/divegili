import React, { Component } from 'react';
import './DivingAreasList.css';

export class DivingAreasList extends Component {
    render() {
        let list = this.props.areas;
        let self = this;
        return (
            <ul className="DivingAreaList-ul">
                {[].map.call(list, function (item, i) {
                    if (item.hasOwnProperty("name")) {
                        return (<li className="DivingAreaList-li"><a className="DivingAreaList-a" href="#shop" onClick={self.props.selectArea} >{item.name}</a></li>)
                    }
                })
                }
            </ul>            
        );
    }
}

//DivingAreasList.defaultProps = {
//    areas: [
//        { name: "Area 1", locations: [{ name: "shop 1", info: { tel: "0800YES", map: "" } }] },
//        { name: "Area 2", locations: [{ name: "shop 2", info: { tel: "0800YES", map: "" } }] },
//    ]

//};

export default DivingAreasList;
