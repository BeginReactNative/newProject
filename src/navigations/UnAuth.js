import { StackNavigator } from 'react-navigation';
import Login from '../screens/unauthorized/Login';
import Register from '../screens/unauthorized/loginAnimate/pages/Register';
import LoginAnimate from '../screens/unauthorized/loginAnimate/pages/Login';


const UnAuthNav = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },

    Register: {
        screen: Register,
         navigationOptions: {
            header: null
        }
    },
    LoginAnimate: {
        screen: LoginAnimate,
         navigationOptions: {
            header: null
        }
    },
})
export default UnAuthNav;