import React, { Component } from 'react'
import {Route,withRouter} from 'react-router-dom'
import './Home.css'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx';
import Tickets from '../Tickets/Tickets.jsx'
import Sliders from '../../components/Sliders.js';
const Img = [
    require('../../images/homeBannerPic1.jpg'),
    require('../../images/homeBannerPic2.jpg'),
    require('../../images/homeBannerPic3.jpg'),
]
class Home extends Component {
    constructor(){
        super()
        this.state={
            navs:[
                {
                    title:'酒店',
                    imgurl:require("../../images/jiudian.png")
                },
                {
                    title:'门票',
                    imgurl:require("../../images/menpiao.png"),
                    path:'/tickets'
                },
                {
                    title:'目的地商城',
                    imgurl:require("../../images/mudidi.png")
                },
                {
                    title:'跟团游',
                    imgurl:require("../../images/gentuanyou.png")
                },
                {
                    title:'自由行',
                    imgurl:require("../../images/ziyouxing.png")
                },
                {
                    title:'周边游',
                    imgurl:require("../../images/zhoubianyou.png")
                }
            ]
        }
        this.goto=this.goto.bind(this)
    }
    goto(path){
        let {history} = this.props
        history.push(path)
    }
    render() {
        let {navs} = this.state
        return (
            <div id="home">
                <Header></Header>
                <nav>
                    <ul className="navList">
                        {
                            navs.map((item)=>(
                                <li key={item.title} onClick={this.goto.bind(this,item.path)}>
                                    <img src={item.imgurl} alt=""/>
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

                </nav>
                <Footer></Footer>
            </div>
        )
    }
}

Home = withRouter(Home)
export default Home