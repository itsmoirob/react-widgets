import React, { useState } from 'react';

const Accordian = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (idx) => {
    setActiveIndex(idx);
  };

  const renderedItems = items.map((i, idx) => {
    const isActive = activeIndex === idx ? 'active' : '';

    return (
      <React.Fragment key={i.title}>
        <div className={`${isActive} title`} onClick={e => onTitleClick(idx)}>
          <i className="dropdown icon"></i>
          {i.title} : {isActive}
        </div>

        <div className={`${isActive} content`}>
          <p>{i.content}</p>
        </div>
      </React.Fragment>
    )
  });

  return (
    <div className="ui styled accordion">
      { renderedItems}
    </div>
  )
}

export default Accordian;