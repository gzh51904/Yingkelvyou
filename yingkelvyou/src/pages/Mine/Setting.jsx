import React, { Component } from 'react';
import { Icon } from 'antd';
import '../../css/reset.css';
import './Setting.scss';


class Setting extends Component {
    constructor(){
        super()
        this.goto = this.goto.bind(this)
    }

    goto(path){
        let {history} = this.props
        history.push(path)
    }

    outUser(){
        // console.log(localStorage.getItem('uphone'))
        localStorage.removeItem('uphone');
        localStorage.removeItem('token');
        this.props.history.push("/Mine");
       
        


    }





    render(){

        return(
            <div className="setting">
                <div className="header">
                    <Icon onClick={this.goto.bind(this, '/mine')} className="back" type="left" />
                    我的设置
                </div>

                <div className="settingList">
                    <div>个人设置<Icon className="go" type="right" /></div>
                    <div>修改密码<Icon className="go" type="right" /></div>
                    <div>意见反馈<Icon className="go" type="right" /></div>
                    <div>关于我们<Icon className="go" type="right" /></div>
                </div>

                <div onClick={this.outUser.bind(this)}  className="exit">退出登录</div>


            </div>
        )
    }
}

export default Setting;