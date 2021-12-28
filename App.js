import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import AuthProvider from './authProvider/AuthProvider';
import MainStack from './navigation/MainStack';
import { sotre } from './store';


export default function App() {
  return (
    <Provider store={sotre}>
      <AuthProvider>
        <SafeAreaProvider>
          <StatusBar style="auto" />
          <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios'? 'padding':'height'}>
            <NavigationContainer>
                <MainStack />
            </NavigationContainer>
          </KeyboardAvoidingView>
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
