import React from 'react';
import './css/app.css'
import Home from './pages/Home/Home.jsx'
import Mine from './pages/Mine/Mine.jsx'
import Login from './pages/Mine/login.jsx'
import MyMsg from './pages/Mine/myMsg.jsx'
import AllList from './pages/Mine/allList.jsx'
import GoodsList from './pages/Mine/goodsList.jsx'
import Shop from './pages/Mine/shop.jsx'
import SearchPage from './pages/SearchPage/SearchPage.jsx'
import 'lib-flexible'
import {Route, Switch, Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/home' component={Home} />
	      <Route path='/mine' component={Mine}/>
	      <Route path='/mymsg' component={MyMsg}/>
	      <Route path='/allList' component={AllList}/>
	      <Route path='/goodsList' component={GoodsList}/>
        <Route path='/login' component={Login}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/SearchPage' component={SearchPage} />
        <Redirect from="/*" to="home" component={Home} exact/>
      </Switch>
    </div>
  );
}

export default App;
