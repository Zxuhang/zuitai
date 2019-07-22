import React, { Component } from 'react';
import ColumnTitle from './columnTitle'
import './css/services.css'

class services extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <article className="zt-services">
                <ColumnTitle ztitle='我们的业务' ftitle='Our Services'/>
                <ul>
                    <li>
                        <div>
                            <div>
                                <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-minsu_"></use>
                                </svg>
                            </div>
                            <div>
                                <h4>途家民宿</h4>
                                <h5>Way home stay facility </h5>
                            </div>
                        </div>
                        <p>
                        民宿有专属微信小程序，小程序中提供公寓、客栈、民宿、别墅等多住宿体验；性价比更高，适合全家出游，出差能洗衣，带娃能做饭，旅行如回家。
                        </p>
                    </li>
                    <li>
                        <div>
                            <div>
                                <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-zhuangxiu"></use>
                                </svg>
                            </div>
                            <div>
                                <h4>帝嘉装饰</h4>
                                <h5>Emperor jia decoration</h5>
                            </div>
                        </div>
                        <p>
                        帝嘉是一家集装饰设计、工程施工、室内装修于一体的装饰有限公司，公司始终坚持以“诚信为本，踏实做事”为宗旨，始终将用户放在第一位的原则。
                        </p>
                    </li>
                    <li>
                        <div>
                            <div>
                                <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-qiche"></use>
                                </svg>
                            </div>
                            <div>
                                <h4>汽车贸易</h4>
                                <h5>Motorcar trade</h5>
                            </div>
                        </div>
                        <p>
                        公司可进行汽车销售、汽车零部件销售、汽车美容/装潢、汽车维修、汽车保险、汽车销售代理、汽车租赁、汽车信息咨询服务、汽车展览展示服务、二手汽车交易等
                        </p>
                    </li>
                    <li>
                        <div>
                            <div>
                                <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-yishushejichuanmei"></use>
                                </svg>
                            </div>
                            <div>
                                <h4>醉泰文化传媒</h4>
                                <h5>Zuitai cultural media</h5>
                            </div>
                        </div>
                        <p>
                        集MG动画、影视制作、网络开发、抖音代运营、活动策划和创意设计于一体的文化传媒有限公司。能够为客户提供独居创意和定位精准的营销方案。
                        </p>
                    </li>
                </ul>
            </article>
         );
    }
}
 
export default services;