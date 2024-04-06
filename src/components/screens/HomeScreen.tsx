import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import useAuth from '../hooks/useAuth';
import { hStyles } from '../../config/theme';


const HomeScreen = () => {

  const navigation = useNavigation();
  const { user, logout } = useAuth();

  

  return (
    <SafeAreaView>
      {/* Header */}
      <View style={ hStyles.header }>
        <TouchableOpacity>
          <Image
           style={ hStyles.profileImg } 
           source={{ uri: user?.photoURL || require('../../config/assets/user.jpg') }}/>
        </TouchableOpacity>  

        <TouchableOpacity>
          <Image style={ hStyles.logo } source={ require('../../config/assets/tinderLogo3.png') }/>
        </TouchableOpacity>

        <TouchableOpacity onPress={ ()=>navigation.navigate('Chat') }>
          <Icon name='chatbubbles-sharp' size={ 40 } color='#FF5864'/>
        </TouchableOpacity>
      </View>
      {/* End of header */}
      
      {/* <Text>I am the homeScreen</Text>
      <Button 
       title='Go to Chat Screen' 
       onPress={ ()=> navigation.navigate("Chat")}
       />

      <Button 
       title='Logout' 
       onPress={ ()=> logout() }
       /> */}
    </SafeAreaView>
  )
}

export default HomeScreen;
