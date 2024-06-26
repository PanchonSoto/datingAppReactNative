import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatScreen from '../components/screens/ChatScreen';
import HomeScreen from '../components/screens/HomeScreen';
import LoginScreen from '../components/screens/LoginScreen';
import useAuth from '../components/hooks/useAuth';

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
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }}/>
      )}
    </Stack.Navigator>
  )
}

export default StackNavigator;