import 'react-native-gesture-handler';
import React from 'react'
import { ImageBackground, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native'


export default class SignUpViewController extends React.Component {

constructor(props) {
super(props);
this.state = {
usersFirstName: '',
usersLastName: '',
usersEmail: '',
usersPhoneNumber: '',
usersPassword: '',
usersConfirmPassword: '',
};
}
CheckTextInput = () => {
if (this.state.usersFirstName == '') {
alert('Please enter first name!');
}else if (this.state.usersLastName == '') {
alert('Please enter last name!');
} else if (this.state.usersEmail == ''){
alert('Please enter email!');
} else if (this.state.usersPhoneNumber == ''){
alert('Please enter phone number!');
} else if (this.state.usersPassword == ''){
alert('Please enter password!');
} else if (this.state.usersConfirmPassword == ''){
alert('Please enter confirm paswword!');
} else {
alert('Success!!!!!')
}
};

render() {
const navigation = this.props.navigation
return (
<ImageBackground style={style.backgroundContainer}>
<ScrollView>
<View style={style.container}>
<Text style={style.welcome}></Text>
<TextInput style={style.textfiledInput} placeholder="First Name" onChangeText={usersFirstName => this.setState({ usersFirstName })}/>
<TextInput style={style.textfiledInput} placeholder="Last Name" onChangeText={usersLastName => this.setState({ usersLastName })}/>
<TextInput style={style.textfiledInput} placeholder="Email" onChangeText={usersEmail => this.setState({ usersEmail })}/>
<TextInput style={style.textfiledInput} placeholder="PhoneNumber" onChangeText={usersPhoneNumber => this.setState({ usersPhoneNumber })}/>
<TextInput style={style.textfiledInput} placeholder="Password" onChangeText={usersPassword => this.setState({ usersPassword })}/>
<TextInput style={style.textfiledInput} placeholder="ConfirmPassword" onChangeText={usersConfirmPassword => this.setState({ usersConfirmPassword })}/>
<View style={style.buttonContainer}>
<TouchableOpacity style={style.signUpButton} onPress={this.CheckTextInput} >
<Text style={style.signUpButtonText}>Sign in</Text>
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
//textAlign: "left",
justifyContent: 'flex-start',
//marginLeft: 20,
marginBottom: 0,
color: "black",

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
signUpButton: {
backgroundColor: "black",
opacity: 1,
padding: 15,
width: "60%",
borderRadius: 10,
margin: 80
},
signUpButtonText: {
fontSize: 22,
textAlign: "center",
color: "white"
},

})