import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView  } from 'react-native';

export default class Register extends React.Component{

	register = () => {
		console.log(1);
	}

	render()
	{
		return  (
			<KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
				<View style = {styles.container}>
					<Image 
						style = {styles.logoImage} 
						source = {require('./../images/logo.png')} />
					<TextInput 
						style = {styles.input} 
						underlineColorAndroid = 'transparent'
						placeholder = "Login"
						placeholderTextColor = "#FFFFFF"
						returnKeyType = "next"
						onSubmitEditing = {() => this.refs.passwordInput.focus()}/>
					<TextInput 
						style = {styles.input}
						underlineColorAndroid = 'transparent'
						placeholder = "Password"
						placeholderTextColor = "#FFFFFF"
						secureTextEntry = {true}
						returnKeyType = "next"
						ref = 'passwordInput'
						onSubmitEditing = {() => this.refs.passwordInput2.focus()}
						/>
					<TextInput 
						style = {styles.input}
						underlineColorAndroid = 'transparent'
						placeholder = "Re-password"
						placeholderTextColor = "#FFFFFF"
						secureTextEntry = {true}
						returnKeyType = "go"
						ref = 'passwordInput2'
						/>
					<TouchableOpacity
						style = {styles.loginButton} 
						onPress = {this.register}>
						<Text style = {styles.loginText}>
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
        justifyContent: 'center'
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
	loginText: {
		backgroundColor: 'rgba(0, 0, 0, 0)',
		color: '#000000',
		fontSize: 24
	}
	,
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
	}
})