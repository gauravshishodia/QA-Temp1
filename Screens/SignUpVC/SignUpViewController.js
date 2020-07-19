


import 'react-native-gesture-handler';
import React from 'react'
import { ImageBackground, StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Button } from 'react-native'


export default class SignUpViewController extends React.Component {
    render() {
        //export const SignUpViewController = () => {
        const navigation = this.props.navigation
        return (
            <ImageBackground source={require('../../assets/tikTok.jpg')} style={style.backgroundContainer}>
                <View style={style.container}>
                    <Text style={style.welcome}>Welcome</Text>
                    <TextInput style={style.textfiledInput} placeholder="Username"></TextInput>
                    <TextInput style={style.textfiledInput} placeholder="Password"></TextInput>
                    <TextInput style={style.textfiledInput} placeholder="Email"></TextInput>
                    <TextInput style={style.textfiledInput} placeholder="PhoneNumber"></TextInput>
                    <TextInput style={style.textfiledInput} placeholder="Password"></TextInput>
                    <TextInput style={style.textfiledInput} placeholder="ConfirmPassword"></TextInput>
                    <View style={style.buttonContainer}>
                        <TouchableOpacity style={style.loginButton}  >
                            <Text style={style.loginButtonText}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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

        marginBottom: 100,
        color: "#fff",

    },
    textfiledInput: {
        width: "90%",
        backgroundColor: "#fff",
        padding: 15,
        marginBottom: 15
    },
    buttonContainer: {
        flexDirection: "row"
    },
    loginButton: {
        backgroundColor: "gray",
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
    facebookButton: {
        height: 55,
        width: "80%",
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: '#365390',
        marginBottom: 10
    },
    facebookText: {
        flex: 1,
        color: '#fff',
        fontSize: 20,
        justifyContent: 'center',
        textAlign: 'center',
    },
    facebookIcon: {
        marginTop: 10,
        alignItems: "center",
        width: 30,
        height: 30,
        justifyContent: 'center',
    }
})

