import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';

class PrivateRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: window.localStorage.getItem("token") ? true: false
        }
    }

    componentWillMount() {
        if(!this.state.isLogin){
            const {history} = this.props;
            history.replace("/login");
        }
    }

    render() {
        let { component: Component, ...rest} = this.props;
        return  this.state.isLogin ? 
        (<Route {...rest} render={(props) => ( <Component {...props} /> 
            )}/> ) : (<p>请登录...</p>)

    }
}

export default withRouter(PrivateRoute);