import React, { Component } from 'react';
import { View, Text,Dimensions,WebView,TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import {connect} from 'react-redux';
import {fetchChildTopicsById} from '../redux/actions/childTopicById';
import {fetchCardById} from '../redux/actions/cardById';

class CardLesson extends Component {
    componentDidMount() {
        
    }
    checkChildType() {
        if(this.props.childrenIds.length === 0) {
            this.props.navigation.navigate('LessonDetailSCR')
        }
        else {
            if(this.props.childrentType === 1) {
            this.props.getChildTopic(`http://api-dot-hola-edu.appspot.com/api?action=getTopics&ids=[${this.props.childrenIds}]`),
            this.props.navigation.navigate('ChildLesson',{ title:this.props.name, description: this.props.description  })
          
        }
        else{
           this.props.navigation.navigate('ExerciseSCR')
           this.props.getCards(`http://api-dot-hola-edu.appspot.com/api?action=getCards&ids=[${this.props.childrenIds}]`)
           
        }
        }
    }
    render() {
        //console.log('CardLesson' , this.props)
        return (
            <TouchableOpacity onPress={() => {this.checkChildType()}}>
            <View style={styles.container}>
                    <Text style={styles.textHeader}>{this.props.name}</Text>
                    <Text>{this.props.childrenIds.length} lessons</Text>
                    <Icon name='arrow-dropright' />
                    
            </View>    
            </TouchableOpacity>    
        );
    }
}
const mapStateToProps = (state) => {
    return {
        childTopic: state.childTopicById,
        cards: state.cardById.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getChildTopic: (url) => {
            dispatch(fetchChildTopicsById(url))
        },
        getCards: (url) => {
            dispatch(fetchCardById(url))
        }
    }
}

const {width,height} = Dimensions.get('window')
const styles = {
    container: {
        height: height * 0.1,
        margin: 10,
        padding: 10,    
        borderWidth:1,
        borderRadius: 10,
          shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        alignItems: 'center',
        shadowRadius: 2,
        shadowOpacity: 1.0,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    action: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-between'
    },
    textHeader: {
        fontSize: 15,
        fontWeight: 'bold',
        maxWidth: width * 0.6
       
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CardLesson);
