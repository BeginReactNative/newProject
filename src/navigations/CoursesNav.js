import { TabNavigator } from 'react-navigation';
import Description from '../screens/courses/description-tab/Description';
import Discussion from '../screens/courses/discussion-tab/Discussion';
import Documents from '../screens/courses/documents-tab/Documents';
import Lesson from '../screens/courses/lesson-tab/Lesson';
const CoursesNav = TabNavigator({
    Description: {
        screen: Description
    },
    Lesson: {
        screen: Lesson
    },
    Documents: {
        screen: Documents
    },
     Discussion: {
        screen: Discussion
    }
},
{
    tabBarOptions: {
        activeTintColor: '#e91e63',
        labelStyle: {
            fontSize: 15,
            color: '#fff'
        },
        style: {
            backgroundColor: '#4054B2',
            
        },

    },
    tabBarPosition: 'bottom',
 
   
});
export default CoursesNav;
