import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen.js';
import PlayerInputScreen from './src/screens/PlayerInput.js';
import PlayerConfirmationScreen from './src/screens/PlayerConfirmationScreen.js';
import RandomizerScreen from './src/screens/RandomizerScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PlayerInput" component={PlayerInputScreen} />
        <Stack.Screen name="PlayerConfirmation" component={PlayerConfirmationScreen} />
        <Stack.Screen name="Randomizer" component={RandomizerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

