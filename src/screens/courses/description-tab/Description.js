import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../../../components/header/Header';
class Description extends Component {
    state = {  }
    render() {
        return (
            <View style={{flex:1}}>
                <Header 
                    notification={true}
                    navigation={this.props.navigation}
                />
                <Text>Description Screen</Text>
            </View>
        );
    }
}

export default Description;