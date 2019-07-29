import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import { Input,notification } from 'antd';
import axios from 'axios';
import '../../css/reset.css';
import './login.scss';




class Login extends Component {
   
    constructor() {
        super()
        this.state = {uphone:'',upass:''}     
        this.goto = this.goto.bind(this)
    }
    
    Uphone = (e)=>{

              this.setState({uphone:e.target.value})
        }
    
    Upass = (e)=>{
        
            // console.log(e.target.value)
            // console.log('a:',this.state.uphone);
            this.setState({upass:e.target.value})   
    }

    getUser(){
        console.log(this.state)
        axios
            .get("http://39.107.12.210:1904/login",{params:{
                username:this.state.uphone,
                password:this.state.upass
            }})
            .then((res) => {
                console.log(res.data);
                let uphone =  res.data.data.uphone             
                if(res.data.code === 1000){
                    localStorage.setItem('token',res.data.data.tokenname);
                    localStorage.setItem('uphone',res.data.data.uphone);
                    let {history} = this.props;
                    history.push('/mine',{uphone})
                }else{
                    notification.open({
                        message: '提示',
                        description:
                          '帐号或密码错误！',
                        onClick: () => {
                          console.log('Notification Clicked!');
                        },
                      })
                    
                }
            })
    }



    goto(path) {
        let { history } = this.props
        history.push(path)
    }

    render() {
        return (
            <div className="Login">
                <div className="header">
                    <span onClick={this.goto.bind(this, '/mine')} className="close"></span>
                    <p className="loginText">登录</p>

                    <div className="botText">
                        <p>帐号密码登录</p>
                        <p>验证码登录</p>
                    </div>
                </div>

                <div className="input">
                    <div className="user">
                        <ul>
                            <li><Input onBlur = {this.Uphone}  placeholder="请输入帐号" /></li>
                            <li><Input.Password onBlur = {this.Upass} placeholder="请输入密码" />
                        </li>
                        </ul>
                    </div>

                    <div className="forgetPassword">
                        <span>忘记密码</span>

                    </div>

                    <div className="loginBtn" onClick={this
                                    .getUser
                                    .bind(this)
                                }>登录</div>
                    <div className="signBtn" onClick={this.goto.bind(this, '/reg')}>注册</div>

                </div>





            </div>
        )
    }
}

Login = withRouter(Login)
export default Login;