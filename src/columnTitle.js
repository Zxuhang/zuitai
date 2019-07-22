import React, { Component } from 'react';
import './css/ctitle.css'
class ctitle extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let className = 'c-b '+ this.props.ztclass;
        return ( 
            <div className="c-title">                
                <h3 className={className}>{this.props.ztitle}</h3>
                <h4 className={className}>{this.props.ftitle}</h4>
            </div>
         );
    }
}
 
export default ctitle;