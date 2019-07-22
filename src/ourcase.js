import React, { Component } from 'react';
import ColumnTitle from './columnTitle'
import './css/ourcase.css'
class ourcase extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <article className="zt-ourcase">
                <ColumnTitle ztitle='我们的案例' ftitle='Our Case'/>
                <ul>
                    <li>
                        <div>
                            独特画册设计
                        </div>
                        <img src={require('./images/case1.jpg')} alt="醉泰集团" />
                        
                    </li>
                    <li>
                        <img src={require('./images/case2.jpg')} alt="醉泰集团" />
                        <div>
                        VI包装设计
                        </div>
                    </li>
                    <li>
                        <img src={require('./images/case3.jpg')} alt="醉泰集团" />
                        <div>
                        宣传海报设计
                        </div>
                    </li>
                    <li>
                        <img src={require('./images/case4.jpg')} alt="醉泰集团" />
                        <div>
                        专属logo设计
                        </div>
                    </li>
                </ul>
            </article>
         );
    }
}
 
export default ourcase;