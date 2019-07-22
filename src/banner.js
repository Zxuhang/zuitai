import React, { Component } from 'react';
import './css/banner.css'
class banner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        
        this.scrollAnimation = this.scrollAnimation.bind(this)//背景图片跟随滚动条
    }
    
    componentDidMount(){
        window.scrollTo(0, 0);
        window.addEventListener('scroll', this.scrollAnimation)
    }
    render() { 
        let className = 'zt-banner zt-' + this.props.bannerClass;
        return ( 
            <div className={className}>
                <div>
                    {/* <h1>欢迎来到醉泰集团官网欢迎来到醉泰集团官网</h1>
                    <h4>欢迎来到醉泰集团官网</h4> */}
                </div>                
            </div>
        );
    }
    
    scrollAnimation(e){
        let scrollTop = 0;
        if(document.documentElement&&document.documentElement.scrollTop)
        {
            scrollTop=document.documentElement.scrollTop;
        }
        else if(document.body)
        {
            scrollTop=document.body.scrollTop;
        }
        document.querySelector('.zt-banner').style.backgroundPositionY = scrollTop/2 + 'px';
    }
}
 
export default banner;