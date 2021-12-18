import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import AuthProvider from './authProvider/AuthProvider';
import MainStack from './navigation/MainStack';
import HomeScreen from './screens/HomeScreen';
import { sotre } from './store';


export default function App() {
  return (
    <Provider store={sotre}>
      <AuthProvider>
        <SafeAreaProvider>
          <StatusBar style="auto" />
          <NavigationContainer>
              <MainStack />
          </NavigationContainer>
        </SafeAreaProvider>
      </AuthProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
