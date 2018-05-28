import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

class Layout extends React.Component {
  render () {
    return (
      <div className="app">
        <header>
        	<Link to="/">Home</Link>
        	<Link to="/leagues">Leagues</Link>
        	<Link to="/teams">Teams</Link>
        	<Link to="/players">Players</Link>
        </header>
        { this.props.children }
      </div>
    )
  }
}

export default Layout;

