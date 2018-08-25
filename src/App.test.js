import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has correct heading', ()=> {
	const div = document.createElement('div');
	ReactDOM.render(<App />,div);
	var h1s =  div.getElementsByTagName("H1");
	expect(h1s.length).toEqual(1);
	expect(h1s[0].textContent).toEqual("Dive Gili");
});

it('has a list of areas', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />,div);
	var areas = div.getElementsByClassName("diving-area-li")
	expect(areas!=null).toEqual(true);
	expect(areas.length>0).toEqual(true);
});

it('has clickable links for areas', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    var areas = div.getElementsByClassName("diving-area-li")
    expect(areas != null).toEqual(true);
    expect(areas.length > 0).toEqual(true);
    for(var i=0;i<areas.length;i++) {
		var vale = areas[i]
		expect(vale).toEqual(expect.anything())
        expect(vale.firstChild.tagName).toEqual("A");
        expect(vale.firstChild.getAttribute("href")).toEqual(expect.anything())
    }

});

it('has hidden areas on startup', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />,div);
	var areas = div.getElementsByClassName("diving-area")
	expect(areas!=null).toEqual(true);
    expect(areas.length > 0).toEqual(true);
    expect(areas[0].style.visibility).toEqual("hidden");//.toHaveProperty('style', { "visibility": "hidden" })
});

it("has dive shops in areas", () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    var areas = div.getElementsByClassName("diving-area")
    expect((areas[0].getElementsByClassName("diving-shop")).length).toEqual(1);
});

