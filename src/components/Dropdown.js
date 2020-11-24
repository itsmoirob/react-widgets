import React, { useState } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const renderedOptions = options.map(o => {
    if (o.value === selected.value) return;

    return (
      <div key={o.value} className="item" onClick={() => onSelectedChange(o)}>
        {o.label}
      </div>
    )
  });

  const [open, setOpen] = useState(false);

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a colour</label>
        <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown;