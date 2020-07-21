import React from 'react';  
import { StyleSheet, Text, View, Image, ScrollView,SafeAreaView, Dimensions } from 'react-native';
import { RNCamera } from 'react-native-camera'

class openCamera2 extends React.Component {  
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

  const styles = StyleSheet.create({  
    container2: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black'
    }  
});

  export default openCamera2;