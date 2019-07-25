import React, { Component } from 'react'
import './Home.css'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx';
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
                    imgurl:require("../../images/menpiao.png")
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
    }
    render() {
        let {navs} = this.state
        return (
            <div id="home">
                <Header></Header>
                <nav>
                    <ul className="navList">
                        {
                            navs.map(item=>(
                                <li key={item.title}>
                                    <img src={item.imgurl} alt=""/>
                                    <p>{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="banner">
                        
                    </div>
                </nav>
                <Footer></Footer>
            </div>
        )
    }
}


export default Home