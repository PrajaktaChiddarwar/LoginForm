import Expo from 'expo';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ContactPage from '../LoginForm/src/ContactPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserData from "../LoginForm/src/UserData";
import Signup from './src/Signup';
import Home from './src/Home';
import Login from '../LoginForm/src/Login';
import FlatList from './src/FlatList';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home}/>
      {/* <Stack.Screen name='LoginT' component={ContactPage}/> */}
      <Stack.Screen name='Login' component={Login}/>

      <Stack.Screen name='UserData' component={UserData}/>
      <Stack.Screen name='Signup' component={Signup}/>
      <Stack.Screen name='FlatList' component={FlatList}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


