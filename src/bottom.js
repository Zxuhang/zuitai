import React, { Component } from 'react';

import { BrowserRouter as  Link } from "react-router-dom"
class contactus extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        
    }
    render() { 
        return ( <footer className="zt-bottom">
        <div>
        {/* <div class="bdsharebuttonbox">
            <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
            <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
            <a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a>
            <a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a>
            <a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
        </div> */}
            <ul id="bdshare" className="bdsharebuttonbox">      
                <li><a className="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a></li>
                <li><a className="bds_weixin" data-cmd="weixin" title="分享到微信"></a></li>
                {/* <li><a className="bds_tqq"></a></li>
                <li><a className="bds_renren"></a></li> */}
            </ul>
            <div className="zt-link">           
                
                <Link to="/">首页</Link>
                <Link to="/business">集团业务</Link>
                <a href="zuitaiCulturalMedia/index.html" target="_blank">醉泰传媒</a>
                <Link to="/contactus">联系我们</Link>
                <Link to="/about">关于我们</Link>
            </div>
            <p>工作时间：9：00 — 17：00</p>
            <p>邮箱：2653816740@qq.com</p>
            <p>地址：河北省邯郸市滨河世纪大厦1807</p>
        </div>
        <div>Copyright © 2018.Company name All rights reserved.</div>
        </footer>);
    }
}
//  window.onload = function(){
//      document.querySelector('.zt-bottom').style.display = 'none'
//  }
export default contactus;