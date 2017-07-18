import React, { Component } from 'react';
import { View,Text } from 'react-native';
import {Provider} from 'redux'
class Signin extends Component {
    state = {  }
    render() {
        return (
            <View style={{flex:1 , justifyContent: 'center', alignItems: 'center'}}>
                <Text>Signin Screen</Text>
            </View>
        );
    }
}

export default Signin;