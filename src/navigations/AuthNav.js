import React from 'react';
import { DrawerNavigator } from 'react-navigation'; 
import HomeTab from './HomeNav';
import Menu from '../screens/menu/Menu';

const AppDrawer = DrawerNavigator({
    Home: {
        screen: HomeTab,
       
    }
    
},
    {
        drawerWidth: 250,
        drawerPosition: 'left',
        contentComponent: props => <Menu {...props}/>
    }
)
export default AppDrawer;
