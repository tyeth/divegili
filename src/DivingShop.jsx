import React, { Component } from 'react';
import './App.css';

const style = {
    visibility: "hidden"
};
const imgMapStyle = {
    width: 50,
    height: 50
}

const str = {
    map: "map",

}

class DivingShop extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        let item = this.props.item;
        if(item.hasOwnProperty("info")) return (
                <div className="diving-shop">
                    <div className="diving-shop-title">{item.name}</div>
                    <div className="diving-shop-info"><span className="tel-icon">{item.info.tel}</span></div>
                    <div className="diving-shop-map">
                        <img className="diving-shop-map" src={item.info.map} style={imgMapStyle} alt={str.map} />
                    </div>
                </div>
        );
    }
}

//DivingShop.defaultProps = {
//    item: {
//        name: "Error",
//        info: {
//            tel: "0800ERROR",
//            email: "example@example.com",
//            whatsapp: "0800ERROR",
//            preferredMethod: "tel",
//            address: "1 Lucky Lane, Example Hill, FakeTown, UK. BS01 2AB",
//            map: "map-url",
//            contacts: [{
//                id: 1,
//                isEmployee: false,
//                lastUpdateProvided: "2008-12-12 12:00",
//                name: "name",
//                tel: "0800ERROR",
//                email: "example@example.com",
//                whatsapp: "0800ERROR",
//                address: "1 Lucky Lane, Example Hill, FakeTown, UK. BS01 2AB"
//            }]
//        },


//    }

//};

export default DivingShop;
