import React from 'react';

const Link = ({ path, children }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();

    window.history.pushState({}, '', path);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  return <a onClick={onClick} href={path} className="item">{children}</a>
}

export default Link;