import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../../../components/header/Header';
class Discussion extends Component {
    state = {  }
    render() {
        return (
            <View style={{flex:1}}>
               <Header 
                    notification={true}
                    navigation={this.props.navigation}
                    title={this.props.navigation.state.params.title}
                />
                <Text>Discussion Screen</Text>
            </View>
        );
    }
}

export default Discussion;