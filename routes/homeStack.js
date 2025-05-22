import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const Stack = createNativeStackNavigator();

export default function HomeStack({ navigation }) {
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
          headerTitle: () => (
            <Header title="GameZone" navigation={navigation} />
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
