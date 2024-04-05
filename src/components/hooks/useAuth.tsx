import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { NavigationContainerProps } from '@react-navigation/native';

import auth, { FirebaseAuthTypes }  from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { AuthContextType } from '../interfaces';

const AuthContext = createContext<AuthContextType>({
  user: null,
  onGoogleButtonPress: async () => {},
  logout: async ()=> {},
  // onGoogleButtonPress: async () => ({} as FirebaseAuthTypes.UserCredential),
  loading: true,
  error: null
});

export const AuthProvider = ({ children }:NavigationContainerProps) => {

  const [error, setError] = useState(null);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    GoogleSignin.configure({
      webClientId: '619590023313-mlg27giq3aalb5i4ffc0vk0gonj0mdj4.apps.googleusercontent.com',
      // scopes: ['public_profile','email','gender','location'],
      // scopes: ['profile', 'email', 'openid', 'gender', 'https://www.googleapis.com/auth/user.addresses.read'],
      scopes: ['profile','email','openid','https://www.googleapis.com/auth/user.addresses.read'],
    });

    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        // El usuario está autenticado, puedes acceder a sus datos utilizando user
        console.log('El usuario está autenticado:', user);
        setUser(user);
      } else {
        // El usuario no está autenticado
        console.log('El usuario no está autenticado');
        setUser(null);
      }
      setLoadingInitial(false);
    });

    // Devuelve una función de limpieza para detener la escucha del estado de autenticación
    return () => unsubscribe();
  },[]);

  async function onGoogleButtonPress() {
    try {
        setLoading(true);
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        const user = await auth().signInWithCredential(googleCredential);
        console.log('userFirebase ', user);
        setLoading(false);
    } catch (error: any) {
      setError(error);
      setLoading(false);
      console.log('Err ', error);
    }
  }

  const logout = async () => {
    try {
      setLoading(true);
      await auth().signOut();

      setLoading(false);

    } catch (error:any) {
      setLoading(false);
      setError(error);
    }
  }

  const memoedValue = useMemo(()=>({
    user:user, 
    loading ,
    error,
    onGoogleButtonPress,
    logout

  }),[user, loading, error]);

  return (
    <AuthContext.Provider value={ memoedValue }>
      { !loadingInitial && children }
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext);  
}
