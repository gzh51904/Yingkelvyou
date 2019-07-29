import React, { Component } from 'react';
import { Icon, Tabs } from 'antd';
import '../../css/reset.css';
import './myMsg.scss';

const { TabPane } = Tabs;





 class List extends Component {
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
            <div  className="msgList">
                <div  className="header">
                    <i onClick={this.goto.bind(this,'/Mine')}><Icon type="left" /></i>
                    <h2  className="fl">我的消息</h2>
                </div>
                <div className="tabNav">
                        {/* <ul>
                            <li><span>优惠活动</span></li>
                            <li><span>订单信息</span></li>
                            <li><span>公告消息</span></li>
                        </ul> */}

                        <Tabs defaultActiveKey="1">
                            <TabPane tab="优惠活动" key="1">
                                您暂时没有新的消息！
                            </TabPane>
                            <TabPane tab="订单信息" key="2">
                                您暂时没有新的消息！
                            </TabPane>
                            <TabPane tab="公告消息" key="3">
                                您暂时没有新的消息！
                            </TabPane>
                        </Tabs>


                  
                </div>


            </div>

        )
    }
}

export default List;