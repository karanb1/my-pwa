import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Navigation from './navigation'
import { NavigationContainer } from '@react-navigation/native'

export const HomeScreen = () => (
   <SafeAreaView style={{flex: 1, justifyContent: "center", backgroundColor:"#008080"}}>
      <Text style={{color: "white", marginTop: 10, marginLeft: 10, fontSize: 40}}>Hello,</Text>
      <Text style={{color: "white", marginTop: 5, marginLeft: 10, fontSize: 40}}>Welcome to my Progressive web app demo.</Text>
   </SafeAreaView>
)

export const SettingScreen = () => (
  <SafeAreaView style={{flex: 1, justifyContent: "center", backgroundColor:"#008080"}}>
      <Text style={{color: "white", marginTop: 10, marginLeft: 10, fontSize: 40}}>Hello,</Text>
      <Text style={{color: "white", marginTop: 5, marginLeft: 10, fontSize: 40}}>This is my Setting screen.</Text>
  </SafeAreaView>
)

export default function App() {
  return (
    <NavigationContainer>
       <Navigation />
    </NavigationContainer>
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
