import React from 'react';
import './css/app.css';
import './assets/js/rem.js';
import Home from './pages/Home/Home.jsx'
import Mine from './pages/Mine/Mine.jsx'
import Login from './pages/Mine/login.jsx'
import Reg from './pages/Mine/reg.jsx'
import MyMsg from './pages/Mine/myMsg.jsx'
import AllList from './pages/Mine/allList.jsx'
import GoodsList from './pages/Mine/goodsList.jsx'
import Setting from './pages/Mine/Setting.jsx'
import Shop from './pages/Mine/shop.jsx'
import PrivateRoute from "./pages/privateRouter/privateRouter.jsx";



// import Dest from './pages/Destination/Dest.jsx'
// import Scenicmore from './pages/Scenicmore/Scenicmore.jsx'
import SearchPage from './pages/SearchPage/SearchPage.jsx'
import Tickets from './pages/Tickets/Tickets.jsx'
import Details from './pages/Details/Details.jsx'

import Dest from './pages/Destination/Dest.jsx'
import Hotel from './pages/Hotel/Hotel.jsx'
import Scenicmore from './pages/Scenicmore/Scenicmore.jsx'
// import SearchPage from './pages/SearchPage/SearchPage.jsx'
import './assets/js/rem'
// import 'lib-flexible'
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
	      <Route path='/mine' component={Mine}/>
	      <PrivateRoute path='/mymsg' component={MyMsg}/>
	      <PrivateRoute path='/allList' component={AllList}/>
	      <PrivateRoute path='/goodsList' component={GoodsList}/>
	      <PrivateRoute path='/setting' component={Setting}/>
        <Route path='/login' component={Login}/>
        <Route path='/reg' component={Reg}/>
        <PrivateRoute path='/shop' component={Shop}/>
        <Route path='/SearchPage' component={SearchPage} />
        <Route path ='/dest' component={Dest}/>
        <Route path ='/hotel' component={Hotel}/>
        <Route path ='/scenicmore' component={Scenicmore}/>
        <Redirect from="/*" to="home" component={Home} exact/>
      </Switch>
    </div>
  );
}

export default App;
