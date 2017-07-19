import React, { Component } from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
// Components
import {BackgroundWrapper} from './loginAnimate/components';
import AAA from './loginAnimate/pages/Login';
class Login extends Component {
    state = {  }
    render() {
        return (
            <BackgroundWrapper paddingTop={0}>
            <AAA navigation={this.props.navigation}/>
            </BackgroundWrapper>
        );
    }
}

export default Login;