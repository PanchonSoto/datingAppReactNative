import React from 'react';

import StackNavigator from './router/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './components/hooks/useAuth';




function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}



export default App;
