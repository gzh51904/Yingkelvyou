import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Home.css'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx';
import Sliders from '../../components/Sliders.js';
const Img = [
    require('../../images/homeBannerPic1.jpg'),
    require('../../images/homeBannerPic2.jpg'),
    require('../../images/homeBannerPic3.jpg'),
]
class Home extends Component {
    constructor() {
        super()
        this.state = {
            navs: [
                {
                    title: '酒店',
                    imgurl: require("../../images/jiudian.png"),
                    path: '/hotel'
                },
                {
                    title: '门票',
                    imgurl: require("../../images/menpiao.png"),
                    path: '/tickets'
                },
                {
                    title: '目的地商城',
                    imgurl: require("../../images/mudidi.png")
                },
                {
                    title: '跟团游',
                    imgurl: require("../../images/gentuanyou.png")
                },
                {
                    title: '自由行',
                    imgurl: require("../../images/ziyouxing.png")
                },
                {
                    title: '周边游',
                    imgurl: require("../../images/zhoubianyou.png")
                }
            ],
            tipes_navs: [
                {
                    title: '机票',
                    content: '出行保障'
                },
                {
                    title: '火车票',
                    content: '快乐出行'
                },
                {
                    title: '签证',
                    content: '在线办理'
                },
                {
                    title: '游轮',
                    content: '海上时光'
                },
                {
                    title: '定制游',
                    content: '量身定制'
                },
                {
                    title: '店铺',
                    content: '包罗万象'
                },
                {
                    title: '魅力中国城',
                    content: '畅游中国'
                },
                {
                    title: '加入我们',
                    content: '共享双赢'
                }
            ],
            dest: [
                {
                    imgurl: require('../../images/homeDestPic1.jpg'),
                    title: 'ZYGL-豪华国际五星酒店-曼谷+芭提雅',
                    type: '跟团游',
                    price: 5790,
                    id:1
                },
                {
                    imgurl: require('../../images/homeDestPic2.jpg'),
                    title: '【本州欢乐深度合家欢】-四乐园七日游（EY名名）',
                    type: '跟团游',
                    price: 9980,
                    id:2
                },
                {
                    imgurl: require('../../images/homeDescPic3.jpeg'),
                    title: '【放肆云南】昆明大理丽江泸沽湖双飞一卧6日',
                    type: '跟团游',
                    price: 4780,
                    id:3
                },
                {
                    imgurl: require('../../images/homeDestPic4.jpg'),
                    title: '沙欢有礼：希拉穆仁草原+银肯响沙湾+呼和浩特双卧',
                    type: '跟团游',
                    price: 1099,
                    id:4
                },
            ],
            recommend: [
                {
                    imgurl: require('../../images/homeRecommendPic1.jpg'),
                    title: '美丽中国城钻石路线+德宏站',
                    type: '跟团游',
                    price: 1500,
                    id:5
                },
                {
                    imgurl: require('../../images/homeRecommendPic2.jpg'),
                    title: '美丽中国城钻石路线-茂名站',
                    type: '跟团游',
                    price: 1290,
                    id:6
                },
                {
                    imgurl: require('../../images/homeRecommendPic3.jpg'),
                    title: '魅力中国城钻石路线+黔东南站5日游',
                    type: '跟团游',
                    price: 2450,
                    id:7
                },
                {
                    imgurl: require('../../images/homeRecommendPic4.jpg'),
                    title: '美丽中国钻石路线-盘锦站',
                    type: '跟团游',
                    price: 690,
                    id:8
                },
            ],
            intros:[
                {
                    title:'西藏江南，醉美林芝！5分钟带您欣赏林芝一年十二景',
                    location:'西藏 情侣 蜜月 购物',
                    imgurl:require('../../images/homeIntroPic1.jpg'),
                    id:9
                },
                {
                    title:'全国最全赏樱攻略，攒个周末说走就走！',
                    location:'北京 摄影 亲子 情侣',
                    imgurl:require('../../images/homeIntroPic2.jpeg'),
                    id:10
                },
                {
                    title:'一年疯玩在于春！送你一份四海八荒青春踏青攻略',
                    location:'全国 情侣 摄影',
                    imgurl:require('../../images/homeIntroPic3.jpeg'),
                    id:11
                }
            ],
            favorite:[
                {
                    imgurl:require('../../images/homeFavoPic1.jpg'),
                    title:'内蒙古呼伦贝尔大草原完美8日深度游',
                    type:'自由行',
                    price:2180,
                    id:12
                }
            ]

        }
        this.goto = this.goto.bind(this)
        this.gotodetails = this.gotodetails.bind(this)
    }
    goto(path) {
        let { history } = this.props
        history.push(path)
    }
    gotodetails(item){
        console.log(item)
        let { history } = this.props
        history.push({
            pathname: '/details',
            search: '?id=' + item.id,
            state: item 
        })
    }

