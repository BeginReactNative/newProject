import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';

class ChildLessDes extends Component {

    render() {
        return (
           
            <View style={{ flex: 1 }} >
                <WebView 
                     source={{ html: this.props.description }}
                />
            </View>

        );
    }
}

export default ChildLessDes;
const styles = {
    container: {
    flex:1,
    }
}