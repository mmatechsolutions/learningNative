// import React, { useState } from 'react';
// import * as Font from 'expo-font';
// import 'react-native-gesture-handler';
// import AppLoading from 'expo-app-loading';
// import Navigator from './routes/drawer'

// const getFonts = () => Font.loadAsync({
//     'nunito-regular': require('./assets/Fonts/Nunito-Regular.ttf'),
//     'nunito-bold': require('./assets/Fonts/Nunito-Bold.ttf')
// });

// export default function App() {
//   const [fontsLoaded,  setFontsLoaded] = useState(false);

//   if(fontsLoaded){
//     return(
//       <Navigator/>
//     );
//   } else{
//     return(
//       <AppLoading
//         startAsync={getFonts}
//         onFinish ={()=> setFontsLoaded(true)}
//         onError={(err) => console.warn('Font loading error:', err)}
//         />
//     );
//   }
// }



// import React, { useState } from 'react';
// import * as Font from 'expo-font';
// import 'react-native-gesture-handler';
// import AppLoading from 'expo-app-loading';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// import Home from './screens/home';
// import ReviewDetails from './screens/reviewDetails';

// const Drawer = createDrawerNavigator();

// const getFonts = () => Font.loadAsync({
//   'nunito-regular': require('./assets/Fonts/Nunito-Regular.ttf'),
//   'nunito-bold': require('./assets/Fonts/Nunito-Bold.ttf')
// });

// export default function App() {
//   const [fontsLoaded, setFontsLoaded] = useState(false);

//   if (!fontsLoaded) {
//     return (
//       <AppLoading
//         startAsync={getFonts}
//         onFinish={() => setFontsLoaded(true)}
//         onError={(err) => console.warn('Font loading error:', err)}
//       />
//     );
//   }

//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={Home} />
//         <Drawer.Screen name="ReviewDetails" component={ReviewDetails} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }


import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import RootDrawerNavigator from './routes/drawer';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/Fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/Fonts/Nunito-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <RootDrawerNavigator />
    </NavigationContainer>
  );
}
