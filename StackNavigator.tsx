import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatScreen from './src/components/screens/ChatScreen';
import HomeScreen from './src/components/screens/HomeScreen';
import LoginScreen from './src/components/screens/LoginScreen';
import useAuth from './src/components/hooks/useAuth';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { user } = useAuth();
  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Chat' component={ChatScreen}/>
        </>
      ): (
        <Stack.Screen name='Login' component={LoginScreen}/>
      )}
    </Stack.Navigator>
  )
}

export default StackNavigator;