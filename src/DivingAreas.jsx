import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DivingArea from './DivingArea';

const str = {
    divingAREAS: "Diving Areas",
    map: "map",

}

class DivingAreas extends Component {
    constructor(props) {
        super(props);
        this.state = {selected: this.props.selected}
    }
    render() {
        let tstyle = { visibility: this.state.selected != null ? 'normal' : 'hidden' };
        let self = this;
        console.log("rendereD areas (" + tstyle.visibility + "," + this.state.selected + ")");
        if (this.props.areas != null /*&& this.props.areas.hasOwnProperty("length") && this.props.areas.length > 0*/)
            return (
                <div className="diving-areas" style={tstyle} >
                    <h2>{str.divingAREAS}</h2>
                    {
                        [].map.call(this.props.areas, (item, i) => {
                            return <DivingArea item={item} selected={self.state.selected} />
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
