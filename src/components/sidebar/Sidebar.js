import React from 'react'
import './sidebar.css'
import logo from '../../assets/logo.png'
import home from '../../assets/home.png'
import info from '../../assets/info.png'
import help from '../../assets/help.png'
import {Link} from "react-router-dom";
import Modal from './Modal'
import useModal from './useModal'

const Sidebar = ({toggle, visible}) => {

  

//   function  keyDownHandler(e){
//         if(e.keyCode === 13 && e.ctrlKey) {
//             this.showMessage()
//         }
//       }
//     function  componentDidMount() {
//         document.addEventListener("keydown", this.keyDownHandler)
//       }
//     function  componentWillUnmount(){
//         document.removeEventListener('keydown',this.keydownHandler);
//       }
    
    return(
        <aside className='sidebar'>
            <img src={logo} alt="logo"/>
            <ul className='sidearContext'>
                <Link to='/'><li><img src={home} alt="home"/> MAIN</li></Link>   
                <Link to='/info'> <li><img src={info} alt=""/> INFO</li></Link> 
                <Link to='/help'><li><img src={help} alt=""/> HELP</li></Link>  
                 <Modal  visible={visible} toggle={toggle} />
                  <button onClick={toggle}>Show Modal</button>
                  <p onKeyUp={toggle}>Ctrl  + ENTER</p>
            </ul>

           
          
        </aside>
    )
}

export default Sidebar