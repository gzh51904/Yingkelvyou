import React, { Component } from 'react';
import {Icon} from 'antd';
import '../../css/reset.css';
import './shop.scss';
import '../../assets/js/rem.js';
import Axios from 'axios';
import img from '../../images/ia_9.png';

class Shop extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: []
        }
        this.goto = this.goto.bind(this)
    }

    goto(path){
        let {history} = this.props
        history.push(path)
    }

    componentWillMount(){
        Axios.get('https://newm.yktour.com.cn/api/app/shop/distance?longitude=113.1017375&latitude=22.93212254&orgId=&keyWords=&currentPage=2&pageSize=10', {})
            .then(res => {
                //  if(res.msg === 'success'){
                    this.setState({data: res.data.data.orgInfoList})
                    console.log(res.data.data.orgInfoList);
                    
                //  }
            })

    }
    






    render(){
        let {data} = this.state;



        return(
            <div className="nebShop">
                <div className="header">
                    <i onClick={this.goto.bind(this,'/Mine')}><Icon type="left" /></i>
                    <input type="text" placeholder="请输入门店名称" value=""/>
                    <i><Icon className="search" type="search" /></i>
                </div>
                <div className="shopList">
                    <ul>
                        {
                            data.map((Item,idx)=>{
                                return (
                                    <li>
                                        <div className="info">
                                            <div className="leftImg">
                                                <img src={Item.url} alt=""/>
                                            </div>
                                            <div className="nameAndAddress">
                                                <p className="shopName">{Item.name}</p>
                                                <p className="shopAddress">{Item.address}</p>
                                            </div>
                                            <div className="distance">
                                                <p className="length">{Item.distance}</p>
                                                <span>
                                                    <img src={img} alt=""/>
                                                </span>
                                            </div>
                                            


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

    export default Shop;