    render() {
        let { navs, tipes_navs, dest, recommend, intros, favorite } = this.state
        return (
            <div id="home">
                <Header></Header>
                <nav>
                    <ul className="navList">
                        {
                            navs.map((item) => (
                                <li key={item.title} onClick={this.goto.bind(this, item.path)}>
                                    <img src={item.imgurl} alt="" />
                                    <p>{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="banner">
                        <Sliders
                            images={Img}
                            speed={1}
                            delay={2}
                            autoPlay={true}
                            autoParse={true}
                        />
                    </div>
                    <div className="tipers">
                        {
                            tipes_navs.map(item => (
                                <dl key={item.title}>
                                    <dt>{item.title}</dt>
                                    <dd>{item.content}</dd>
                                </dl>
                            ))
                        }
                    </div>
                </nav>
                <main>
                    <section className="sec">
                        <div className="sectitle">活动专区</div>
                        <ul>
                            <li><img src={require("../../images/homeSec1.png")} alt="" /></li>
                            <li><img src={require("../../images/homeSec2.png")} alt="" /></li>
                            <li><img src={require("../../images/homeSec3.png")} alt="" /></li>
                            <li><img src={require("../../images/homeSec4.png")} alt="" /></li>
                        </ul>
                    </section>
                    <section className="sec2">
                        <div className="sec2title">热门目的地</div>
                        <ul>
                            {
                                dest.map(item => (
                                    <li key={item.title} onClick={this.gotodetails.bind(this,item)}>
                                        <img src={item.imgurl} alt={item.title}/>
                                        <div className="sec2Product">
                                            <p>{item.title}</p>
                                            <span className="sec2type">
                                                {item.type}
                                            </span>
                                            <div className="
                                            sec2price">
                                                <span>￥</span>
                                                <em>{item.price}</em>
                                                <span>起</span>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </section>
                    <section className="sec3">
                        <div className="sec3title">
                            精品推荐
                        </div>
                        <ul>
                            {
                                recommend.map(item => (
                                    <li key={item.title} onClick={this.gotodetails.bind(this,item)}>
                                        <img src={item.imgurl} alt={item.title}/>
                                        <div className="sec2Product">
                                            <p>{item.title}</p>
                                            <span className="sec2type">
                                                {item.type}
                                            </span>
                                            <div className="
                                            sec2price">
                                                <span>￥</span>
                                                <em>{item.price}</em>
                                                <span>起</span>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </section>
                    <section className="intro">
                        <div className="introtitle">精选推文</div>
                        <div className="mainTweet">
                            <img src={require('../../images/mainTweet.jpg')} alt=""/>
                            <p>一生中必去一次的人间仙境</p>
                        </div>
                        <ul>
                            {
                                intros.map(item=>(
                                    <li key={item.title} onClick={this.gotodetails.bind(this,item)}>
                                        <img src={item.imgurl} alt={item.title}/>
                                        <div className="tweet_container">
                                            <p>{item.title}</p>
                                            <span>{item.location}</span>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </section>
                    <section className="sec2 lastsec">
                        <div className="sec2title guess">
                            <em className="line"></em>
                            <img src={require('../../images/favoPanda.png')} alt=""/>
                            <span>猜你喜欢</span>
                            <em className="line"></em>
                        </div>
                        <ul>
                            {
                                favorite.map(item => (
                                    <li key={item.title} onClick={this.gotodetails.bind(this,item)}>
                                        <img src={item.imgurl} alt={item.title}/>
                                        <div className="sec2Product">
                                            <p>{item.title}</p>
                                            <span className="sec2type">
                                                {item.type}
                                            </span>
                                            <div className="
                                            sec2price">
                                                <span>￥</span>
                                                <em>{item.price}</em>
                                                <span>起</span>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </section>
                </main>
                <Footer></Footer>
            </div>
        )
    }
}

Home = withRouter(Home)
export default Home