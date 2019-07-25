import React, { Component } from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import './Footer.css'
import Home from '../pages/Home/Home.jsx'

let AllRouter = {
    Home,
    // List,
    // Cart,
    // Mine
  }
class Footer extends Component {
    constructor() {
        super()
        this.state = {
            navs: [
                {
                    title: '首页',
                    path: '/home',
                    imgurl: require("../images/bottomSPanda.png"),
                    name: 'Home'
                },
                {
                    title: '目的地',
                    path: '/dest',
                    imgurl: require("../images/bt_mdd1.png"),
                    name: 'Destination'
                },
                {
                    title: '我的',
                    path: '/mine',
                    imgurl: require("../images/bt_mine1.png"),
                    name: 'Mine'
                }
            ]
        }
        this.goto = this.goto.bind(this)
    }
    goto(path){
        console.log(path)
        let {history} = this.props
        history.push(path)
    }
    render() {
        let { navs } = this.state
        // console.log(navs)
        return (
            <div className="footer">
                {/* <span className="index">
                    <img src={require("../images/bottomSPanda.png")} alt=""/>
                    <div className="navtitle">首页</div>
                </span> */}
                {
                    navs.map(item => (
                        <span onClick={this.goto.bind(this,item.path)} className={item.name} key={item.name}>
                            <img src={item.imgurl} alt={item.title} />
                            <div className="navtitle">{item.title}</div>
                        </span>
                    ))
                }
                <Switch>
                {
                    navs.map(item=><Route key={item.name} path={item.path} component={AllRouter[item.name]}/>)

                }
                    {/* <Route path='/home' component={Home} ></Route> */}
                </Switch>
            </div> 
        )
    }
}

Footer = withRouter(Footer)
export default Footer