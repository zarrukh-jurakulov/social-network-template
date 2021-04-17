import React from 'react'
import './sidebar.css'
import logo from '../../assets/logo.png'
import home from '../../assets/home.png'
import info from '../../assets/info.png'
import help from '../../assets/help.png'
import {Link} from "react-router-dom";
import Modal from './Modal'

const Sidebar = ({toggle, visible}) => {

    return(
        <aside className='sidebar'>
            <img src={logo} className="chatLogo" alt="logo"/>
            <div className='sidebarContext'>
                <div className="pagesContainer">
                    <img src={home} className="pagesLogo" alt="home"/><Link to='/'>MAIN</Link>     
                </div>
                <div className="pagesContainer">
                    <img src={info} className="pagesLogo" alt="info"/><Link to='/info'>INFO</Link>  
                </div>
                <div className="pagesContainer">
                    <img src={help} className="pagesLogo" alt="help"/><Link to='/help'> HELP</Link>   
                </div>
                
               
            </div>
             <Modal  visible={visible} toggle={toggle} />
                <p onKeyUp={toggle} className="ctrlPlusenter">Ctrl  + ENTER</p>

        </aside>
    )
}

export default Sidebar