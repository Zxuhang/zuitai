import React, { Component,Fragment } from 'react';
import Banner from './banner'
import Aboutus from './aboutus'
import Bottom from './bottom.js'
import './css/about.css'

import Swiper from 'swiper/dist/js/swiper.js'

import 'swiper/dist/css/swiper.min.css'
class home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        let text = ['2019年','2018年','2017年']
        new Swiper('.swiper-container', {
            pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                  renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + text[index] + '</span>';
                  },
            },
          });  
    }
    render() { 
        return ( <Fragment>
            <Banner bannerClass="banner4" />
            
            <div className="zt-about">
                <h3>关于我们</h3>
                <div>
                    <div>
                        <p>
                        香港醉泰集团始建于2016年，是一家包含文化传媒、电子商务、通讯科技、金融外汇、汽车贸易、农业生物科技等多家产业在内的国际化企业，集团秉承着以服务于大众、造福于社会的精神，以合作为主的经营理念，致力于打造一个实体与虚拟经济并存的多平台产业链。
                        </p>
                        <hr/>
                        <h3>团队文化</h3>
                         <p>我们坚持合作为主、互利共赢的理念；我们保持不卑不亢、不骄不躁的初心；我们尊崇敢做、敢当、敢闯的创新精神；我们致力于快速高效的开发多个产业，形成产业链条，为社会大众提供全方位服务。</p>
                        <hr/>
                    </div>
                    <div>
                        <img src={require('./images/logo1.png')} alt="醉泰集团"/>
                    </div>
                    
                </div>
            </div>
            <div className="zt-course">
                <h3>公司历程</h3>
                <p>团结、向上、对未来保持敬畏</p>
                <div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">醉泰集团各个子公司正式开始独立运营，包括醉泰文化传媒有限公司、醉泰通讯科技有限公司、醉泰国际金融有限公司、醉泰生物科技有限公司四大支柱。四个子公司共同进步，同步发展。</div>
                        <div className="swiper-slide">生物科技有限公司发展迅猛，逐渐发展壮大。后有汽贸、生物科技、农业产品、传媒等业务相继加入，总部扩张，部门飞速增加，公司正式改名为醉泰国际集团，开始接手国外业务。</div>
                        <div className="swiper-slide">河北生物科技有限公司成立，地址位于康桥国际；初期以网络技术开发为核心，以商城为业务。而后不断累积客户，并向外延伸其他业务</div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                </div>
            </div>
            <Aboutus />
            <Bottom />
        </Fragment> );
    }
}
 
export default home;