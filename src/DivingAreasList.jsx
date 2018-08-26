import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const style = {
    visibility: "hidden"
};

class DivingAreasList extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        let list = this.props.areas;
        return (
            <ul className="diving-area-list">
                {[].map.call(list, function (item, i) {
                    if (item.hasOwnProperty("name")) {
                        return (<li className="diving-area-li"><a href="#">{item.name}</a></li>)
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
