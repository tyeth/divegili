import React, { Component } from 'react';
import logo from './logo.svg';
import DivingAreas from './DivingAreas';
import DivingAreasList from './DivingAreasList';
import './App.css';
const style = {
    visibility: "hidden"
};

class App extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (

            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Dive Gili</h1>
                </header>
                <DivingAreasList areas={this.props.areas} />
                <div className="diving-blurb">
                    Blah Blah
                </div>


                <DivingAreas areas={this.props.areas} />
                
            </div>
        );
    }
}

App.defaultProps = {
    areas: [
        {
            name: "Area 1",
            locations:
                [
                    {
                        name: "shop 1",
                        info:
                        {
                            tel: "0800YES",
                            map: ""
                        }
                    }]
        },
        { name: "Area 2", locations: [{ name: "shop 2", info: { tel: "0800YES", map: "" } }] },
    ]
};

export default App;
