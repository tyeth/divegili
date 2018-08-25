import React, { Component } from 'react';
import logo from './logo.svg';
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
                <ul className="diving-area-list">
                    <li className="diving-area-li"><a href="#"> AREA 1</a></li>
                    <li className="diving-area-li"><a href="#">AREA 1</a></li>
                    <li className="diving-area-li"><a href="#">AREA 1</a></li>
                </ul>
                <div className="diving-blurb">
                    Blah Blah
                </div>
                <div className="diving-area" style={style} >
                    <div className="diving-shop">
                        <span className="diving-shop-title">DIVE SHOP NAME</span>
                        <span className="diving-shop-info">TEL INFO</span>
                        <div className="diving-shop-map"></div>
                    </div>
                </div>
            </div>
        );
    }
}

App.defaultProps = {
    areas: {
        "Area 1":  [{name:"shop 1"}], "Area 2":[]},
   
};

export default App;
