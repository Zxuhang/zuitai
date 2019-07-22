import React, { Component,Fragment } from 'react';
import Banner from './banner'
import Services from './services'
import Ourcase from './ourcase'
import Aboutus from './aboutus'

import Bottom from './bottom.js'
class home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <Fragment>
            <Banner bannerClass="banner1" />
            <Services />
            <Ourcase />
            <Aboutus />
            <Bottom />
        </Fragment> );
    }
}
 
export default home;