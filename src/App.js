import React, { Component } from 'react';
import logo from './logo.svg';
import DivingAreas from './DivingAreas';
import DivingAreasList from './DivingAreasList';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { selected: null };

        this.selectArea = this.selectArea.bind(this);

    }

    selectArea(e) {
        let ev = e.target.textContent;
        this.setState({ selected: ev });
        e.preventDefault();
        return false;
    }

    render() {
        return (

            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Dive Gili</h1>
                </header>
                <DivingAreasList areas={this.props.areas} selectArea={this.selectArea} selected={this.state.selected} />
                <div className="diving-blurb">
                    Blah Blah
                </div>


                <DivingAreas areas={this.props.areas} selected={this.state.selected} />

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
                        name: "shop 1a",
                        info:
                        {
                            tel: "0800YES",
                            map: ""
                        }
                    }
                ,
                {
                    name: "shop 1b",
                    info:
                    {
                        tel: "0800YES",
                        map: ""
                    }
                }
                ]
        },
        { name: "Area 2", locations: [{ name: "shop 2", info: { tel: "0800YES", map: "" } }] },
        {
            name: "Error Example",
            locations: [
                {
                    name: "Error",
                    info: {
                        tel: "0800ERROR",
                        email: "example@example.com",
                        whatsapp: "0800ERROR",
                        preferredMethod: "tel",
                        address: "1 Lucky Lane, Example Hill, FakeTown, UK. BS01 2AB",
                        map: "map-url",
                        contacts: [{
                            id: 1,
                            isEmployee: false,
                            lastUpdateProvided: "2008-12-12 12:00",
                            name: "name",
                            tel: "0800ERROR",
                            email: "example@example.com",
                            whatsapp: "0800ERROR",
                            address: "1 Lucky Lane, Example Hill, FakeTown, UK. BS01 2AB"
                        }]
                    },

                }
            ]
        }
    ]
};

export default App;
