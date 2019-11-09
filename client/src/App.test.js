import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react'
import PlayerCard from './components/PlayerCard'
import Header from './components/Header'
import WorldCup from './components/WorldCup'
import {shallow, configure} from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('render without crashing', () =>{
  const container = render(<App/>);
  console.log(container);
  expect(container.firstChild).toMatchSnapshot();
});

test('render without Header crashing', ()=>{
  const header = render(<Header/>);
  console.log(header);
  expect(header.firstChild).toMatchSnapshot();
});

test('render without WorldCup crashing', ()=>{
  const world = render(<WorldCup/>);
  //console.log(world);
  expect(world.firstChild).toMatchSnapshot();
});



test('render player card without crashing', () =>{
  

  const wrapper = shallow(
    <PlayerCard aPlayer={{name: 'name', country: 'U S', searches: '400', id: 2020}}/>
  )
  console.log(wrapper.debug());
  
    expect(toJson(wrapper)).toMatchSnapshot()
});
