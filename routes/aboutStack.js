// import { createStackNavigator } from "react-navigation-stack";


// import About from '../screens/home'

// const screens ={
//     About:{
//         screen:About,
//         navigationOptions:{
//             title: 'GameZone'
//         }
//     },

   
// }

// const AboutStack = createStackNavigator(screens,{
//     defaultNavigationOptions:{
//         headerTintColor:'white',
//         headerStyle:{
//             backgroundColor:'aqua'
            
//         }

//     }
// });

// export default AboutStack;


import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import About from '../screens/about'; 

const Stack = createNativeStackNavigator();

export default function AboutStack() {
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
        name="About"
        component={About}
        options={{
          title: 'About GameZone',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              
            >
              <Ionicons name="menu" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
