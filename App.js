
//import 'react-native-gesture-handler';
import * as React from 'react';
//import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginViewController from './Screens/LoginVC/LoginViewController';
import SignUpViewController from './Screens/SignUpVC/SignUpViewController';
import HomeScreen from './App/Home'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginViewController} />
         <Stack.Screen name="SignUp" component={SignUpViewController} />
         <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



