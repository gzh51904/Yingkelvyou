import React, { Component } from 'react'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import './Tickets.css'
import Sliders from '../../components/Sliders.js';
const Img = [
    require('../../images/tickerbanner1.png'),
    require('../../images/tickerbanner2.png'),
    require('../../images/tickerbanner3.png'),
    require('../../images/tickerbanner4.png'),
]
class Tickets extends Component {
    constructor() {
        super()
        this.state = {
            navs: [
                {
                    title: '文化古迹',
                    imgurl: require('../../images/ticket1.png')
                },
                {
                    title: '自然风光',
                    imgurl: require('../../images/ticket2.png')
                },
                {
                    title: '主题乐园',
                    imgurl: require('../../images/ticket3.png')
                },
                {
                    title: '演艺演出',
                    imgurl: require('../../images/ticket4.png')
                },
                {
                    title: '动植物园',
                    imgurl: require('../../images/ticket5.png')
                },
                {
                    title: '城市公园',
                    imgurl: require('../../images/ticket6.png')
                },
                {
                    title: '冰雪世界',
                    imgurl: require('../../images/ticket7.png')
                },
                {
                    title: '海洋馆',
                    imgurl: require('../../images/ticket8.png')
                },
                {
                    title: '体验馆',
                    imgurl: require('../../images/ticket9.png')
                },
                {
                    title: '温泉',
                    imgurl: require('../../images/ticket10.png')
                },
            ],
            scenic: [
                {
                    title: '禅域小镇',
                    explain: '广东省云浮市新兴县六祖镇',
                    price: '198',
                    imgurl: require('../../images/scenicpic1.jpg'),
                    distance: '35.49'
                },
                {
                    title: '禅泉温泉',
                    price: '68',
                    explain: '广东省云浮市新兴县六祖度假村',
                    imgurl: require('../../images/scenicpic2.jpg'),
                    distance: '40.61'
                },
                {
                    title: '天露山禅龙峡漂流',
                    price: '70',
                    explain: '广东省云浮市新兴县落洞村',
                    imgurl: require('../../images/scenicpic3.jpg'),
                    distance: '50.76'
                },
                {
                    title: '云雾山旅游区',
                    price: '120',
                    explain: '云浮市富林镇东路村委高排镇',
                    imgurl: require('../../images/scenicpic4.jpg'),
                    distance: '23.71'
                },
            ],
            tabs: [
                {
                    name: 'nearest',
                    title: '离我最近',
                    path: '/nearest'
                },
                {
                    name: 'today',
                    title: '可定今日',
                    path: '/today'
                },
                {
                    name: 'all',
                    title: '全部场景',
                    path: '/all'
                },
            ],
            data: [
                {
                    imgurl: require('../../images/scenicpic1.jpg'),
                    title: '禅域小镇',
                    explain: '广东省云浮市新兴县六祖镇',
                    price: '198',
                    distance: '35.49'
                },
                {
                    imgurl: require('../../images/scenicpic2.jpg'),
                    title: '禅泉温泉',
                    explain: '广东省云浮市新兴县六祖度假村',
                    price: '68',
                    distance: '40.61'
                },
                {
                    imgurl: require('../../images/scenicpic3.jpg'),
                    title: '天露山禅龙峡漂流',
                    explain: '广东省云浮市新兴县落洞村',
                    price: '70',
                    distance: '50.76'
                },
            ],
            data2: [
                {
                    imgurl: require('../../images/scenicpic1.jpg'),
                    title: '禅域小镇',
                    explain: '广东省云浮市新兴县六祖镇',
                    price: '198',
                    distance: '35.49'
                },
                {
                    imgurl: require('../../images/scenicpic3.jpg'),
                    title: '天露山禅龙峡漂流',
                    explain: '广东省云浮市新兴县落洞村',
                    price: '70',
                    distance: '50.76'
                },
            ],

        }
        this.goto = this.goto.bind(this)
        // this.back = this.back.bind(this)
    }
    goto(path) {
        let { history } = this.props
        history.push(path);
    }
    // back(){
    //     let {history} = this.props;
    //     history.goBack();
    // }
    render() {
        let { navs, scenic, tabs, data,data2 } = this.state
        let { url, path } = this.props.match
        console.log(this.props.match)
        return (
            <div className="Tickets">
                <div className="header">
                    <img src={require("../../images/left.png")} alt="" className="icon4" onClick={this.goto.bind(this, '/home')} />
                    <form>
                        <input type="search" className="search1" placeholder="搜索目的地/关键词" onClick={this.goto.bind(this, '/searchPage')} />
                    </form>
                    <div className="right">云浮</div>
                </div>
                <div className="banner">
                    <Sliders
                        images={Img}
                        speed={1}
                        delay={2}
                        autoPlay={true}
                        autoParse={true}
                    />
                </div>
                <div className="wordsnav">
                    <div className="img">
                        <img src={require("../../images/ticketimg.png")} alt="" />
                    </div>
                    <div className="locals">
                        <p className="title">禅域小镇</p>
                        <p className="money">￥<span className="localssp1">198</span><span className="localssp2">起</span>
                            <span className="localssp3">></span></p>
                    </div>
                </div>
                <div className="iconnavi">
                    {
                        navs.map(item => (
                            <div className="iconnavibox" key={item.title}>
                                <img src={item.imgurl} alt="" />
                                <p>{item.title}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="sentiment">
                    <p className="subtitle">
                        <span className="destinations">精选人气景点</span>
                    </p>
                    <div className="scenic-pic">
                        {
                            scenic.map(item => (
                                <div className="scenicBox" key={item.title}>
                                    <img src={item.imgurl} alt="" />
                                    <p>{item.title}</p>
                                    <span className="prices">
                                        ￥<b>{item.price}</b><span>起</span>
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="detail-tab">
                    <ul className="tab-line">
                        {
                            tabs.map(item => {
                                return <li key={item.name}><NavLink style={{
                                    listStyle: 'none', height: '1.2266666666666666rem',
                                    display: 'block', textDecoration: 'none', color: '#4f4f4f'
                                }} activeStyle={{ color: '#a50b73', fontWeight: '600', borderBottom: '1px solid #a50b73' }} to={url + item.path} key={item.name}>{item.title}</NavLink></li>
                            })
                        }
                    </ul>
                    <Switch>
                        <Route path={path + '/nearest'} render={() => {
                            return <div className="navsBox">
                                <div className="navsMain">
                                    <ul>
                                        {
                                            data2.map(item => {
                                                return <li className="navsMainLi" key={item.title}>
                                                    <div className="navsMainImg">
                                                        <img src={item.imgurl} alt={item.title} />
                                                    </div>
                                                    <div className="navsMainRight">
                                                        <p className="product_name">{item.title}</p>
                                                        <p className="address">{item.explain}</p>
                                                        <p className="label"></p>
                                                        <div className="info">
                                                            <p>
                                                                <span className="price">￥
                                                                            <b>{item.price}</b>
                                                                    <span className="sxxx">起</span>
                                                                </span>
                                                            </p>
                                                            <p className="data">距离：{item.distance}KMkm</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        }} />
                        <Route path={path + '/today'} render={() => {
                            return <div className="navsBox">
                                <div className="navsMain">
                                    <ul>
                                        {
                                            data.map(item => {
                                                return <li className="navsMainLi" key={item.title}>
                                                    <div className="navsMainImg">
                                                        <img src={item.imgurl} alt={item.title} />
                                                    </div>
                                                    <div className="navsMainRight">
                                                        <p className="product_name">{item.title}</p>
                                                        <p className="address">{item.explain}</p>
                                                        <p className="label"></p>
                                                        <div className="info">
                                                            <p>
                                                                <span className="price">￥
                                                                            <b>{item.price}</b>
                                                                    <span className="sxxx">起</span>
                                                                </span>
                                                            </p>
                                                            <p className="data">距离：{item.distance}KMkm</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        }} />
                        <Route path={path + '/all'} render={() => {
                            return <div className="navsBox">
                                <div className="navsMain">
                                    <ul>
                                        {
                                            scenic.map(item => {
                                                return <li className="navsMainLi" key={item.title}>
                                                    <div className="navsMainImg">
                                                        <img src={item.imgurl} alt={item.title} />
                                                    </div>
                                                    <div className="navsMainRight">
                                                        <p className="product_name">{item.title}</p>
                                                        <p className="address">{item.explain}</p>
                                                        <p className="label"></p>
                                                        <div className="info">
                                                            <p>
                                                                <span className="price">￥
                                                                            <b>{item.price}</b>
                                                                    <span className="sxxx">起</span>
                                                                </span>
                                                            </p>
                                                            <p className="data">距离：{item.distance}KMkm</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        }} />

                    </Switch>
                    <Redirect to={url + '/nearest'} />
                </div>
            </div>
        )
    }
}


export default Tickets