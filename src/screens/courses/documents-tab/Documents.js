import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../../../components/header/Header';

class Documents extends Component {
    state = {  }
    render() {
        return (
            <View style={{flex:1}}>
            <Header 
                    notification={true}
                    navigation={this.props.navigation}
                    title={this.props.navigation.state.params.title}
                />
                <Text>Documents Screen</Text>
            </View>
        );
    }
}

export default Documents;