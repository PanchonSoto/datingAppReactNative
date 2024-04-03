import React from 'react';
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { styles } from './config/theme/app-theme';
import StackNavigator from '../StackNavigator';
import { NavigationContainer } from '@react-navigation/native';




function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}



export default App;
