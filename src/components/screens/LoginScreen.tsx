import { View, Text, Button, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

import useAuth from '../hooks/useAuth';
import { loginStyle } from '../../config/theme';




const LoginScreen = () => {
  const { onGoogleButtonPress, loading } = useAuth();
  const navigation = useNavigation();

  useLayoutEffect(()=> {
    navigation.setOptions({
      headerShown: false,
    });
  },[]);

  return (
    <View style={loginStyle.flex1}>
      <ImageBackground 
       style={loginStyle.flex1}
       resizeMode='cover'
       source={{uri: 'https://tinder.com/static/tinder.png'}}>

        <TouchableOpacity style={loginStyle.touchBtn} onPress={ onGoogleButtonPress }>
          <Text style={loginStyle.textBtn}>Sign in with Google</Text>
        </TouchableOpacity>

      </ImageBackground>
    </View>
  )
}

export default LoginScreen