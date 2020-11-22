import React from 'react';

const Accordian = ({ items }) => {
  const renderedItems = items.map(i =>
    (<React.Fragment key={i.title}>
      <div className="title active">
        <i className="dropdown icon"></i>
        {i.title}
      </div>

      <div className="content active">
        <p>{i.content}</p>
      </div>
    </React.Fragment>)
  );

  return (
    <div className="ui styled accordion">
      { renderedItems}
    </div>
  )
}

export default Accordian;