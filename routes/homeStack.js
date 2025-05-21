import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens={
    // the one on top is the default view
    Home:{
        screen: Home,
        navigationOptions:{
            title:'GameZone',
            
        }
    },
    ReviewDetails:{
        screen:ReviewDetails,
        navigationOptions:{
            title:'Review Details',
           
        }
    }
}
const homeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor: 'grey',
        headerStyle: {backgroundColor: 'aqua'}
    }
});

export default createAppContainer(homeStack);