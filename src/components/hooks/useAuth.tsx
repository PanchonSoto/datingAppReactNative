import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react'
import { NavigationContainerProps } from '@react-navigation/native';

const AuthContext = createContext({ user: {} || null });

export const AuthProvider = ({ children }:NavigationContainerProps) => {
  return (
    <AuthContext.Provider value={{ user: null }}>
      { children }
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext);  
}