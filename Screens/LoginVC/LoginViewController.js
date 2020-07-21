import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { ImageBackground, StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert, ScrollView } from 'react-native'

export default class LoginViewController extends React.Component {
    _onPress() {
        Alert.alert(
            '',
            'Are you sure you want to login?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
    }

    googleOnPress() {
        Alert.alert("Sorry you don't have google account!");
       }

       facebookOnPress() {
        Alert.alert("Sorry you don't have facebok account!");
       }

       twitterOnPress() {
        Alert.alert("Sorry you don't have twitter account!");
       }

       constructor(props) {
        super(props);
        this.state = {
          usersName: '',
          usersPassword: '',
        };
      }
      CheckTextInput = () => {
        if (this.state.usersName != '') {
          if (this.state.usersPassword != '') {
           this.props.navigation.navigate("Home")
          } else {
            alert('Please enter password!');
          }
        } else {
          alert('Please enter user name!');
        }
      };

    render() {
        const navigation = this.props.navigation
        return (
            <ImageBackground style={style.backgroundContainer}>
                <ScrollView>
                <View style={style.container}>
                    <Text style={style.welcome}>Welcome</Text>
                    <TextInput style={style.textfiledInput} placeholder="Username" onChangeText={usersName => this.setState({ usersName })}/> 
                    <TextInput style={style.textfiledInput} placeholder="Password" onChangeText={usersPassword => this.setState({ usersPassword })}/>
                    <View style={style.buttonContainer}>
                        <TouchableOpacity style={style.loginButton} onPress={this.CheckTextInput}>

                            <Text style={style.loginButtonText}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ width: "80%", height: 50, padding: 15, marginTop: 10, flexDirection: "row", justifyContent: "space-between", backgroundColor: "white", borderRadius: 30 }} onPress={this.googleOnPress}>
                        <View style={style.bottomButtonsContainer}>
                            <Image style={style.bottomButtonsIcon} source={require('../../assets/google.png')} />
                            <Text style={style.googleButtonsText}> {" "}Sign up using Google</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: "80%", height: 50, padding: 15, marginTop: 10, flexDirection: "row", justifyContent: "space-between", backgroundColor: '#365390', borderRadius: 30 }} onPress={this.facebookOnPress}>
                        <View style={style.bottomButtonsContainer}>
                            <Image style={style.bottomButtonsIcon} source={require('../../assets/facebook.png')} />
                            <Text style={style.bottomButtonsText}>{"      "}Sign up using Facebook</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: "80%", height: 50, padding: 15, marginTop: 10, flexDirection: "row", justifyContent: "space-between", backgroundColor: '#6BAAF3', borderRadius: 30 }} onPress={this.twitterOnPress}>
                        <View style={style.bottomButtonsContainer}>
                            <Image style={style.bottomButtonsIcon} source={require('../../assets/twitter.png')} />
                            <Text style={style.bottomButtonsText}>Sign up using Twitter</Text>
                        </View>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity style={{ width: "80%", height: 50, marginTop: 70 }} onPress={() => navigation.navigate("SignUp")}>
                            <Text style={{ flex: 1, color: 'black', fontSize: 20, justifyContent: 'center', textAlign: 'center', }}>Don't have an account?  Sign up </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}

const style = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: "#9a9a9a",
        opacity: 1,
        justifyContent: "space-around",
        alignContent: "center"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    welcome: {
        fontSize: 30,
        textAlign: "center",
        marginBottom: 50,
        color: "#fff",

    },
    textfiledInput: {
        width: "90%",
        backgroundColor: "#fff",
        padding: 18,
        marginBottom: 20,
        borderRadius: 25
    },
    buttonContainer: {
        flexDirection: "row"
    },
    loginButton: {
        backgroundColor: "black",
        opacity: 1,
        padding: 15,
        width: "60%",
        borderRadius: 10,
        margin: 80
    },
    loginButtonText: {
        fontSize: 22,
        textAlign: "center",
        color: "white"
    },
    bottomButtonsContainer: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
    },
    bottomButtonsIcon: {
        width: 30,
        height: 30,
        position: 'absolute',
        left: 18,
    },
    bottomButtonsText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        height: '100%',
        width: '100%',
        paddingBottom: 25
    },
    googleButtonsText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'gray',
        height: '100%',
        width: '100%',
        paddingBottom: 25
    },

})



