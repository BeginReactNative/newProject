import React, { Component } from 'react';
import { View,Text, StatusBar } from 'react-native';
import {Provider} from 'react-redux';
import store from './redux/configureStore'
import RootNav from './navigations/rootNav';
class Main extends Component {
    state = {  }
    render() {
        return (
            <Provider store={store}>
            <View style={{flex:1, marginTop: StatusBar.currentHeight}}>
                <RootNav />
            </View>
                
            </Provider>
            
        );
    }
}

export default Main;