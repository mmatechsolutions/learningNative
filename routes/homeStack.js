// import { createStackNavigator } from "react-navigation-stack";

// import Home from '../screens/home';
// import ReviewDetails from '../screens/reviewDetails'

// const screens ={
//     Home:{
//         screen:Home,
//         navigationOptions:{
//             title: 'GameZone'
//         }
//     },

//     ReviewDetails:{
//         screen: ReviewDetails,
//         navigationOptions:{
//             title: 'GameZone Review'
//         }
//     }
// }

// const HomeStack = createStackNavigator(screens,{
//     defaultNavigationOptions:{
//         headerTintColor:'white',
//         headerStyle:{
//             backgroundColor:'aqua'
            
//         }

//     }
// });

// export default HomeStack;

import React from 'react';
import { TouchableOpacity } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createNativeStackNavigator();

export default function HomeStack() {

    const navigation = useNavigation(); 

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'aqua',
        },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'GameZone',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
            >
              <Ionicons name="menu" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
/>
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{ title: 'GameZone Review' }}
      />
    </Stack.Navigator>
  );
}
