import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import './dropDown.css';

export default function DropdownLocations({setHistoryValue, setValue, dropDown, value}) {
    
    const [modal, setModal] = useState(false);


    const toggle = () => setModal(!modal);
    
    let location = require('country-state-city').State;

    const Locations = location.getStatesOfCountry("IN"); 

    const listItems = Locations.map((locations) =>  
    <div>
        <Button outline="true" color='light' onClick={()=> { toggle(); setValue(locations.name); }}>{locations.name}</Button>

    </div>
    );

    

    
    useEffect(() => {
        
        dropDown();
        console.log(value)
        
    }, [value]);
    

    
    return (
        <div className="dropDown">
          <Dropdown isOpen={modal} toggle={toggle} >
          <DropdownToggle caret>Choose Location</DropdownToggle>
          <DropdownMenu dark className='dropDownMenu'>
            {listItems}
          </DropdownMenu>
        </Dropdown>
      </div>
  
    
    )


}
