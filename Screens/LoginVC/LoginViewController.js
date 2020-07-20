


import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { ImageBackground, StyleSheet, View, Text, TextInput, TouchableOpacity, Image, } from 'react-native'


export default class LoginViewController extends React.Component {
    render() {
        const navigation = this.props.navigation
        return (
            <ImageBackground source={require('../../assets/tikTok.jpg')} style={style.backgroundContainer}>
                <View style={style.container}>
                    <Text style={style.welcome}>Welcome</Text>
                    <TextInput style={style.textfiledInput} placeholder="Username"></TextInput>
                    <TextInput style={style.textfiledInput} placeholder="Password"></TextInput>
                    <View style={style.buttonContainer}>
                        <TouchableOpacity style={style.loginButton} onPress={() => {
                            this.props.navigation.navigate("Home")
                        }}>


                            <Text style={style.loginButtonText}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ width: "80%", height: 50, padding: 15, marginTop: 10, flexDirection: "row", justifyContent: "space-between", backgroundColor: "white" }}>
                        <Text style={{ color: "gray", fontSize: 20 }}>
                            <Image style={style.facebookIcon} source={require('../../assets/google.png')} />
                                 Sign up using Google
                             </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: "80%", height: 50, padding: 15, marginTop: 10, flexDirection: "row", justifyContent: "space-between", backgroundColor: '#365390' }}>
                        <Text style={style.facebookText}>
                            <Image style={style.facebookIcon} source={require('../../assets/facebook.png')} />
                                Sign up using Facebook
                             </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: "80%", height: 50, padding: 15, marginTop: 10, flexDirection: "row", justifyContent: "space-between", backgroundColor: '#6BAAF3' }}>
                        <Text style={style.facebookText}>
                            <Image style={style.facebookIcon} source={require('../../assets/twitter.png')} />
                                Sign up using Twitter
                             </Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity style={{ width: "80%", height: 50, marginTop: 70 }} onPress={() => navigation.navigate("SignUp")}>
                            <Text style={style.facebookText}>Don't have an account?  Sign up </Text>
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


