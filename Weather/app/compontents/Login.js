import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import md5 from "react-native-md5";
import * as Progress from 'react-native-progress';

export default class Login extends React.Component{

	
	constructor(){
		super();
		this.state = {
			username: '',
			password: '',
			message:'',
			processing: false
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
		
		this.setState({processing: true})
		let password = md5.hex_md5(this.state.password);
		fetch('http://192.168.1.3:3000/?action=login&login=' + this.state.username + '&password=' + password)
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({processing: false})
				
				if(responseJson == "1") {
					this.setState({message: ""})
					this.props.navigation.navigate('SelectLocation');
				}
				else {
					this.setState({message: "Wrong data!"})
				}
			})
			
	}

	render() {
		const { navigate } = this.props.navigation;
		return  (
			<KeyboardAvoidingView  style={styles.wrapper}>
				{/* appears when user pressed login button, covers whole screen, progress circle*/}
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
					<Text style = {[styles.text, styles.redText]}>
						{this.state.message}
					</Text>
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
						<Text style = {styles.text}>
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