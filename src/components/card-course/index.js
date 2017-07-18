import React, { Component } from 'react';
import { View,Text, Image, TouchableOpacity } from 'react-native';
import { connect} from 'react-redux';
import { fetchCoursesById} from '../../redux/actions';
import styles from './styles';
class CardCourse extends Component {
    constructor(props) {
        super(props);
    }
     timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}

goToCourse() {
   
    this.props.getCourses(`http://api-dot-hola-edu.appspot.com/api?action=getCourses&ids=[${this.props.courseId}]`)
}
    render() {
        return (
            <TouchableOpacity 
                style={styles.container}
                onPress={()=> {this.props.navigation()}}
            >
            
                <View style={styles.borderView} />
                <View style={styles.leftView} >
                    <Text style={{fontSize: 25,color: 'red'}}>{this.props.cost}$</Text>
                    <View style={{ height: 50 }} />
                    <Text style={{fontSize: 16 , fontWeight: 'bold', color: '#757575'}}>Last Update</Text>
                    <Text style={{fontSize: 12,color: '#757575' }}>{new Date(this.props.lastUpdate).toDateString()}</Text>
                </View>
                <View style={styles.rightView} >
                    <View style={styles.rightUp}>
                        <Text style={{ color: '#757575'}}>{this.props.shortDescription}</Text>
                    </View>
                    <View style={styles.rightDown}>
                        <View style={styles.DownMember}>
                            <Text style={{ color: '#757575'}} > Members: </Text>
                            <Text style={{ color: '#757575'}}>3</Text>
                        </View>
                        <View style={styles.DownRating}>
                            <Text style={{ color: '#757575'}}>RATE</Text>
                            <Text style={{ color: '#757575'}}>{this.props.rate}</Text>
                        </View>
                        <View style={styles.DownAvatar}>
                            <Image style={{flex:1, borderRadius: 10, resizeMode: "cover"}} 
                                source={{uri: `${this.props.avatar}`}}
                            />
                        </View>
                    </View>
                </View>
            
            </TouchableOpacity>
            
                
        );
    }
}
const mapStateToProps = (state) => {
    return {
      
        courseById: state.courseByIdReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCourses: (url) => {
            dispatch(fetchCoursesById(url))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CardCourse);
// this.props.getCoursesById(`http://api-dot-hola-edu.appspot.com/api?action=getCourses&ids=[${this.props.courseId}]`