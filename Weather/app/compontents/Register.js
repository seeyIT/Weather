import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView  } from 'react-native';
import md5 from "react-native-md5";
import * as Progress from 'react-native-progress';

export default class Register extends React.Component{

	constructor() {
		super();
		this.state = {
			username: '',
			password1: '',
			password2: '',			
			message:<Text></Text>,
			processing: false,
		}
	}
	
	static navigationOptions = {
		title: 'Register',
		headerStyle: {
		  backgroundColor: '#0000ff',
		},
		headerTitleStyle:{
		  color: '#fff',
		}
	};

	register = () => {
		console.log(this.state.username);
		console.log(this.state.password1);
		console.log(this.state.password2);
		if(this.state.username == "" || this.state.password1 == "" || this.state.password2 == "") {
			this.setState({message: <Text style = {[styles.text, styles.redText]}>Fill all fields! </Text>});
			return;
		}
		if(this.state.password1 !== this.state.password2) {
			this.setState({message: <Text style = {[styles.text, styles.redText]}>Passwords are different! </Text>});
			return;
		}
		this.setState({processing: true})
		let password = md5.hex_md5(this.state.password1);
		fetch('http://192.168.1.3:3000/?action=register&login=' + this.state.username + '&password=' + password)
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({processing: false})

				if(responseJson == "1") {
					this.setState({message: <Text style = {[styles.text, styles.greenText]}>Account created! </Text>});
				} else {
					this.setState({message: <Text style = {[styles.text, styles.redText]}>Login is taken! </Text>});
				}
			})
	}

	render() {
		return  (
			<KeyboardAvoidingView  style={styles.wrapper}>
				{/* appears when user pressed register button, covers whole screen, progress circle*/}
				{this.state.processing ?
					<View style = {[styles.container, styles.zIndex2]}  > 
						<Progress.Circle size={100} indeterminate={false} />
						<Text style = {styles.text}>Please wait!</Text>
					</View> 
				: null}
				
				<View style = {[styles.container, styles.zIndex1]} >
					<Image 
						style = {styles.logoImage} 
						source = {require('./../images/logo.png')} />
					
					{this.state.message}
					<TextInput 
						style = {styles.input} 
						underlineColorAndroid = 'transparent'
						placeholder = "Login"
						placeholderTextColor = "#FFFFFF"
						returnKeyType = "next"
						onSubmitEditing = {() => this.refs.passwordInput.focus()}
						onChangeText = {(username) => this.setState({username})}
						value = {this.state.username}/>
					<TextInput 
						style = {styles.input}
						underlineColorAndroid = 'transparent'
						placeholder = "Password"
						placeholderTextColor = "#FFFFFF"
						secureTextEntry = {true}
						returnKeyType = "next"
						ref = 'passwordInput'
						onSubmitEditing = {() => this.refs.passwordInput2.focus()}
						onChangeText = {(password1) => this.setState({password1})}
						value = {this.state.password1}
						/>
					<TextInput 
						style = {styles.input}
						underlineColorAndroid = 'transparent'
						placeholder = "Re-password"
						placeholderTextColor = "#FFFFFF"
						secureTextEntry = {true}
						returnKeyType = "go"
						ref = 'passwordInput2'
						onChangeText = {(password2) => this.setState({password2})}
						value = {this.state.password2}
						/>
					<TouchableOpacity
						style = {styles.loginButton} 
						onPress = {this.register}>
						<Text style = {styles.text}>
							Register
						</Text>
					</TouchableOpacity >
				</View>
			</KeyboardAvoidingView>
			)
	}
}

const styles = StyleSheet.create({
	wrapper: {
		flex:1,
		height: '100%',
		width: '100%'
	},
	container: {
		flex:1,
		height: '100%',
		width: '100%',
		backgroundColor: 'blue',
        alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute'
	}, 
	loginButton: {
		width:300,
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		margin: 8,
		paddingVertical: 4,
		paddingHorizontal:16,
		borderRadius: 20,
		alignItems: 'center'
	},
	text: {
		backgroundColor: 'rgba(0, 0, 0, 0)',
		color: '#000000',
		fontSize: 24
	},
	redText: {
		color: 'red'
	},
	greenText: {
		color: 'green'
	},
	logoImage: {
		width: 128,
		height: 128,
		marginBottom: 16
	},
	input: 	{
		width:300,
		color: '#000000',
		backgroundColor: 'rgba(255, 255, 255, 0.6)',
		fontSize: 24,
		margin: 4,
		paddingVertical: 4,
		paddingHorizontal:16,
		borderRadius: 20
	},
	zIndex1: {
		zIndex: 1
	},
	zIndex2: {
		zIndex: 2,
		backgroundColor:'rgba(255,255,255,0.7)',
	}
})