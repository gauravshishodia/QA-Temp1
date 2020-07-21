import React from 'react';  
import { StyleSheet, Text, View, Image, ScrollView,SafeAreaView, Dimensions } from 'react-native';
import VideoPlayer from './videoPlay'

class HomeScreen2 extends React.Component {  
    render() {  
        return (  
            <View style={{flex: 1}}>  
                <VideoPlayer/>
            </View>  
        );  
    }  
}  
export default HomeScreen2;