

// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import About from '../screens/about';
// import Header from '../shared/header' 

// const Stack = createNativeStackNavigator();

// export default function AboutStack() {
//     const navigation = useNavigation();
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: 'aqua',
//         },
//         headerTintColor: 'white',
//       }}
//     >
//       <Stack.Screen
//         name="About"
//         component={About}
//         options={{
//           headerTitle: ({navigation}) =>{
//              return(
//               <Header navigation = {navigation}/>
//   )},
//         }}
//       />
//     </Stack.Navigator>
//   );
// }


// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import About from '../screens/about';
// import Header from '../shared/header'; // Your custom header component

// const Stack = createNativeStackNavigator();

// export default function AboutStack() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         header: ({ navigation }) => (
//           <Header title="GameZone" navigation={navigation} />
//         ),
//       }}
//     >
//       <Stack.Screen name="About" component={About} />
//     </Stack.Navigator>
//   );
// }

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/about';
import Header from '../shared/header';

const Stack = createNativeStackNavigator();

export default function AboutStack({ navigation }) {
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
          headerTitle: () => (
            <Header title="About GameZone" navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

