import { BrowserRouter, Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamy
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
      </div>
    </div>
  );
};

export default Header;