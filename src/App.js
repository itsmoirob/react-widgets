import React from 'react';

// import Accordian from './components/Accordian';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';

// const items = [
//   { title: 'What is React?', content: 'React is a front end javascript framework' },
//   { title: 'Why use React?', content: 'React is a favourite javascript lirary among engineers' },
//   { title: 'How do you use React?', content: 'You use React by creating componenets' },
// ];

const options = [
  {label: 'The color red', value: 'red'},
  {label: 'The color green', value: 'green'},
  {label: 'A shade of blue', value: 'blue'},
]

const App = () => {
  return (
    <div>
      <Dropdown options={options} />
    </div>
  )
}

export default App;