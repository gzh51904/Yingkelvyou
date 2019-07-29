import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import { Icon,Avatar } from 'antd';
import '../../css/reset.css';
import './Mine.scss';
import Footer from '../../components/Footer.jsx';




class Mine extends Component {

    constructor(){
        super()
        this.state = {
            token:'登录/注册'
        }
        this.goto = this.goto.bind(this)
    }
    goto(){
        if(this.state.token === "登录/注册" ){
            let {history} = this.props
            history.push('/login')
        }
        
    }
    gotoOther(path){
        let {history} = this.props
        history.push(path)
    }



    componentDidMount(){
        let token1 = localStorage.getItem('uphone')
        if(token1){
            this.setState({
                token:token1
                
            })
            console.log(this.state);

            
        }
    }





    render() {
        let {token} = this.state;
        return (
            <div className="mine">
                <div className="userInfo">
                    <div className="clearfix">
                        <span style={{color:'#fff'}}  className="fl"><Icon onClick={this.gotoOther.bind(this,'/setting')} type="setting" /></span>
                        <span style={{color:'#fff'}} onClick={this.gotoOther.bind(this,'/mymsg')} className="fr"><Icon type="message" /></span>
                        <div className="imgVip"></div>
                    </div>

                    <div className="qiu1"></div>
                    <div className="qiu2"></div>
                    <div className="qiu3"></div>


                    <div className="logAndReg clearfix">
                        <Avatar className="head fl" size={64} icon="user" />
                        <span onClick={this.goto} className="login fl">{token}</span>
                    </div>
                </div>

                <div className="list">
                    <div onClick={this.gotoOther.bind(this,'/allList')}  className="myList"><Icon type="unordered-list" /> <span>我的订单</span></div>
                    <div onClick={this.gotoOther.bind(this,'/goodsList')}  className="goodsList"><Icon type="calendar" /><span>商品订单</span></div>


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

                        <li onClick={this.gotoOther.bind(this,'/shop')}>
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