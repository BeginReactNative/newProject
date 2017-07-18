import React, { Component } from 'react';
import { View,Text } from 'react-native';
import {Provider} from 'react-redux';
import store from './redux/configureStore'
import RootNav from './navigations/rootNav';
class Main extends Component {
    state = {  }
    render() {
        return (
            <Provider store={store}>
                <RootNav />
            </Provider>
            
        );
    }
}

export default Main;