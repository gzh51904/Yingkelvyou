import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import { Input } from 'antd';
import '../../css/reset.css';
import './login.scss';
import '../../assets/js/rem.js';



class Login extends Component {
    constructor() {
        super()
        this.goto = this.goto.bind(this)
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

                <div className="content">
                    <div className="user">
                        <ul>
                            <li><Input placeholder="请输入帐号" /></li>
                            <li><Input.Password placeholder="请输入密码" />
                        </li>
                        </ul>
                    </div>

                    <div className="forgetPassword">
                        <span>忘记密码</span>

                    </div>

                    <div className="loginBtn">登录</div>
                    <div className="signBtn">注册</div>

                </div>





            </div>
        )
    }
}

Login = withRouter(Login)
export default Login;