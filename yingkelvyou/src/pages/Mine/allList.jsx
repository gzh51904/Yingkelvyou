import React, { Component } from 'react';
import { Icon } from 'antd';
import '../../css/reset.css';
import './allList.scss';
import '../../assets/js/rem.js';
import imgurl from "../../assets/img/list_left.png"






class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
            data: [
                {
                    "listNum": "123456789",
                    "listHead": "珠江夜游（金航游轮）",
                    "listDate": "2019-07-31",
                    "price": "60"
                }
            ]
        }
        this.setCurrentIndex = this.setCurrentIndex.bind(this)
        this.goto = this.goto.bind(this)
    }

    goto(path) {
        let { history } = this.props
        history.push(path)
    }


    setCurrentIndex(event) {
        this.setState({
            currentIndex: parseInt(event.currentTarget.getAttribute('index'), 10)
        })

    }


    render() {
        let categoryArr = ['全部订单', '机票', '酒店', '火车票', '门票', '旅游路线', '签证'];
        let itemList = [];
        for (let i = 0; i < categoryArr.length; i++) {

            itemList.push(<li key={i}
                className={this.state.currentIndex === i ? 'active' : ''}
                index={i} onClick={this.setCurrentIndex}
            ><span>{categoryArr[i]}</span></li>);

        }

        let {data} = this.state;

        return (
            <div className="goodsList">
                <div className="header">
                    <i onClick={this.goto.bind(this, '/Mine')}><Icon type="left" /></i>
                    <h2 className="fl">全部订单</h2>
                </div>

                <div className="listTab">
                    <ul className="category">
                        {itemList}
                        {/* <li><span>机票</span></li>
                        <li><span>酒店</span></li>
                        <li><span>火车票</span></li>
                        <li><span>门票</span></li>
                        <li><span>旅游线路</span></li>
                        <li><span>签证</span></li> */}
                    </ul>

                    {/* 订单 */}
                    <div className="list">
                        {
                            data.map((Item, idx) => {
                                return (
                                    <div>
                                        <div className="top">
                                            <p><img src={imgurl} alt="" />门票</p>
                                            <p>已取消</p>
                                            <p>订单号：{Item.listNum}</p>
                                        </div>

                                        <div className="middle">
                                            <p>
                                                <span>{Item.listHead}</span>
                                                <span>￥{Item.price}</span>
                                            </p>

                                            <p>{Item.listHead}{Item.listDate}</p>
                                        </div>

                                        <div className="btn">

                                        </div>
                                    </div>

                                )
                            })
                        }



                        {/* <div className="top">                      
                            <p><img src={imgurl} alt=""/>门票</p>
                            <p>已取消</p>
                            <p>订单号：123456789</p>
                        </div>

                        <div className="middle">
                            <p>
                                <span>珠江夜游（金航游轮）</span>
                                <span>￥60</span>
                            </p>
                            
                            <p>珠江夜游（金航游轮）出行日期：2019-07-31</p>
                        </div>

                        <div className="btn">

                        </div> */}

                    </div>



                </div>


            </div>
        )
    }
}

export default List;