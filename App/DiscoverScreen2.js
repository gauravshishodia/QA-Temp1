import React from 'react';  
import { StyleSheet, Text, View, Image, ScrollView,SafeAreaView, Dimensions } from 'react-native';

class DiscoverScreen2 extends React.Component {  
    render() {  
        return (
          <View style={styles.container}>  
              <Text>Discover Screen</Text>  
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
});
export default DiscoverScreen2;