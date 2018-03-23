import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard  } from 'react-native';

export default class SelectLocation extends React.Component{

	constructor() {
		super();
		 this.state = {
			city: "tak",
	  		link1: 'http://api.openweathermap.org/data/2.5/weather?q=',
			link2: '&APPID=9bf4ef853d9537441f36f8b5b8ed4cfb',
			data: "nice",
			city: '',
			success: false,
			errorMessage: ''
		}	
	}
	static navigationOptions = {
      title: 'Location',
      headerStyle: {
        backgroundColor: '#2e2ee6',
      },
      headerTitleStyle:{
        color: '#fff',
      }
	};
	  
	checkWeatherWithCity = () => {
		this.getJson();
		setTimeout(() => {
			if(this.state.success) {
				console.log(this.state.data.cod);
				
				if(this.state.data.cod == "200") {
					Keyboard.dismiss();
					this.props.navigation.navigate('Details', this.state.data);
				}
				else if(this.state.data.cod == "404") {
					this.setState({errorMessage: "City doesn't exist!"});
				}
			}
		}, 1000);		
		
		this.state.success = false;
	}

	getJson = () =>	{
		var link = this.state.link1 + this.state.city + this.state.link2;
		console.log(link);
		fetch(link)
		   .then(response => {
		     return response.json();
		   })
		   .then(responseJson => {
		     this.setState({ data: responseJson, success: true });
		   })
	}

	render(){
		console.log(this.props.navigation);
		return  (
			<KeyboardAvoidingView  style={styles.wrapper}>
				<View style = {styles.container}>
					
					<Image 
						style = {styles.logoImage} 
						source = {require('./../images/logo.png')} />
					<Text style = {[styles.text, styles.redText]}>{this.state.errorMessage}</Text>
					<TextInput 
						style = {styles.input} 
						underlineColorAndroid = 'transparent'
						placeholder = "Type your city"
						placeholderTextColor = "#000000"
						autoCorrect = {false}
						onChangeText = { (city) => this.setState({city})}
						/>
					<TouchableOpacity
						style = {styles.checkWeatherButton}
						onPress = {this.checkWeatherWithCity} >
						<Text style = {styles.text}>
							Check weather!
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
	checkWeatherButton: {
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
		borderRadius: 20,
	}
})