import React, { Component } from 'react';
import ColumnTitle from './columnTitle'
import './css/aboutus.css'
class aboutus extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <article className="aboutus-article">
                <div className="zt-aboutus">
                    <ColumnTitle ztclass="f-white" ztitle='关于我们' ftitle='About US'/>
                    <p>
                    香港醉泰集团是一家包含文化传媒、通讯科技、金融外汇、农业生物科技等多家产业在内的国际化企业，集团秉承着以服务于大众、造福于社会的精神，以合作为主的经营理念，致力于打造一个实体与虚拟经济并存的多平台产业链。
                    </p>
                </div>
                
            </article>
         );
    }
}
 
export default aboutus;