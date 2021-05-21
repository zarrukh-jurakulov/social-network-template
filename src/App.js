import React from 'react'
import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main-page/Main'
import Profile from './components/profile/profile'
import Info from './components/info-page/Info'
import  Help  from './components/help-page/Help'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
function App(props) {
  
  const [visible, setVisible] = React.useState(false);

  function toggle() {
    setVisible(!visible)
  }

  React.useEffect(() => {
    const keyHandler = (e) => {
      if (e.keyCode === 13 && e.ctrlKey) toggle();
    }
    document.addEventListener('keydown', keyHandler);

    return () => {
      document.removeEventListener('keydown', keyHandler);
    }
  }, [])



  return (
    <div className="App">
      <BrowserRouter>

      
        <Sidebar visible={visible} toggle={toggle} />
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
          <Route path='/info'>
            <Info />
          </Route>
          <Route path='/help'>
            <Help />
          </Route>

        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
