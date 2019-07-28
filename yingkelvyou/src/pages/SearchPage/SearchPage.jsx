import React, { Component } from 'react'
import { Route, withRouter, HashRouter } from 'react-router-dom'
import Home from '../Home/Home.jsx'
import './SearchPage.css'
class SearchPage extends Component {
    constructor() {
        super()
        this.goto = this.goto.bind(this)
    }
    goto(path) {
        let { history } = this.props
        history.push(path)
    }
    render() {
        return (
            <div id="SearchPage">
                <div className="hd">
                    <input id="ss1" type="text" placeholder="搜索目的地/关键词" />
                    <label htmlFor="ss1">
                        <img src={require("../../images/fdj.png")} className="icon2" alt="" />
                    </label>
                    <img src={require("../../images/left.png")} alt="" className="icon3" onClick={this.goto.bind(this,'/home')}/>
                </div>
                <div className="contain">
                    <h6 className="recommend">目的地推荐</h6>
                    <div className="recommendListBox">
                        <p>北京</p>
                        <p>上海</p>
                        <p>日本</p>
                        <p>泰国</p>
                        <p>海南</p>
                        <p>厦门</p>
                        <p>西北</p>
                        <p>桂林</p>
                        <p>杭州</p>
                        <p>成都</p>
                        <p>西藏</p>
                        <p>贵州</p>
                        <p>巴厘岛</p>
                        <p>香港</p>
                        <p>新加坡</p>
                        <p>澳大利亚</p>
                        <p>新西兰</p>
                        <p>曼谷</p>
                        <p>迪拜</p>
                        <p>普吉</p>
                        <p>云南</p>
                        <p>湖南</p>
                    </div>
                    <div className="btnBox">
                        <p>目的地大全</p>
                    </div>
                </div>
                <HashRouter>
                    <Route path="/home" component={Home} />
                </HashRouter>
            </div>
        )
    }
}

SearchPage = withRouter(SearchPage)
export default SearchPage