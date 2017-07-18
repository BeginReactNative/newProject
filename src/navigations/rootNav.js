import {
    StackNavigator
} from 'react-navigation';
import Auth from './AuthNav';
import UnAuth from './UnAuth';
import Courses from './CoursesNav';

const rootNav = StackNavigator({
    UnAuthorized: {
        screen: UnAuth,
        navigationOptions: {
            header: null
        }
    },
    Authorized: {
        screen: Auth,
        navigationOptions: {
            header: null
        }
    },
    Courses: {
        screen: Courses,
        navigationOptions: {
            header: null
        }
    }
});
export default rootNav;
