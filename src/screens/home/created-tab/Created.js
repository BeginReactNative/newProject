import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import { fetchCoursesById } from '../../../redux/actions/dataAction';
import Header from '../../../components/header/Header';
import Card from '../../../components/card-course';
class Created extends Component {
    componentWillMount() {
        this.props.getCourses(`http://api-dot-hola-edu.appspot.com/api?action=getRandomCourses`)
    }
    _renderItem = ({ item }) => (
        <Card
            cost={item.cost}
            avatar={item.avatar}
            lastUpdate={item.lastUpdate}
            shortDescription={item.shortDescription}
            name={item.name}
            members={item.members}
            ownerName={item.ownerName}
            navigation={() => { this.props.navigation.navigate('Courses', { courseId: item.id, title: item.name,lessonIds: item.lessonIds }) }}
        />
    )
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header
                    menu={true}
                    title={'e-Learning'}
                    notification={true}
                    share={true}
                    search={true}
                    navigation={this.props.navigation}
                />
                {
                    this.props.courses.isFetching && <Text>Loading</Text>
                }
                <View style={{ flex: 1, alignItems: 'center' }}>
                <FlatList
                    data={this.props.courses.data}
                    extraData={this.state}
                    keyExtractor={item => item.id}
                    renderItem={this._renderItem}
                />
            </View>
                
            </View >
        );
    }
}
export const mapStateToProps = (state) => {
    return {
        courses: state.dataReducer
    }
}
export const mapDispatchToProps = (dispatch) => {
    return {
        getCourses: (url) => {
            dispatch(fetchCoursesById(url))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Created);