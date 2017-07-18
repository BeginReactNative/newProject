import React, { Component } from 'react';
import { View, Text,WebView,Image,Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { fetchCourseById } from '../../../redux/actions/courseByID';
import Header from '../../../components/header/Header';
class Description extends Component {

    componentWillMount() {
              this.props.getCourseById(`http://api-dot-hola-edu.appspot.com/api?action=getCourses&ids=[${this.props.navigation.state.params.courseId}]`)
    }
    render() {
        //console.log('CourseByIdProps',this.props)
        return (
            <View style={styles.container}>
                <Header 
                    notification={true}
                    navigation={this.props.navigation}
                    title={this.props.navigation.state.params.title}
                />
                {
                    this.props.isFetching && <Text>Loading, please wait....!</Text>
                }
                {
                    this.props.course.map((e,i) =>(
                        <View style={{flex:1}} key={i}>
                            <Image style={styles.drawerCover} source={{uri: e.avatar}} />
                            <Text style={{fontSize: 15, fontWeight: 'bold'}}>Created By: {e.ownerName}</Text>
                            <WebView style={{flex:1}} source={{html: e.description}} />
                        </View>
                       
                    ))
                }
            </View>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        course: state.courseById.data,
        isFetching: state.courseById.isFetching
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCourseById: (url) => {
            dispatch(fetchCourseById(url))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Description);
const { height } = Dimensions.get('window')
const styles = {
    container: {
    flex:1,
    padding: 10
    },
    drawerCover: {
        alignSelf: "stretch",
        // resizeMode: 'cover',
        height: height / 3.5,
        width: null,
        position: "relative",
        marginBottom: 10
  },
}