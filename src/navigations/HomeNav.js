import { TabNavigator } from 'react-navigation';
import Created from '../screens/home/created-tab/Created';
import Joined from '../screens/home/joined-tab/Joined';
import Popular from '../screens/home/popular-tab/Popular';
const HomeNav = TabNavigator({
    Created: {
        screen: Created
    },
    Joined: {
        screen: Joined
    },
    Popular: {
        screen: Popular
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
export default HomeNav;
