import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './Dest.css';
import Axios from 'axios';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
class Dest extends Component {
    constructor() {
        super();
        this.state = {
            navs: [
                {
                    iconnav: '/img/group1.png',
                    title: '门票',
                    path:'/tickets'
                },
                {
                    iconnav: '/img/group2.png',
                    title: '酒店',
                    path:'/hotel'
                },
                {
                    iconnav: '/img/group3.png',
                    title: '当地游'
                },
                {
                    iconnav: '/img/group4.png',
                    title: '周边跟团'
                },
                {
                    iconnav: '/img/group7.png',
                    title: '玩家攻略'
                }
            ],
            local:[
                {
                    imgurl:'https://bpm.yktour.com.cn/bom/uploads/20181225/ca4294955add10068355aa3211efae7c.jpg',
                    title:'【深度逛】故宫半日游',
                    price:128
                },
                {
                    imgurl:'https://bpm.yktour.com.cn/bom/uploads/20190429/ef7629c38bc5a5e0e5883979230aed5b.jpg',
                    title:'古北水镇1日',
                    price:78
                },
                {
                    imgurl:'https://bpm.yktour.com.cn/bom/uploads/20190705/4039a915bd6d7522e4f383582b2eb19e.jpg',
                    title:'动物世界',
                    price:88
                },
                {
                    imgurl:'https://bpm.yktour.com.cn/bom/uploads/20181225/ca4294955add10068355aa3211efae7c.jpg',
                    title:'【深度逛】故宫半日游',
                    price:128
                },
                {
                    imgurl:'https://bpm.yktour.com.cn/bom/uploads/20190429/ef7629c38bc5a5e0e5883979230aed5b.jpg',
                    title:'古北水镇1日',
                    price:78
                },
                {
                    imgurl:'https://bpm.yktour.com.cn/bom/uploads/20190705/4039a915bd6d7522e4f383582b2eb19e.jpg',
                    title:'动物世界',
                    price:88
                }
            ],
            recommends:[]
        }
        this.state.navs.map(item=>{
            item.iconnav = require("../../assets" + item.iconnav);
        })
        this.gotoScenic = this.gotoScenic.bind(this);
        this.toHotel = this.toHotel.bind(this);
    }
    gotoScenic(){
        let {history,match} = this.props;
        console.log("-------",this.props)
        history.push('/scenicmore')
    }
    toHotel(path){
        let {history} =this.props;
        history.push(path)
    }
    componentDidMount(){
        let that = this;
        Axios.get(
            'https://newm.yktour.com.cn/api/app/scenic/list?sortType=3&longitude=116.0119343&latitude=39.66127144&pageNo=1&pageSize=5'
        ).then(({data})=>{
            let datas = data.data.data;
            that.setState({
                recommends:datas
            })
        })
    }
    render() {
        let { navs, recommends,local } = this.state;
        return (
            <div className="dest">
                <Header></Header>
                <div className="city" style={{ background: 'url(https://image.yktour.com.cn/g1/M00/06/51/CgAMDFwjXw-AeD8FAAAbMAdsA5E636.jpg) 0px 0px / 100% 100% no-repeat' }}>
                    <div className="left">
                        <p>欢迎来到</p>
                        <p>广州<span className="tabCity">切换</span></p>
                        <ul>
                            <li>悠悠帝都</li>
                            <li>文化之都</li>
                            <li>胡同儿</li>
                        </ul>
                    </div>
                    <div className="right">
                        <p>27 ~ 36℃</p>
                    </div>
                </div>
                <div className="iconnavi">
                    {
                        navs.map((item, idx) => {
                            return (
                                <div className="box" key={idx} onClick={this.toHotel.bind(this,item.path)}>
                                    <img src={item.iconnav} alt="" />
                                    <p>{item.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="scenic">
                    <p className="title">
                        ————
                        <span>必去景点</span>
                        ————
                    </p>
                    <div className="scenic-pic">
                        <div className="box">
                            <img src="http://pic.lvmama.com//uploads/pc/place2/2017-04-25/b0ba4e94-75eb-4567-baff-57dfc45e1e3c.jpg" alt=""/>
                            <p>京东大峡谷</p>
                        </div>
                        <div className="box">
                            <img src="http://pic.lvmama.com//uploads/pc/place2/2015-07-14/f53eb6e1-5168-41d6-8b22-ce3d55ce908a.jpg" alt=""/>
                            <p>大运河森林公园</p>
                        </div>
                    </div>
                    <p className="more" onClick={this.gotoScenic}>
                        <span>查看更多&gt;</span>
                    </p>
                </div>
                <div className="citymap">
                    <p className="title">
                        ————
                        <span>广州地图</span>
                        ————
                    </p>
                    <div className="map-box">
                        <div className="map"></div>
                        <div className="sousou">
                            <div className="citys">
                                <p>搜索广州吃喝玩乐</p>
                                <span>
                                    <img src="" alt="" />
                                </span>
                            </div>
                            <p className="local-num">
                                <span>139个门票</span>
                                <span>388间酒店</span>
                                <span>2430种当地玩乐</span>
                            </p>
                        </div>
                        <p className="map-bottom">
                            <span><i></i>门票</span>
                            <span><i></i>酒店</span>
                            <span><i></i>当地玩乐</span>
                        </p>
                    </div>
                    <div className="recommend">
                        <p className="re-title">为您推荐：20km以内热卖产品</p>
                        <ul className="product">
                            {
                                recommends.map((ite,idex)=>{
                                    return (
                                        <li className="pro-item" key={idex}>
                                            <img src={ite.imgPath[0]}  alt=""/>
                                            <p className="name">{ite.brief}</p>
                                            <p className="desc">
                                                <span>景区门票</span>
                                                <span>￥</span>
                                                <span>{ite.minPrice}</span>
                                                <span>起</span>
                                            </p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="hot">
                    <p className="title">
                        ————
                        <span>大家都在玩</span>
                        ————
                    </p>
                    <ul className="hot-list">
                        <li>
                            <div>
                                <div className="pic">
                                    <img src="https://staticimage.yktour.com.cn/photo/20190612/ZDNrWkJlbUFGaTFxcmE3NW5iaGoxNTYwMzA1NjY5.jpg" alt=""/>
                                    <p className="price">
                                        <span>￥</span>
                                        <span>198</span>
                                        <span>起</span>
                                    </p>
                                    <p className="desc">
                                        <span>跟团游</span>|
                                        <span>北京出发</span>
                                    </p>
                                </div>
                                <p className="hot-title">【每天发团】打卡北京故宫天安门延禧宫/探店前门北京坊pageone书店+80年代肯德基店/街拍老北京年代感胡同/回味老舍茶馆众生百态/吃美食·皇城一日玩</p>
                            </div>
                            <div>
                                <div className="pic">
                                    <img src="https://bpm.yktour.com.cn/bom/uploads/20190429/03a5a9d4b4a1db2dad43992370d750de.jpg" alt=""/>
                                    <p className="price">
                                        <span>￥</span>
                                        <span>88</span>
                                        <span>起</span>
                                    </p>
                                    <p className="desc">
                                        <span>跟团游</span>|
                                        <span>北京出发</span>
                                    </p>
                                </div>
                                <p className="hot-title">八达岭长城+颐和园+圆明园+鸟巢水立方一日游</p>
                            </div>
                        </li>
                    </ul>
                    <p className="more">
                        <span>查看更多&gt;</span>
                    </p>
                </div>
                <div className="local">
                    <p className="title">
                        ————<span>当地产品推荐</span>
                       ————
                    </p>
                    <div className="local-content">
                        <ul>
                            {
                                local.map((item,idx)=>{
                                    return (
                                        <li key={idx}>
                                            <img src={item.imgurl}/>
                                            <p className="local-title">{item.title}</p>
                                            <p className="desc">
                                                <span>跟团游</span>
                                                <span>¥</span>
                                                <span>{item.price}</span>
                                                <span>起</span>
                                            </p>
                                        </li>
                                    )
                                })                              
                            }
                        </ul>
                    </div>
                </div>

                <Footer></Footer>
            </div>
        )
    }
}
Dest = withRouter(Dest)
export default Dest