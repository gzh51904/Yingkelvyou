import React from 'react';
import './css/app.css'
import Home from './pages/Home/Home.jsx'
import SearchPage from './pages/SearchPage/SearchPage.jsx'
import Tickets from './pages/Tickets/Tickets.jsx'
import Details from './pages/Details/Details.jsx'

import 'lib-flexible'
import {Route, Switch, Redirect} from 'react-router-dom'
// import './rem.js'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/searchPage' component={SearchPage} />
        <Route path='/tickets' component={Tickets} />
        <Route path='/details'component={Details}/>
        <Redirect from="/*" to="home" component={Home} exact/>
      </Switch>
    </div>
  );
}

export default App;
