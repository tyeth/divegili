import React, { Component } from 'react';
import './App.css';
import DivingShop from './DivingShop';

const style = {
    visibility: "hidden"
};
const imgMapStyle = {
    width: 50,
    height: 50
}

const str = {
    divingAREAS: "Diving Areas",
    map: "map",

}

class DivingArea extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        let item = this.props.item;
        return (
            <div className="diving-area" style={style} >
                {[].map.call(item.locations, (NEWITEM, i) => {
                    return (
                        <DivingShop item={NEWITEM} />
                        );
                })}
            </div>
        );
    }
}

//DivingArea.defaultProps = {
//    item: {
//        name: "Error",
//        info: {
//            tel: "0800ERROR",
//            email: "example@example.com",
//            whatsapp: "0800ERROR",
//            preferredMethod: "tel",
//            address: "1 Lucky Lane, Example Hill, FakeTown, UK. BS01 2AB",
//            map:"map-url",
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

export default DivingArea;
