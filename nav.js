import React from 'react';
import NavComponents from './navcomponents';
import avatar from '@material-ui/core';
import { Menu } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import './nav.css';


function Nav(){
    return(
        <div className='container'>
            <div className='nav_left'>
                <NavComponents icon={Menu}></NavComponents>
                <img className='img' src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt=''></img>
                
                    <SearchIcon className="search_box"/>
                    <input type="text" placeholder="Search" />
                
            </div>
            <div className='nav_right'>
               <NavComponents Icon={AppsIcon} />
               <NavComponents Icon={NotificationsIcon} />
               <NavComponents avatar />
                
               

            </div>

        </div>
    )
}
export default Nav;