import React, { Component } from 'react';
import { Icon, Tabs } from 'antd';
import '../../css/reset.css';
import './goodsList.scss';
import '../../assets/js/rem.js';

const { TabPane } = Tabs;
const lists = [
    {title:'待付款',key:1,},
    {title:'待发货',key:2,},
    {title:'待收货',key:3,},
    {title:'已收货',key:4,},
    {title:'已完成',key:5,},
    {title:'已完成',key:6,},
    {title:'退货中',key:7,},
    {title:'退款中',key:8,},
    {title:'已退款',key:9,},
    {title:'已取消',key:10}
]





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
                <div className="header">
                    <i onClick={this.goto.bind(this,'/Mine')}><Icon type="left" /></i>
                    <h2  className="fl">商品订单</h2>
                </div>
                <div className="tabNav">
                        {/* <ul>
                            <li><span>优惠活动</span></li>
                            <li><span>订单信息</span></li>
                            <li><span>公告消息</span></li>
                        </ul> */}

                        <Tabs defaultActiveKey="1">
                            {
                                lists.map((list)=>{
                                    return(
                                        <TabPane tab={list.title}     key={list.key}>
                                            您还没有该订单
                                        </TabPane>
                                    )
                                })
                            }
                            
                            
                            
                            
                        </Tabs>


                  
                </div>


            </div>

        )
    }
}

export default List;