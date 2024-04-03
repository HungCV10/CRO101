import { View, Text } from 'react-native'
import React from 'react'
// import thư viện
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


// import màn hình
import Home from './Home';
import Setting from './Setting';
import Profile from './Profile';
import Cart from './Cart';


const tab = createBottomTabNavigator();


const BottomNavigation = () => {
  return (
    <NavigationContainer>
       <tab.Navigator>
        <tab.Screen name="Home" component={Home} />
        <tab.Screen name="Setting" component={Setting} />
        <tab.Screen name="Cart" component={Cart} />
        <tab.Screen name="Profile" component={Profile} />
      </tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomNavigation