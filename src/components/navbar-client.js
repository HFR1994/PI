import React, { Component } from 'react';
import { Nav,Navbar,NavItem} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./navbar-client.css";
import {connect} from 'react-redux';


class NavbarClient extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    this.props.loggedOut() 
  }

  render() {
    const loggedIn = this.props.logged;
    return (
      <div>
        {loggedIn ? (
        <Navbar className= 'clientNav' >
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/home">
                Logo
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav className='styleNav'>
              <NavItem eventKey={1} href="/home" className='itesmNav' >
                  Dashboard
              </NavItem>
              <NavItem eventKey={2} href="/clients" className='itesmNav' >
                  Clients
              </NavItem>
              {//
              //<NavItem eventKey={3} href="#" className='itesmNav' >
               // <Link to="/ajustes" >
                //  Ajustes
                //</Link>
              //</NavItem>
              }
            </Nav>
            <Nav>
              <NavItem eventKey={4} href="#" onClick={this.logout}>
                  Logout
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        ):(
          <div/>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    logged: state.logged
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    loggedOut : () => dispatch({type: 'LOGGED_OUT'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarClient);