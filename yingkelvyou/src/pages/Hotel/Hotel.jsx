import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Icon,Button } from 'antd'
import './Hotel.css';
import Axios from 'axios';

class Hotel extends Component {
    constructor() {
        super();
        this.state = {
            nav:[
                {
                    imgurl:require('../../images/xhx.png'),
                    title:'豪华型'
                },
                {
                    imgurl:require('../../images/gdx.png'),
                    title:'高档型'
                },
                {
                    imgurl:require('../../images/ssx.png'),
                    title:'舒适型'
                },
                {
                    imgurl:require('../../images/jjx.png'),
                    title:'经济型'
                }
            ],
            hotel:[],
            zuanshi:require('../../images/zuanshi.png')
        }
        this.back = this.back.bind(this)
    }
    back(){
        let {history} = this.props;
        history.goBack();
    }
    async componentWillMount(){
        await Axios.get('http://39.107.12.210:1904/goods').then(({data})=>{
            this.setState({
                hotel:data.data
            })
        })
    }
    render() {
        let {nav,zuanshi,hotel} = this.state
        return (
            <div className="page-container">
                <div className="top">
                    <div className="swipe">
                        <div className="mint-swipe">
                            <div className="mint-swipe-items-wrap">
                                <div className="mint-swipe-item is-active">
                                    <img src="https://image.yktour.com.cn/g1/M00/07/1D/CgAMDFz2GZiAYEGQAAPjyDYjcjc387.jpg" lazy="loaded" alt=""/>
                                </div>
                                <b className="backBox">
                                    <span className="backBtn" onClick={this.back}>
                                        <Icon type="left" style={{ fontSize: ".37rem" }} />
                                    </span>
                                </b>
                            </div>
                            <div className="mint-swipe-indicators">
                                <div className="mint-swipe-indicator is-active"></div>
                            </div>
                        </div>
                    </div>
                    <div className="customerService">
                        <img src={require('../../images/topPanda.png')} alt=""/>
                    </div>
                </div>

                <div className="content">
                    <div className="content-container">
                        <div className="guonei">
                            <ol className="navbar">
                                <li className="tabItem selected">国内酒店
                                    <img src={require('../../images/xian.png')}  alt=""/>
                                </li>
                            </ol></div>
                        <ul>
                            <li className="position">
                                <span className="citylocation">广州</span>
                                <Icon type="right" />
                                <div className="myPosition">
                                    <img src={require('../../images/wdwz.png')} alt=""/>
                                    <p>我的位置</p>
                                </div>
                            </li>
                            <li className="time">
                                <div className="detail">
                                    <div className="arrive">
                                        <span>入住</span>
                                        <span>07月26日</span>
                                        <span>周五</span>
                                    </div>
                                    <div className="night">共1晚</div>
                                    <div className="depart">
                                        <span>离店</span>
                                        <span>07月27日</span>
                                        <span>周六</span>
                                    </div>
                                </div>
                                <Icon type="right" className="iconGt1"/>
                            </li>
                            <li className="region">
                                <span>关键字/区域/品牌/酒店名</span>
                                <Icon type="right" className="iconGt"/>
                            </li>
                            <li className="ranker">
                                <span>价格/星级</span>
                                <Icon type="right" className="iconGt"/>
                            </li>
                        </ul>
                        <button className="btn">查询</button>
                    </div>
                </div>

                <div className="room-type">
                    <ul>
                        {
                            nav.map((item,idx)=>{
                                return (
                                    <li key={idx}>
                                        <img src={item.imgurl} alt=""/>
                                        <p>{item.title}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="card">
                        <section className="left">
                            <div className="top">
                                <span className="tipe">商务出行</span>
                            </div>
                            <div className="bottom">
                                <div className="frag">
                                    <span className="tipe">浪漫情侣</span>
                                </div>
                                <div className="frag">
                                    <span className="tipe">亲子酒店</span>
                                </div>
                            </div>
                        </section>
                        <section className="right">
                            <span className="tipe">休闲度假</span>
                        </section>
                    </div>
                </div>
                
                <div className="daily">
                    <div className="title">每日精选</div>
                    <ul>
                        <li>
                            <div className="img">
                                <img src="http://images4.c-ctrip.com/target/fd/hotel/g1/M04/81/D2/CghzfVVRup2AaSvjAADkI7oU63o480_Y_400_400.jpg" alt=""/>
                            </div>
                            <div className="name">
                                <span>广州花之恋城堡酒店</span>
                                <img src={zuanshi} alt=""/>
                                <img src={zuanshi} alt=""/>
                                <img src={zuanshi} alt=""/>
                                <img src={zuanshi} alt=""/>
                                <img src={zuanshi} alt=""/>
                            </div>
                            <p className="address">万顷沙镇新垦15涌</p>
                            <div className="extra">
                                <div className="tipes">
                                    <button>浪漫情侣</button>
                                </div>
                                <div className="price">
                                    <em>¥</em>
                                    <span>844</span>
                                    <em>起</em>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="img">
                                <img src="http://images4.c-ctrip.com/target/200i0w000000keiui8A49_Y_400_400.jpg" alt=""/>
                            </div>
                            <div className="name">
                                <span>广州宝德国际酒店</span>
                                <img src={zuanshi} alt=""/>
                                <img src={zuanshi} alt=""/>
                                <img src={zuanshi} alt=""/>
                                <img src={zuanshi} alt=""/>
                                <img src={zuanshi} alt=""/>
                            </div>
                            <p className="address">高唐路236号</p>
                            <div className="extra">
                                <div className="tipes">
                                    <button>商务出行</button>
                                </div>
                                <div className="price">
                                    <em>¥</em>
                                    <span>437</span>
                                    <em>起</em>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <div className="recommend">
                    <div className="top">
                        <span>推荐酒店</span>
                        <span>更多&gt;</span>
                    </div>
                    <ul className="recommendlist">
                        {
                            hotel.map((item,idx)=>{
                                let arr = item.tag_name.split(',')
                                let tag = arr.slice(0,2);
                                return (
                                    <li key={idx}>
                                        <div className="left">
                                            <img src={item.image} alt=""/>
                                        </div>
                                        <div className="right">
                                            <p>{item.hotel_name}</p>
                                            <p>
                                                <span className="pic">
                                                    <img src={zuanshi} alt=""/>
                                                </span>
                                                <span className="pic">
                                                    <img src={zuanshi} alt=""/>
                                                </span>
                                                <span className="pic">
                                                    <img src={zuanshi} alt=""/>
                                                </span>
                                                <span className="pic">
                                                    <img src={zuanshi} alt=""/>
                                                </span>
                                                <span className="pic">
                                                    <img src={zuanshi} alt=""/>
                                                </span>
                                                <span>{item.levelName}</span>
                                            </p>
                                            <p>{item.distance_desc}&nbsp;{item.shop_area_name}</p>
                                            <p>
                                                {
                                                    tag.map((itm,index)=>{
                                                        return (
                                                            <span key={index} className="basetag">{itm}</span>
                                                        )
                                                    })
                                                }
                                                <span className="pricebase1">¥
                                                    <span>{item.price}</span>
                                                    <span>起</span>
                                                </span>
                                            </p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
Hotel = withRouter(Hotel)
export default Hotel