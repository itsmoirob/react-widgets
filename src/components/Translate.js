// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState } from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const Translate = () => {
  const options = [
    { label: 'Afrikans', value: 'af' },
    { label: 'Arabic', value: 'ar' },
    { label: 'Hindi', value: 'hi' }
  ];

  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input value={text} onChange={e => setText(e.target.value)} type="text" />
        </div>
      </div>

      <Dropdown options={options} selected={language} onSelectedChange={setLanguage} title="Select a language" />

      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  )
}

export default Translate;