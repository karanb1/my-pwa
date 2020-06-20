import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {HomeScreen, SettingsScreen} from './App'
const BottomTab = createMaterialBottomTabNavigator();
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

   const MyTabs = ()=> (
    <BottomTab.Navigator
    initialRouteName="Home"
    activeColor="#008080"
    barStyle={{ backgroundColor: 'white', paddingTop: 17 }}
    shifting={false}
    labeled={false}
    >
      <BottomTab.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{
            tabBarIcon: ({focused})=> <AntDesign name="home" size={focused? 26 : 25} color={focused? '#008080' : "grey"} />
            }} />
      <BottomTab.Screen 
      name="Settings" 
      component={SettingsScreen}
      options={{
        tabBarIcon: ({focused})=> <Feather name="settings" size={focused? 26 : 25} color={focused? '#008080' : "grey"} />
        }} /> 
    </BottomTab.Navigator>
  );

  export default MyTabs