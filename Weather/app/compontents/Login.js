import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView  } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Login extends React.Component{

	constructor(){
		super();
		this.state = {
			username: '',
			password: '',
		}
	}

	static navigationOptions = {
      title: 'Login',
      headerStyle: {
        backgroundColor: '#0000ff',
      },
      headerTitleStyle:{
        color: '#fff',
      }
  	};

	login = () => {
		console.log(this.state.username);
		console.log(this.state.password);
	}

	render() {
		const { navigate } = this.props.navigation;
		return  (
			<KeyboardAvoidingView  style={styles.wrapper}>
				<View style = {styles.container}>
					<Image 
						style = {styles.logoImage} 
						source = {require('./../images/logo.png')} />
					<TextInput 
						style = {styles.input} 
						underlineColorAndroid = 'transparent'
						placeholder = "Login"
						placeholderTextColor = "#FFFFFF"
						returnKeyType = {"next"}
						onSubmitEditing = {() => this.refs.passwordInput.focus()}
						onChangeText={(username) => this.setState({username})}
    					value={this.state.username}/>
					<TextInput 
						style = {styles.input}
						underlineColorAndroid = 'transparent'
						placeholder = "Password"
						placeholderTextColor = "#FFFFFF"
						secureTextEntry = {true}
						returnKeyType = "go"
						ref = 'passwordInput'
						onChangeText={(password) => this.setState({password})}
    					value={this.state.password}
						/>
					<TouchableOpacity
						style = {styles.loginButton}
						onPress = {() => this.login()} >
						<Text style = {styles.loginText}>
							Login
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