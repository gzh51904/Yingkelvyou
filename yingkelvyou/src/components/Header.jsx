import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

import './Header.css'

 
class Header extends Component {
    constructor() {
        super()
        this.state = {
            style: { display: "none" }
        }
        // this.showhide = this.showhide.bind(this)
        this.goto = this.goto.bind(this)
    }
    showhide (){
        if (this.state.style.display === "block") {
            this.setState({ style: { display: "none" } })
        } else {
            this.setState({ style: { display: "block" } })
        }
    }
    goto(path){
        let {history} = this.props
        history.push(path)
    }
    render() {
        return (
            <div className="head">
                <div className="search">
                <input id="ss" type="text" placeholder="搜素目的地/关键词" onClick={this.goto.bind(this,'/searchPage')}/>
                    <label htmlFor="ss">
                        <img src={require("../images/fdj.png")} className="icon1" alt="" />
                    </label>
                    <div className="custiomerService" onClick={this.showhide.bind(this)}>
                        <img src={require("../images/topPanda.png")} className="headerPanda" alt="" />
                    </div>
                    <ul className="service-drapdown" style={this.state.style}>
                        <li className="drapdown-item">
                            客服电话
                        </li>
                        <li className="drapdown-item">在线客户</li>
                        <li className="drapdown-item">消息</li>
                    </ul>
                </div>
            </div>
        )
    }
}

Header = withRouter(Header)
export default Header