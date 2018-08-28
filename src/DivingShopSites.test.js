import React from 'react';
import ReactDOM from 'react-dom';
import  TestUtils  from 'react-dom/test-utils';
import DivingShopSites from './DivingShopSites';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DivingShopSites />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has correct heading', ()=> {
	const div = document.createElement('div');
	ReactDOM.render(<DivingShopSites />,div);
	var h1s =  div.getElementsByTagName("H3");
	expect(h1s.length).toEqual(1);
	expect(h1s[0].textContent).toContain("Dives");
});
