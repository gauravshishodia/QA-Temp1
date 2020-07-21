import React, { Component } from 'react';  
import { AppRegistry, FlatList,  
    StyleSheet, Text, View,Alert, SafeAreaView, StatusBar, Image } from 'react-native';  
  
export default class Inbox2 extends Component {  
  
    renderSeparator = () => {  
        return (  
            <View  
                style={{  
                    height: 1,  
                    width: "100%",  
                    backgroundColor: "#000",  
                }}  
            />  
        );  
    };   
    getListViewItem = (item) => {  
        Alert.alert(
          item.key,
          'Choose the Option',
          [
            {
              text:'Ask me Later', 
              onPress: () => console.log('Ask me Later Pressed')
            },
            {
              text : 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style : 'cancel'
            },
            {
              text: 'OK', 
              onPress: () => console.log('OK Pressed')
            }
          ]
          );

    }  
  
    render() {  
        return (  
          <SafeAreaView style={styles.container}>
            <View style={styles.container}>  
                <FlatList  
                    data={[  
                        {key: 'Android'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'},  
                        {key: 'Php'},{key: 'Hadoop'},{key: 'Sap'},  
                        {key: 'Python'},{key: 'Ajax'}, {key: 'C++'},  
                        {key: 'Ruby'},{key: 'Rails'},{key: '.Net'},  
           
                    ]}  
                    renderItem={({item}) =>
                    <View style = {{flexDirection: 'row', height: 100, alignItems: 'center'}}>
                      <Image source = {{uri : "https://homepages.cae.wisc.edu/~ece533/images/zelda.png"}}
                      style = {{width: 70, height: 70, borderRadius: 35, marginLeft: 10}} />
                      <View>
                      <Text style = {styles.item} onPress={this.getListViewItem.bind(this, item)}>{item.key}</Text>
                      <Text style = {styles.item} onPress={this.getListViewItem.bind(this, item)}>A Programming Language</Text>
                      </View>
                    </View>
                            }  
                    ItemSeparatorComponent={this.renderSeparator}  
                />  
                <StatusBar backgroundColor = 'gray'/>
            </View>  
            </SafeAreaView>
            
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    },  
    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 44,  
    },  
})  
  
  
// AppRegistry.registerComponent('AwesomeProject', () => Inbox2); 

