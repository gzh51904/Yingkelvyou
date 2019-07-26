import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import { Icon,Avatar } from 'antd';
import '../../css/reset.css';
import './Mine.scss';
import '../../assets/js/rem.js';
import Footer from '../../components/Footer.jsx';



class Mine extends Component {
    constructor(){
        super()
        this.goto = this.goto.bind(this)
    }
    goto(path){
        let {history} = this.props
        history.push(path)
    }



    render() {
        return (
            <div className="mine">
                <div className="userInfo">
                    <div className="clearfix">
                        <span style={{color:'#fff'}}  className="fl"><Icon type="setting" /></span>
                        <span style={{color:'#fff'}} onClick={this.goto.bind(this,'/mymsg')} className="fr"><Icon type="message" /></span>
                        <div className="imgVip"></div>
                    </div>

                    <div className="qiu1"></div>
                    <div className="qiu2"></div>
                    <div className="qiu3"></div>


                    <div className="logAndReg clearfix">
                        <Avatar className="head fl" size={64} icon="user" />
                        <span onClick={this.goto.bind(this,'/login')} className="login fl">登录/注册</span>
                    </div>
                </div>

                <div className="list">
                    <div onClick={this.goto.bind(this,'/allList')}  className="myList"><Icon type="unordered-list" /> <span>我的订单</span></div>
                    <div onClick={this.goto.bind(this,'/goodsList')}  className="goodsList"><Icon type="calendar" /><span>商品订单</span></div>


                </div>

                <div className="myHelper">
                    我的工具
                    </div>

                <div className="serviceNav">
                    <ul className="clearfix">
                        <li>
                            <Icon style={{color:'#ff7437'}} type="user" />
                            <p>常用信息</p>
                        </li>

                        <li>
                            <Icon style={{color:'#ffb400'}} type="star" />    
                            <p>我的收藏</p>
                        </li>

                        <li>
                            <Icon style={{color:'#76d35a'}} type="wallet" />
                            <p>我的钱包</p>
                        </li>

                        <li>
                            <Icon style={{color:'#169ada'}} type="yuque" />
                            <p>旅行足迹</p>
                        </li>
                        

                    </ul>
                    <ul className="clearfix">
                        <li>
                            <Icon style={{color:'#9d6fd8'}} type="history" />
                            <p>浏览历史</p>
                        </li>

                        <li onClick={this.goto.bind(this,'/shop')}>
                            <Icon style={{color:'#50b8ff'}} type="shop" />
                            <p>附近门店</p>
                        </li>

                        <li>
                            <Icon style={{color:'#6478ff'}} type="customer-service" />
                            <p>联系客服</p>
                        </li>                       
                        

                    </ul>
                </div>
                <Footer></Footer>

            </div>

        )
    }
}



Mine = withRouter(Mine)
export default Mine;