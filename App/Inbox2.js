import React from 'react';  
import { StyleSheet, Text, View, Image, ScrollView,SafeAreaView, Dimensions } from 'react-native';  
import { createAppContainer } from 'react-navigation';  
import { createBottomTabNavigator } from 'react-navigation-tabs';    
import { Button } from 'react-native-paper';
// import { RNCamera } from 'react-native-camera'
// import VideoPlayer from './videoPlay'



class Inbox2 extends React.Component {  
    render() {  
        return (
          <View style={styles.container}>  
              <Text>InboxScreen</Text>  
          </View>
        );  
    }  
  }  

  const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        alignItems: 'center',
        marginTop: 10,  
    },
    videoNumberView: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightgray',
      width: 70,
      height: 30,
      borderRadius: 15,
      marginTop: 20
    },
    container2: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black'
    }  
});
  export default Inbox2;