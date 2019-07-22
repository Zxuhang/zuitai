import React, { Component,Fragment } from 'react';

import Banner from './banner'
import Services from './services'
import Dowhat from './doWhat'
import Bottom from './bottom.js'
class business extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <Fragment>
            <Banner bannerClass="banner2" />
            <Services />
            <Dowhat />
            <Bottom />
            
        </Fragment> );
    }
}
 
export default business;