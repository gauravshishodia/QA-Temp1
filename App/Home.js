import React from 'react';  
import { StyleSheet, Text, View, Image, ScrollView,SafeAreaView, Dimensions } from 'react-native';  
import  RNCamera  from 'react-native-camera'
import VideoPlayer from './videoPlay'
import { createBottomTabNavigator } from 'react-navigation-tabs';

export class HomeScreen extends React.Component {  
    render() {  
        return (  
            <View style={{flex: 1}}>  
                <VideoPlayer/>
            </View>  
        );  
    }  
}  
export class DiscoverScreen extends React.Component {  
    render() {  
        return (
          <View style={styles.container}>  
              <Text>Notifications Screen</Text>  
          </View>
        );  
    }  
}  

export  class Inbox extends React.Component {  
  render() {  
      return (
        <View style={styles.container}>  
            <Text>InboxScreen</Text>  
        </View>
      );  
  }  
}  

export class openCamera extends React.Component {  
  render() {  
      return (  
          <View style={styles.container2}>
          <RNCamera
            style={{ flex: 1, alignItems: 'center' }}
            ref={ref => {
              this.camera = ref
            }}
          />
        </View>    
      );  
  }  
}


export class Me extends React.Component {  
  render() {  
      return (  
        <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
          
            <View style = {{flexDirection: 'row', alignItems: 'center', width: Dimensions.get('window').width}}>
            
            <View style = {{width: Dimensions.get('window').width / 4}}>
            <Image source={require('./Assets/addFriendImage.png')}
   style = {{ width: 30, height: 30, marginBottom: 10, marginLeft: 20}}
   />  
            </View>

            
        <View style = {{alignItems: 'center', justifyContent: 'center' ,width: Dimensions.get('window').width / 2}}>
        <Text style = {{fontSize : 20, marginBottom: 10, fontWeight: 'bold'}}>user1269</Text>
        </View>

          
          

   <View style = {{flexDirection: 'row', justifyContent: 'center' ,width: Dimensions.get('window').width / 4}}>
   <Image source={require('./Assets/qrImage.png')}
   style = {{ width: 30, height: 30, marginBottom: 10, marginRight: 10  }}
   /> 
   <Image source={require('./Assets/threedotImage.png')}
   style = {{ width: 30, height: 30, marginBottom: 10}}
   /> 
     </View> 

    

            </View>
          <View style = {{width: 500, height: 1, backgroundColor: 'lightgray', marginBottom: 15}}/>
            <Image source={require('./Assets/profileImage.png')}
   style = {{ width: 150, height: 150 }}
   />  
              <Text style = {{fontSize : 20, marginTop: 1, fontWeight: 'bold'}}>@user1269</Text>
              <View style={styles.videoNumberView}>
                  <Text style = {{color: 'darkgray'}}>0 Video</Text>
              </View>
              <View  style = {{flexDirection: 'row', marginTop: 20}}>
                <View style = {{width: 65}}>
                  <Text  style = {{textAlign: 'center', fontWeight: 'bold'}} >0</Text>
                  <Text style = {{color: 'darkgray', textAlign: 'center'}}>Following</Text>
                </View>
                <View style = {{width: 1, height: 20, backgroundColor: 'lightgray', marginLeft: 15, marginRight: 15}} />
                <View style = {{width: 65}}>
                  <Text  style = {{textAlign: 'center', fontWeight: 'bold'}} >0</Text>
                  <Text style = {{color: 'darkgray', textAlign: 'center'}}>Followers</Text>
                </View>
                <View style = {{width: 1, height: 20, backgroundColor: 'lightgray', marginLeft: 15, marginRight: 15}} />
                <View style = {{width: 65}}>
                  <Text  style = {{textAlign: 'center', fontWeight: 'bold'}} >0</Text>
                  <Text style = {{color: 'darkgray', textAlign: 'center'}}>Heart</Text>
                </View>
              </View>
              <View style = {{flexDirection: 'row', marginTop: 30}}>
              <View style = {{width : 130, height : 50, backgroundColor : 'red', alignItems: 'center', justifyContent: 'center', borderRadius: 3}}>
                <Text style = {{color: 'white', fontWeight: 'bold'}}>Edit Profile</Text>
                </View>
                <View style = {{width: 50, height: 50, borderColor: 'gray', borderWidth: 1, marginLeft: 20, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('./Assets/bookmarkImage.jpg')}
   style = {{ width: 25, height: 25 }}
   />  
                </View>
              </View>
              <View style = {{width: 380, height: 1, backgroundColor: 'lightgray', marginTop: 25}}/>
              <View style = {{flexDirection: 'row'}}>
              <Text style = {{color: 'gray', marginTop: 15, marginRight: 50}}>Tap here to create your Holi wali look!</Text>
              <Image source={require('./Assets/arrowImage.png')}
                    style = {{ width: 20, height: 20, marginTop: 15, marginLeft: 65 }}
              />  
              </View>
              <View style = {{width: 380, height: 1, backgroundColor: 'lightgray', marginTop: 15}}/>
              <View style = {{flexDirection: 'row'}}>

                <View style = {{width: Dimensions.get('window').width / 2, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./Assets/bookmarkImage.jpg')}
                    style = {{ width: 20, height: 20, marginTop: 15}}
              /> 
                </View>

                <View style = {{width: Dimensions.get('window').width / 2, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./Assets/heartImage.png')}
                    style = {{ width: 20, height: 20, marginTop: 15}}
              /> 
                </View>


              </View>
              <View style = {{width: 380, height: 1, backgroundColor: 'lightgray', marginTop: 15}}/>
               
          </View>
          </ScrollView>
          </SafeAreaView>  
      );  
  }  
}  
  
const TabNavigator = createBottomTabNavigator(
  {  
    Home: { screen: HomeScreen },
    Discover: { screen: DiscoverScreen },
    " " : { screen: openCamera },
    Inbox: { screen: Inbox },
    Me: { screen: Me },
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      if (routeName === 'Home') {
        return (
          <Image
            source={
              focused
                ? require('./Assets/home.png')
                : require('./Assets/home.png')
            }
            style={{
              width: 20,
              height: 20,
              borderRadius: 40 / 2,
            }}
          />
        );
      } else if (routeName === 'Discover') {
        return (
          <Image
            source={
              focused
                ? require('./Assets/search.png')
                : require('./Assets/search.png')
            }
            style={{
              width: 20,
              height: 20,
              borderRadius: 40 / 2,
            }}
          />
        );
      }  else if (routeName === ' ') {
        return (
          <Image
            source={
              focused
                ? require('./Assets/add.png')
                : require('./Assets/add.png')
            }
            style={{
              width: 20,
              height: 20,
              borderRadius: 40 / 2,
            }}
          />
        );
      }  else if (routeName === 'Me') {
        return (
          <Image
            source={
              focused
                ? require('./Assets/me.png')
                : require('./Assets/me.png')
            }
            style={{
              width: 20,
              height: 20,
              borderRadius: 40 / 2,
            }}
          />
        );
      }
      else if (routeName === 'Inbox') {
        return (
          <Image
            source={
              focused
                ? require('./Assets/notification.png')
                : require('./Assets/notification.png')
            }
            style={{
              width: 20,
              height: 20,
              borderRadius: 40 / 2,
            }}
          />
        );
      }
    },
  }),
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'gray',
  },
}

);  
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
  
// export default createAppContainer(TabNavigator);
export default TabNavigator;
