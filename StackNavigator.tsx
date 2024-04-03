import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatScreen from './src/components/screens/ChatScreen';
import HomeScreen from './src/components/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Chat' component={ChatScreen}/>
    </Stack.Navigator>
  )
}

export default StackNavigator;