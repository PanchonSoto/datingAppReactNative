import React from 'react';

import StackNavigator from './router/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './components/hooks/useAuth';

import IonIcon from 'react-native-vector-icons/Ionicons';
import { PaperProvider } from 'react-native-paper';


function App(): React.JSX.Element {

  const iconProvider = (props: any) => <IonIcon {...props}/>;

  return (
    <PaperProvider settings={{ icon: iconProvider }}>
      <NavigationContainer>
        <AuthProvider>
          <StackNavigator />
        </AuthProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}



export default App;
