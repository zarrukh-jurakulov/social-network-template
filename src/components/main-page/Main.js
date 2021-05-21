import React, { useState, useEffect } from 'react'
import './main.css'
import { IoReloadCircleOutline } from 'react-icons/io5'
import axios from 'axios';
import info from '../../assets/info.png'
import close from '../../assets/close.png'
import { USER_LOGIN, GET_CAPTCHA } from './../../constants'
import {useHistory} from 'react-router-dom'
import Profile from '../profile/profile'
import { connect } from "react-redux";
import {setEmail, setPassword, setCaptcha, setRememberMe} from './../../redux/actions/userActions'

const mapStateToProps = state => {
    return { 
        email: state.allUsers.email, 
        password: state.allUsers.password,
        rememberMe: state.allUsers.rememberMe,
        captcha: state.allUsers.captcha
    };
};


const mapDispatchToProps = dispatch => {
    return { 
        changeEmail: value => dispatch(setEmail(value)),
        changePassword: value => dispatch(setPassword(value)),
        changeRememberMe : value => dispatch(setRememberMe(value)),
        changeCaptcha: value=> dispatch(setCaptcha(value))
    };
};


const Main = (props) => {
    console.log('f', props.email)
    console.log('f2', props.password)
    console.log('f3', props.captcha)
    console.log('f4', props.rememberMe)
  
    

    const [postRequest, setPostRequest] = useState([])
    const [captchaRequest, setCaptchaRequest] = useState([])
    
    const [closeMessage, setCloseMessage] = useState(false)
    const [alert, setAlert] = useState('')
    
    useEffect(() => {
        getCaptchaData()
    }, [])

    

  
 
    const handleSubmit = (e) => {
        e.preventDefault();
        if(props.email.length < 1){
            setAlert('Error! Email cannot be empty')
            setCloseMessage(true)
        }else if(props.password.length < 4){
            setAlert("Error! Password cannot be less from 4")
            setCloseMessage(true)
        }else if (props.captcha.length < 1){
            setAlert("Error! Captcha cannot be empty")
            setCloseMessage(true)
        }else {
            sendInfo()
        }
    }

    const submit =  () => {
        getCaptchaData()
        //sendInfo()
    }

    let history = useHistory()

    // Send request email, password and captcha code with POST method 
    const sendInfo = async () => {
        let payload = {
            email: props.email,
            password: props.password,
            rememberMe: props.rememberMe, 
            captcha: props.captcha
        };

        let res = await axios.post(USER_LOGIN, payload);
            if(res.data.messages){
                setAlert(res.data.messages)
                setCloseMessage(true)
                
                console.log(res.data.message);
            }
            console.log(res);
            if(res.data.resultCode === 0){
                history.push("/profile")
            }
            }

        // Get captcha image with GET method
    const getCaptchaData = async () => {
        await axios.get(GET_CAPTCHA)
            .then(res => {
                // console.log('h',res.config.url);
                setCaptchaRequest(res.config.url);
            });
    }

    const refreshBtn = () => {
        window.location.reload(false)
        //captchaRequest.location.reload(false)
    }   
               
              
    return (
        <div className='mainPage'>

            { closeMessage && <div className='messageContainer'>
                <img className='infoMessageImg' src={info} alt="infoLogo"/>
                <div className='verifyingMessage'>
                    <span>{alert}</span>
                </div>
                <button className='closeBtn' onClick={()=> setCloseMessage(!closeMessage)}>
                   <img className='closeMessageImg' src={close} alt="close"/>
               </button>
            </div>}   
            
            <form onSubmit={handleSubmit} noValidate>
               <p>Email</p>
               <input className="mainPageInput" value={props.email} onChange={e=> props.changeEmail(e.target.value)} type="email" name="email" id="email"/>
               <p>Password</p>
               <input className="mainPageInput" value={props.password} onChange={e=> props.changePassword(e.target.value)} type="password" name="password" id="password"/>
               
                <div className='mainPageChechbox'>
                    <input type="checkbox" value={props.rememberMe} onChange={()=> props.changeRememberMe(!props.rememberMe)} name="checkbox" id="checkboxInput"/>
                    <p>Remember Me</p>
                </div>
                <div className='captcha'>
                    <div className='captchaCodeContainer'>
                       <div className='captcaCode'>
                          <img src={captchaRequest} alt='capcha-code' />
                       </div>
                       <div className='captchaReloadBtn' onClick={refreshBtn}><IoReloadCircleOutline /></div>
                    </div>
                    <div className='captchaInputContainer'>
                    <input value={props.captcha} onChange={e => props.changeCaptcha(e.target.value)} className='mainPageInput'  type="text" name="" id=""/>
                    </div>
                </div>
                <button className="submitBtn" onClick={submit}>SIGN IN</button> 
            </form>
        </div>
    )
}



export default connect(mapStateToProps,mapDispatchToProps)(Main);
