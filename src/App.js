import React from 'react';

import Accordian from './components/Accordian';

const items = [
  { title: 'What is React?', content: 'React is a front end javascript framework' },
  { title: 'Why use React?', content: 'React is a favourite javascript lirary among engineers' },
  { title: 'How do you use React?', content: 'You use React by creating componenets' },
];

export default () => {
  return (
    <div>
      <Accordian items={items} />
    </div>
  )
}