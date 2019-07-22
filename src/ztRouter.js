import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Banner from './banner'
import Banner1 from './banner1'
class ztRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Router>
                <Route exact path="/" component={Banner} />
                <Route path="/banner1" component={Banner1} />
            </Router> 
        );
    }
}
 
export default ztRouter;