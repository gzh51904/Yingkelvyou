import React, { Component } from 'react';
import axios from 'axios';
import { Icon,notification } from 'antd';
import '../../css/reset.css';
import './reg.scss';
import '../../assets/js/rem.js';

class Reg extends Component {
    constructor() {
        super()
        this.goto = this.goto.bind(this)
        this.state = { uphone: '', upass: '', inputcode: '', code: '获取验证码' }
    }



    goto(path) {
        let { history } = this.props
        history.push(path)
    }

    Uphone = (e) => {
        this.tel=e.target.value
        console.log(this.tel)
        var reg=/^1[34578]\d{9}$/;
        if(reg.test(this.tel) === false){
            notification.open({
                message: '提示',
                description:
                  '手机号码格式不对',
                onClick: () => {
                  console.log('Notification Clicked!');
                },
              })
              e.target.value = "";
        }else{          
                this.setState({ uphone: e.target.value })
            
        }
        
    }

    Upass = (e) => {

        this.password=e.target.value
        var reg=/^\w{6,20}$/;
        if(reg.test(this.password)===false){
            notification.open({
                message: '提示',
                description:
                  '密码格式不对',
                onClick: () => {
                  console.log('Notification Clicked!');
                },
              })

              e.target.value = "";
        
        }else{
            this.setState({ upass: e.target.value })
            }
        
    }

    Inputcode = (e) => {
        this.setState({ inputcode: e.target.value })
    }

    submit() {
        if (this.state.inputcode === this.state.code) {
            axios
                .post("http://39.107.12.210:1904/reg", {
                    username: this.state.uphone,
                    password: this.state.upass

                })
                .then(({data}) => {
                    if(data.code === 1000){
                        console.log("注册成功")
                        let {history} = this.props;
                        history.push('/login')

                    }else{
                        console.log("注册不成功")
                    }
                    
                })
        } else {
            console.log("验证码错误！")
        }
       // console.log('a:' + this.state.uphone, 'B:' + this.state.upass, 'c:' + this.state.inputcode)

    }

    getCode() {
        let ranCode = '';
        for (var i = 0; i < 4; i++) {
            ranCode += parseInt(Math.random() * 10);
        }
        this.setState({
            code: ranCode
        })
    }

    





    render() {

        return (
            <div className="reg">
                <div className="header">
                    <Icon onClick={this.goto.bind(this, '/login')} className="back" type="left" />
                    <span>注册</span>
                </div>

                <div className="main">
                    <ul>
                        <li className="userName">
                            <input type="phone" onBlur={this.Uphone} placeholder="手机号"  />
                            <div className="timeCode" onClick={this.getCode.bind(this)}>{this.state.code}</div>
                        </li>
                        <li onBlur={this.Inputcode} className="code"><input type="text" placeholder="请输入手机验证码" /></li>
                        <li onBlur={this.Upass} className="password"><input type="text" placeholder="设置密码(6-16位字母或数字)" /></li>
                    </ul>
                    <div className="regBtn" onClick={this.submit.bind(this)} >确定</div>
                </div>

                <div className="agree">注册表示你已阅读<span>《盈科用户协议》</span> </div>



            </div>
        )
    }

}

export default Reg