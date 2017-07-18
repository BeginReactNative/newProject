import { StackNavigator } from 'react-navigation';
import Login from '../screens/unauthorized/Login';
import Signin from '../screens/unauthorized/Signin';

const UnAuthNav = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Signin: {
        screen: Signin,
         navigationOptions: {
            header: null
        }
    }
})
export default UnAuthNav;