const React = require("react-native");

const { StyleSheet, Dimensions } = React;
const { width, height } = Dimensions.get('window')
export default {
  container: {
    backgroundColor: "#FFF",
    width: width -20,
    height: height * 0.3,
    marginBottom: 10,
    flexDirection: 'row',
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: 'red',
    shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        maxWidth: width,
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 4
  },

  leftView: {
    flex:2,
    borderRightWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    borderRightColor: '#BDBDBD',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rightView: {
    flex:5
  },
  rightUp: {
      flex:4,

      padding: 10,
      marginLeft:10,
      marginRight: 10,
  
      
  },
  rightDown: {
      flex: 2,
      flexDirection: 'row'
  },
  DownMember: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  DownRating : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  DownAvatar: {
      flex: 1
  }
};
