
//import 'react-native-gesture-handler';
import * as React from 'react';
//import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginViewController from './Screens/LoginVC/LoginViewController';
import SignUpViewController from './Screens/SignUpVC/SignUpViewController';
// import HomeScreen from './App/Home'
import { createAppContainer } from 'react-navigation';
// import { HomeScreen, DiscoverScreen, Inbox, openCamera, Me} from './App/Home.js'
import TabNavigator from './App/Home.js' 

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={LoginViewController} />
//          <Stack.Screen name="SignUp" component={SignUpViewController} />
//          <Stack.Screen name="HomeScreen" component={TabNavigator} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


//  const tabNavigator = createBottomTabNavigator(
//   {  
//     HomeTab: { screen: HomeScreen },
//     Discover: { screen: DiscoverScreen },
//     " " : { screen: openCamera },
//     Inbox: { screen: Inbox },
//     Me: { screen: Me },
// },
// {
//   defaultNavigationOptions: ({ navigation }) => ({
//     tabBarIcon: ({ focused, horizontal, tintColor }) => {
//       const { routeName } = navigation.state;
//       if (routeName === 'HomeTab') {
//         return (
//           <Image
//             source={
//               focused
//                 ? require('./App/Assets/home.png')
//                 : require('./App/Assets/home.png')
//             }
//             style={{
//               width: 20,
//               height: 20,
//               borderRadius: 40 / 2,
//             }}
//           />
//         );
//       } else if (routeName === 'Discover') {
//         return (
//           <Image
//             source={
//               focused
//                 ? require('./App/Assets/search.png')
//                 : require('./App/Assets/search.png')
//             }
//             style={{
//               width: 20,
//               height: 20,
//               borderRadius: 40 / 2,
//             }}
//           />
//         );
//       }  else if (routeName === ' ') {
//         return (
//           <Image
//             source={
//               focused
//                 ? require('./App/Assets/add.png')
//                 : require('./App/Assets/add.png')
//             }
//             style={{
//               width: 20,
//               height: 20,
//               borderRadius: 40 / 2,
//             }}
//           />
//         );
//       }  else if (routeName === 'Me') {
//         return (
//           <Image
//             source={
//               focused
//                 ? require('./App/Assets/me.png')
//                 : require('./App/Assets/me.png')
//             }
//             style={{
//               width: 20,
//               height: 20,
//               borderRadius: 40 / 2,
//             }}
//           />
//         );
//       }
//       else if (routeName === 'Inbox') {
//         return (
//           <Image
//             source={
//               focused
//                 ? require('./App/Assets/notification.png')
//                 : require('./App/Assets/notification.png')
//             }
//             style={{
//               width: 20,
//               height: 20,
//               borderRadius: 40 / 2,
//             }}
//           />
//         );
//       }
//     },
//   }),
//   tabBarOptions: {
//     activeTintColor: 'blue',
//     inactiveTintColor: 'gray',
//   },
// }

// );  

const newStackNav = createStackNavigator(
  {
    Login: LoginViewController,
    SignUp: SignUpViewController,
    HomeView: TabNavigator
  },
  {
    initialRouteName: 'Login',
    headerMode: 'screen',
    headerTitleStyle: {
      // fontFamily: 'helvetica',
      fontWeight: '200'
    },
    defaultNavigationOptions: () => ({
      headerTintColor: 'black',
    }),
  }
)



  
// export default createAppContainer(TabNavigator);
// export default TabNavigator;

// export default createAppContainer(App);
export default createAppContainer(newStackNav)



