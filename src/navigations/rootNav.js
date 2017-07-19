import {
    StackNavigator
} from 'react-navigation';
import Auth from './AuthNav';
import UnAuth from './UnAuth';
import Courses from './CoursesNav';
import Description from '../screens/courses/description-tab/Description';
import Discussion from '../screens/courses/discussion-tab/Discussion';
import Documents from '../screens/courses/documents-tab/Documents';
import Lesson from '../screens/courses/lesson-tab/Lesson';
import ChildLesson from '../screens/courses/lesson-tab/child-lesson/ChildLesson';
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
    },
       Description: {
        screen: Description,
        navigationOptions: {
            header: null
        }
    },   Discussion: {
        screen: Discussion,
        navigationOptions: {
            header: null
        }
    },   Documents: {
        screen: Documents,
        navigationOptions: {
            header: null
        }
    },
       Lesson: {
        screen: Lesson,
        navigationOptions: {
            header: null
        }
    },
    ChildLesson: {
        screen: ChildLesson,
         navigationOptions: {
            header: null
        }
    },
});
export default rootNav;
