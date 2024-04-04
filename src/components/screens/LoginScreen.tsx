import { View, Text, Button } from 'react-native';
import React, { useEffect } from 'react';

import useAuth from '../hooks/useAuth';




const LoginScreen = () => {
  
  const { onGoogleButtonPress } = useAuth();

  return (
    <View>
      <Button
      title="Google Sign-In"
      onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    />
    </View>
  )
}

export default LoginScreen