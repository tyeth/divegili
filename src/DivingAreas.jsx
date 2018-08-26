import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DivingArea from './DivingArea';

const style = {
    visibility: "hidden"
};

const str = {
    divingAREAS: "Diving Areas",
    map: "map",

}

class DivingAreas extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        if (this.props.areas != null /*&& this.props.areas.hasOwnProperty("length") && this.props.areas.length > 0*/)
            return (
                <div className="diving-areas" style={style} >
                    <h2>{str.divingAREAS}</h2>
                    {
                        [].map.call(this.props.areas, (item, i) => {
                            return <DivingArea item={item} />
                        })
                    }
                </div>
            );
        else return null;
    }
}

//DivingAreas.defaultProps = {
//    areas: [
//        { name: "Area 1", locations: [{ name: "shop 1", info: { tel: "0800YES", map: "" } }] },
//        { name: "Area 2", locations: [{ name: "shop 2", info: { tel: "0800YES", map: "" } }] },
//    ]

//};

export default DivingAreas;
