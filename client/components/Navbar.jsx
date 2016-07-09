import React, {Component} from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-default" role="navigation">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">JotForm</a>
        </div>
        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav navbar-right nav-group">
            <li><a href="#">Login</a></li>
            <li><a href="#">Sign up</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right nav-group">
            <li><a href="#">Templates</a></li>
            <li><a href="#">Themes</a></li>
            <li><a href="#">Plugings</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
