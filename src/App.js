import React, { Component,Fragment } from 'react';//Fragment 组件最外面的元素不渲染
import './css/home.css'
import changedFontSize from './mobileAdaptation'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import Home from './home'
import Business from './business'
import Contactus from './contactus'
import About from './about'
import { Drawer } from 'antd';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
        changedFontSize()//适应屏幕
        window.onresize = changedFontSize;
        this.scrollAnimation = this.scrollAnimation.bind(this);
    }
    componentWillMount(){
        window.addEventListener('scroll', this.scrollAnimation)
    }
    
    showDrawer = () => {
    this.setState({
        visible: true,
        });
    };

    onClose = () => {
        this.setState({
        visible: false,
        });
    };
    render() { 
        
        return ( 
            <Fragment>
                <Router>                    
                    <header ref={(ztop)=>{this.ztop = ztop}} className="zt-top">
                        <div>
                            <img src={require('./images/logo.png')} alt="醉泰集团"/>
                            <div className="zt-link">
                            
                                <NavLink activeStyle={{
                                    fontWeight: "bold",
                                    color: "#72bbff"
                                }} to="/home">首页</NavLink>
                                <NavLink activeStyle={{
                                    fontWeight: "bold",
                                    color: "#72bbff"
                                }}  to="/business">集团业务</NavLink>
                                <a href="zuitaiCulturalMedia/index.html" target="_blank">醉泰传媒</a>
                                <NavLink activeStyle={{
                                    fontWeight: "bold",
                                    color: "#72bbff"
                                }}  to="/contactus">联系我们</NavLink>
                                <NavLink activeStyle={{
                                    fontWeight: "bold",
                                    color: "#72bbff"
                                }}  to="/about">关于我们</NavLink>
                            </div>
                        </div>
                    </header>
                    <header ref={(ztop)=>{this.ztop1 = ztop}} className="zt-top1">
                        <div>
                            <img src={require('./images/logo.png')} alt="醉泰集团"/>
                            <div onClick={this.showDrawer}>☰</div>
                        </div>
                         <Drawer               
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                        >
                            <div className="zt-link1">
                                <NavLink activeStyle={{
                                    fontWeight: "bold",
                                    color: "#72bbff"
                                }} to="/home">首页</NavLink>
                                <NavLink activeStyle={{
                                    fontWeight: "bold",
                                    color: "#72bbff"
                                }}  to="/business">集团业务</NavLink>
                                <a href="zuitaiCulturalMedia/index.html" target="_blank">醉泰传媒</a>
                                <NavLink activeStyle={{
                                    fontWeight: "bold",
                                    color: "#72bbff"
                                }}  to="/contactus">联系我们</NavLink>
                                <NavLink activeStyle={{
                                    fontWeight: "bold",
                                    color: "#72bbff"
                                }}  to="/about">关于我们</NavLink>
                            </div>
                        
                        </Drawer>
                    </header>
                   
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/business" component={Business} />
                    <Route exact path="/contactus" component={Contactus} />
                    <Route exact path="/about" component={About} />
                    
                </Router>
                
            </Fragment>
         );
    }
    
    scrollAnimation(e)  {
        
        let scrollTop = 0;
        if(document.documentElement&&document.documentElement.scrollTop)
        {
            scrollTop=document.documentElement.scrollTop;
        }
        else if(document.body)
        {
            scrollTop=document.body.scrollTop;
        }
        if(scrollTop >= 66){
            this.ztop.style.backgroundColor = 'rgba(42,42,42,1)';
            this.ztop1.style.backgroundColor = 'rgba(42,42,42,1)';
            this.ztop.querySelector('img').style.width = '1.5rem';
        }
        if(scrollTop < 66){
            this.ztop.style.backgroundColor = 'rgba(42,42,42,0)';
            this.ztop1.style.backgroundColor = 'rgba(42,42,42,0)';
            this.ztop.querySelector('img').style.width = '1.86rem';
        }
    }
}
 
export default App;