import React, { Component } from 'react';
import ColumnTitle from './columnTitle'
import './css/dowhat.css'
class dowhat extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <article className="zt-dowhat">
                <ColumnTitle ztclass="f-white" ztitle="我们能做什么" ftitle="What can we do?"/>
                <p>我集团是一家拥有多家产业的国际化企业，集团始终秉承着“顾客第一，用户至上”的精神，我们可以为您提供多方面的服务</p>
                <ul>
                    <li>广告制作与包装、影视娱乐</li>
                    <li className="center">通讯技术、五金焦点销售</li>
                    <li className="right">汽车贸易、汽车相关服务</li>
                    <li>技术开发、技术支持、美术设计</li>
                    <li className="center">国际外汇、专属MT4平台</li>
                </ul>
            </article>
         );
    }
}
 
export default dowhat;