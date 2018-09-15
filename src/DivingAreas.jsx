import React, { Component } from 'react';
import './DivingAreas.css';
import DivingArea from './DivingArea';

const str = {
    divingAREAS: "Diving Areas",
    map: "map",

}

export class DivingAreas extends Component {
    render() {
        // this would be better as a className instead to avoid having to potentially override the original display value 
        let tstyle = { display: this.props.selected != null ? '' : 'none' };
        let self = this;
        //console.log("rendereD areas (" + tstyle.visibility + "," + this.props.selected + ")");
        if (this.props.areas != null /*&& this.props.areas.hasOwnProperty("length") && this.props.areas.length > 0*/)
            return (
                <div className="DivingAreas" style={tstyle} >
                    <h2 className="DivingAreas-h2">{str.divingAREAS}</h2>
                    {
                        [].map.call(this.props.areas, (item, i) => {
                            return <DivingArea item={item} selected={self.props.selected} />
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
