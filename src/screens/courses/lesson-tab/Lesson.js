import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchTopicsById } from '../../../redux/actions/topicID';
import Header from '../../../components/header/Header';
import CardLesson from '../../../components/CardLesson';
class Lesson extends Component {

    componentWillMount() {
        this.props.getTopics(`http://api-dot-hola-edu.appspot.com/api?action=getTopics&ids=[${this.props.navigation.state.params.lessonIds}]`)
    }
       _renderItem = ({ item }) => (
       <CardLesson 
                    name={item.name}
                    childrenIds = {item.childrentIds}
                    description={item.description}
                    lastUpdate={item.lastUpdate}
                    navigation={this.props.navigation}
                    index={item.id}
                    childrentType={item.childrentType}
                />
    )
    render() {
        console.log('Lesson Props', this.props)
        return (
            <View style={{ flex: 1 }}>
                <Header
                    notification={true}
                    navigation={this.props.navigation}
                    title={this.props.navigation.state.params.title}
                />
                {
                    this.props.isFetching && <Text>Loading, Please wait...!!</Text>
                }
                {
                    <FlatList
                        data={this.props.topics}
                        extraData={this.state}
                        keyExtractor={item => item.id}
                        renderItem={this._renderItem}
                    />
                }
                <Text>Lesson Screen</Text>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        topics: state.topicById.data,
        isFetching: state.topicById.isFetching,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getTopics: (url) => {
            dispatch(fetchTopicsById(url))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Lesson);

