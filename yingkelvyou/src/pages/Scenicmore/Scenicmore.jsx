import React, { Component, } from 'react';
import { withRouter } from 'react-router-dom';
import {Icon} from 'antd';
import './more.css';
import Axios from 'axios';
class Scenicmore extends Component {
    constructor() {
        super();
        this.state = {
            scenicList: [],
            isok:false
        }
        this.show = this.show.bind(this);
        this.back = this.back.bind(this);
        this.todate = this.todate.bind(this);
    }
    componentDidMount() {
            Axios.get(
                'https://newm.yktour.com.cn/api/app/scenic/list?cityName=%E5%B9%BF%E5%B7%9E&type=&sortType=&range=&isToday=0&longitude=113.264434&latitude=23.129162&keyword=&pageNo=1&pageSize=10'
            ).then(({ data }) => {
                let datas = data.data.data;
                console.log(datas);
                this.setState({
                    scenicList:datas
                 })
            })
    }
    show(){
        this.setState({
            isok:!this.state.isok
         })
        if(!this.state.isok){
            Axios.get(
                'https://newm.yktour.com.cn/api/app/scenic/list?cityName=%E5%B9%BF%E5%B7%9E&type=&sortType=&range=&isToday=1&longitude=113.264434&latitude=23.129162&keyword=&pageNo=1&pageSize=10'
            ).then(({ data }) => {
                let data1 = data.data.data;
                console.log(data1)
                this.setState({
                   scenicList:data1
                })
            })
        }else{
            Axios.get(
                'https://newm.yktour.com.cn/api/app/scenic/list?cityName=%E5%B9%BF%E5%B7%9E&type=&sortType=&range=&isToday=0&longitude=113.264434&latitude=23.129162&keyword=&pageNo=1&pageSize=10'
            ).then(({ data }) => {
                let datas = data.data.data;
                console.log(datas);
                this.setState({
                    scenicList:datas
                 })
            })
        }
    }
    back(){
        let {history} = this.props;
        // console.log("---",this.props)
        history.goBack();
    }
    todate(){

    }
    render() {
        let imgGou1 = require('../../assets/img/gou1.png');
        let imgGou2 = require('../../assets/img/gou2.png');
        let {isok,scenicList} = this.state;
        return (
            <div className="scenic-more">
                <div className="search">
                    <header className="header">
                        <div className="left">
                            <Icon type="left" onClick={this.back}/>
                        </div>
                        <form>
                            <input type="search" placeholder="搜索目的地/景点/关键词" />
                        </form>
                    </header>
                </div>
                <div className="List-nav">
                    <ul>
                        <li><span>主题</span> <Icon type="caret-down" /></li>
                        <li><span>距离范围</span> <Icon type="caret-down" /></li>
                        <li><span>智能排序</span> <Icon type="caret-down" /></li>
                        <li>
                            {
                                isok ?<img src={imgGou2} alt="" onClick={this.show}/>:<img src={imgGou1} alt="" onClick={this.show}/>
                            }
                            <span>今日可定</span>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <div className="main">
                        <ul>
                            {
                                scenicList.map((item,idx)=>{
                                    return (
                                        <li key={idx} onClick={this.todate(idx)}>
                                            <div className="left">
                                                <img src={item.imgPath[0]} alt=""/>
                                                <span className="angle">今日可定</span>
                                            </div>
                                            <div className="right">
                                                <p className="product_name">{item.title}</p>
                                                <p className="address">{item.address}</p>
                                                <p className="label"></p>
                                                <div className="info">
                                                    <p>
                                                        <span className="price"></span>
                                                        ￥<b>{item.minPrice}</b>
                                                        <span style={{color: "rgb(153, 153, 153)"}}>起</span>
                                                        
                                                    </p>
                                                    <p className="data">距离：{item.distance}</p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
Scenicmore = withRouter(Scenicmore);
export default Scenicmore