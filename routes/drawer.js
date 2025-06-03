// import {createDrawerNavigator} from 'react-navigation-drawer';
// import { createAppContainer } from 'react-navigation';
// import HomeStack from './homeStack';
// import AboutStack from './aboutStack';

// const RootDrawerNav = createDrawerNavigator({
//     Home:{
//         screen:HomeStack
//     },
//     About:{
//         screen:AboutStack,
//     }
// });

// export default createAppContainer(RootDrawerNav);


import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    // <Drawer.Navigator>
    //   <Drawer.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
    //   <Drawer.Screen name="About" component={AboutStack}  options={{ headerShown: false }}/>
    // </Drawer.Navigator>

    <Drawer.Navigator>
      <Drawer.Screen
        name="GameZone"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="About"
        component={AboutStack}
        options={{ headerShown: false }}
      />
</Drawer.Navigator>
  );
}
