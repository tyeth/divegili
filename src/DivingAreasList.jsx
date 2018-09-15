import React, { Component } from 'react';
import './DivingAreasList.css';

export class DivingAreasList extends Component {
    render() {
        let list = this.props.areas;
        let self = this;
        return (
            <div className="DivingAreasList">
                <ul className="DivingAreasList-ul">
                    {[].map.call(list, function (item, i) {
                        if (item.hasOwnProperty("name")) {
                            return (<li className="DivingAreasList-li"><a className="DivingAreasList-a" href="#shop" onClick={self.props.selectArea} >{item.name}</a></li>)
                        }
                    })
                    }
                </ul>
            </div>
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
