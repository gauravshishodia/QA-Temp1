
// //import 'react-native-gesture-handler';
// import * as React from 'react';
// //import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// import { createStackNavigator } from 'react-navigation-stack';
// import LoginViewController from './Screens/LoginVC/LoginViewController';
// import SignUpViewController from './Screens/SignUpVC/SignUpViewController';
// import HomeScreen from './App/Home'
// import { createAppContainer } from 'react-navigation';

// // const Stack = createStackNavigator();

// // function App() {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator>
// //         <Stack.Screen name="Login" component={LoginViewController} />
// //          <Stack.Screen name="SignUp" component={SignUpViewController} />
// //          <Stack.Screen name="Home" component={HomeScreen} />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // }

// const newStackNav = createStackNavigator(
//   {
//     Login: LoginViewController,
//     SignUp: SignUpViewController,
//     // Home: HomeScreen
//   },
//   {
//     initialRouteName: 'Login',
//     headerMode: 'screen',
//     headerTitleStyle: {
//       // fontFamily: 'helvetica',
//       fontWeight: '200'
//     },
//     defaultNavigationOptions: () => ({
//       headerTintColor: 'black',
//     }),
//   }
// )

// // export default App;
// export default createAppContainer(newStackNav)






//import 'react-native-gesture-handler';
import * as React from 'react';
//import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginViewController from './Screens/LoginVC/LoginViewController';
import SignUpViewController from './Screens/SignUpVC/SignUpViewController';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createBottomTabNavigator } from 'react-navigation-tabs'; 
import HomeScreen2 from './App/HomeScreen2'
import Inbox2 from './App/Inbox2'
import Me2 from './App/Me2'
import DiscoverScreen2 from './App/DiscoverScreen2'
import openCamera2 from './App/openCamera2'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen2} />
      <Tab.Screen name="Discover" component={DiscoverScreen2} />
      <Tab.Screen name="Camera" component={openCamera2} />
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