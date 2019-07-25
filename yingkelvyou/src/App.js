import React from 'react';
import './css/app.css'
import Home from './pages/Home/Home.jsx'
import SearchPage from './pages/SearchPage/SearchPage.jsx'
import 'lib-flexible'
import {Route, Switch, Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/SearchPage' component={SearchPage} />
        <Redirect from="/*" to="home" component={Home} exact/>
      </Switch>
    </div>
  );
}

export default App;