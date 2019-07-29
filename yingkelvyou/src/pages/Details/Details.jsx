import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './Details.css'

class Details extends Component {
    constructor() {
        super()
        this.goback = this.goback.bind(this)

    }
    goback(path) {
        let { history } = this.props
        history.push(path)
    }

    render() {
        let { state } = this.props.location
        console.log(state)
        return (<div>
            <div className="detailsheader">
                <div className="dheaderbtn">
                    <button className="dheaderbtnNormal">
                        <img src={require('../../images/left.png')} alt="" onClick={this.goback.bind(this, '/home')} />
                    </button>
                </div>
                <h1 className="detailstitle">产品详情</h1>
            </div>
            <div className="topbanner">
                <img src={state.imgurl} alt="" />
                <span className="detailstype">{state.type}</span>
            </div>
            <div className="basemsg">
                <p className="detailsBaseTitle">{state.title}</p>
                <p className="detailsBaseMoney">
                    ￥<span className="detailsBasePrice">{state.price}</span>
                    <span className="detailsBaseSince">起</span>
                </p>
                <p className="detailsBaseDetails">
                    <span className="detailsBaseLevel">月销0笔</span>
                    <span className="detailsBaseplace">盈科总部</span>
                </p>
                <div className="preferential"></div>
            </div>
            <div className="start-city">
                <p className="wherego">北京出发</p>
                <p className="selectgo">
                    更多出发城市>
                </p>
            </div>
            <div className="detailsPrice">
                <p className="detailsData">
                    出发日期及价格
                    <span>(以下价格均为起价)</span>
                </p>
                <div className="detailsDataPrice">
                    <p className="detailsDataTime">07-31 周三</p>
                    <p className="detailsDataMoney">￥{state.price}</p>
                </div>
                <div className="detailsDataPrice">
                    <p className="detailsDataTime">08-01 周四</p>
                    <p className="detailsDataMoney">￥{state.price}</p>
                </div>
                <div className="detailsDataPrice">
                    <p className="detailsDataTime">08-02 周五</p>
                    <p className="detailsDataMoney">￥{state.price}</p>
                </div>
            </div>
            <div className="detailsNear">
                <p>附近有9家盈科门店</p>
                <p className="detailsDistance">></p>
            </div>
            <div className="detailsView">
                <p>查看详细行程></p>
            </div>
            <div className="detailsCost">
                <h4>费用包含</h4>
                <p>精品+酒店（含早）+境外旅游意外险</p>
                <h4>费用不包含</h4>
                <p>其他一切费用不包含中的其他项目</p>
                <h4>购物推荐</h4>
            </div>
            <div className="detailsLimit">
                <h4>预定须知</h4>
            </div>
            <div className="detailsMenu">
                <div className="left">
                    <div className="detailsMenuItem">
                        <span>咨询</span>
                        <span>
                            <img src={require('../../images/detailszixun.png')} alt="" />
                        </span>
                    </div>
                    <p className="detailsMenuItem">
                        <span>收藏</span>
                        <span>
                            <img src={require('../../images/detailsstar.png')} alt="" />
                        </span>
                    </p>
                    <p className="detailsMenuItem">
                        <span>店铺</span>
                        <span>
                            <img src={require('../../images/detailsdianpu.png')} alt="" />
                        </span>
                    </p>
                </div>
                <div className="right">立即预定</div>
            </div>
        </div>)
    }
}

Details = withRouter(Details)
export default Details 