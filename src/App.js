import React, { useState } from 'react';

// import Accordian from './components/Accordian';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

// const items = [
//   { title: 'What is React?', content: 'React is a front end javascript framework' },
//   { title: 'Why use React?', content: 'React is a favourite javascript lirary among engineers' },
//   { title: 'How do you use React?', content: 'You use React by creating componenets' },
// ];

// const options = [
//   { label: 'The colour red', value: 'red' },
//   { label: 'The colour green', value: 'green' },
//   { label: 'A shade of blue', value: 'blue' },
// ]

const App = () => {
  // const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Translate />
      {/* <Dropdown options={options} selected={selected} onSelectedChange={setSelected} /> */}
    </div>
  )
}

export default App;