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
import Exercise from '../screens/courses/lesson-tab/exercise/Exercise';
// Menu screen
import AboutUs from '../screens/menu/about-us';
import Profile from '../screens/menu/user-profile';
import Feedback from '../screens/menu/feed-back';
import Support from '../screens/menu/support';
import Setting from '../screens/menu/settings';
import Contact from '../screens/menu/contact';
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
     Exercise: {
        screen: Exercise,
         navigationOptions: {
            header: null
        }
    },
      AboutUs: {
        screen: AboutUs,
         navigationOptions: {
            header: null
        }
    },
    Profile: {
        screen: Profile,
         navigationOptions: {
            header: null
        }
    },
    Feedback: {
        screen: Feedback,
        navigationOptions: {
            header: null
        }
    },
    Support : {
        screen: Support,
        navigationOptions: {
            header: null
        }
    },
    Setting: {
        screen: Setting,
        navigationOptions: {
            header: null
        }
    },
    Contact: {
        screen: Contact,
        navigationOptions: {
            header: null
        }
    }
});
export default rootNav;
