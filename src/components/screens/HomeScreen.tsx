import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth';


const HomeScreen = () => {
    const navigation = useNavigation();
    const { logout } = useAuth();
    
  return (
    <View>
      <Text>I am the homeScreen</Text>
      <Button 
       title='Go to Chat Screen' 
       onPress={ ()=> navigation.navigate("Chat")}
       />

      <Button 
       title='Logout' 
       onPress={ ()=> logout() }
       />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})