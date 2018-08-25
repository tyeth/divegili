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
	var areas = div.getElementsByClassName("diving-area")
	expect(areas!=null).toEqual(true);
	expect(areas.length>0).toEqual(true);
});