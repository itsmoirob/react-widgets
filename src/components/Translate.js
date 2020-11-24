import React, { useState } from 'react';
import Dropdown from './Dropdown';

const Translate = () => {
  const options = [
    { label: 'Afrikans', value: 'af' },
    { label: 'Arabic', value: 'ar' },
    { label: 'Hindi', value: 'hi' }
  ];

  const [language, setLanguage] = useState(options[0]);

  return (
    <div>
      <Dropdown options={options} selected={language} onSelectedChange={setLanguage} title="Select a language" />
    </div>
  )
}

export default Translate;