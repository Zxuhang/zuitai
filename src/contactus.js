import React, { Component,Fragment } from 'react';
import Banner from './banner'
import './css/contactus.css'
class contactus extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        
    }
    render() { 
        return ( <Fragment>
            <Banner bannerClass="banner3" />
            <div className="zt-contactus">
                    <div>
                        <img src={require('./images/ditu.png')} alt="醉泰集团"/>
                    </div>
                    <div>
                        <h3>联系我们</h3>
                        <div>我们已经准备好了，随时为您提供专业的支持。</div>
                        <p>Address：河北省邯郸市和平路与滏西大街交叉口滨河世纪大厦7楼7001号</p>
                        <p>Email：2653816740@qq.com</p>
                        <p>QQ：2653816740</p>
                        <p>el：0310-3028060</p>
                    </div>
            </div>
        </Fragment> );
    }
}
//  window.onload = function(){
//      document.querySelector('.zt-bottom').style.display = 'none'
//  }
export default contactus;