import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginViewController from './Screens/LoginVC/LoginViewController';
import SignUpViewController from './Screens/SignUpVC/SignUpViewController';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import HomeScreen2 from './App/HomeScreen2'
import Inbox2 from './App/Inbox2'
import Me2 from './App/Me2'
import DiscoverScreen2 from './App/DiscoverScreen2'
import openCamera2 from './App/openCamera2'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home';
        } else if (route.name === ' ') {
          iconName = focused ? 'ios-camera' : 'ios-camera';
        }
        else if (route.name === 'Me') {
          iconName = focused ? 'ios-person' : 'ios-person';
        }
        else if (route.name === 'Inbox') {
          iconName = focused ? 'chatbubble-ellipses-outline' : 'chatbubble-ellipses-outline';
        }
        else if (route.name === 'Discover') {
          iconName = focused ? 'search-outline' : 'search-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'brown',
      inactiveTintColor: 'gray',
    }}
    >
      <Tab.Screen name="Home" component={HomeScreen2} />
      <Tab.Screen name="Discover" component={DiscoverScreen2} />
      <Tab.Screen name=" " component={openCamera2} />
      <Tab.Screen name="Inbox" component={Inbox2} />
      <Tab.Screen name="Me" component={Me2} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginViewController}/>
         <Stack.Screen name="SignUp" component={SignUpViewController}/>
         <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
