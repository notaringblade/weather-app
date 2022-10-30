import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom'
import { Collapse, Navbar, Nav, NavItem, NavbarToggler, NavbarBrand } from 'reactstrap'
import './index.css'


export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className='select-header' fixed='top' expand= 'md'>
      <NavbarBrand style={{color: "wheat", marginLeft: '20px', fontFamily: 'monospace', fontSize: '17px', fontWeight: 'bold'}} href="/">Weather App</NavbarBrand>
        <NavbarToggler onClick={toggle} style ={{ color: "wheat", backgroundColor: 'wheat'}}/>
        <Collapse isOpen={isOpen} navbar>
        <Nav  className='items'   justified>

          <NavItem>
          <NavLink className = "links" to= "/">Search</NavLink>
          </NavItem>

          <NavItem>
          <NavLink className = "links"   to= "/History">History</NavLink>
          </NavItem>
          
        </Nav>
        </Collapse>
    </Navbar>
  )
}