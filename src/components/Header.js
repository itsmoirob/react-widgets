import React from 'react';
import Link from './Link';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link path="/">Accordian</Link>
      <Link path="/dropdown">Dropdown</Link>
      <Link path="/list">Search</Link>
      <Link path="/translate">Translate</Link>
    </div>
  )
}

export default Header;