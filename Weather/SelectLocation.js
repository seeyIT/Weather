import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView  } from 'react-native';

type Props = {};
export default class SelectLocation extends React.Component<Props> {
	constructor()
	{
		super();
		this.state = {
			city: "tak",
	  		link1: 'http://api.openweathermap.org/data/2.5/weather?q=',
			link2: '&APPID=9bf4ef853d9537441f36f8b5b8ed4cfb',
			data: "nice",
			city: '',
			success: false
		}	
	}
	
	checkWeatherWithCity = () => {
				
		// this.setState({ city : 'Cracow'});

		this.getJson();
		//console.log(this.state.data);
		if(this.state.success)
		{
			if(this.state.data.cod !== "404")
			{
				console.log(this.state.data);

			}
		}
		
		this.state.success = false;
	}

	getJson = () =>
	{
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

	checkWeatherWithLocation = () => {
		console.log(2);
	}
	
	getLocation = () => 
	{
		
	}

	render()
	{
		return  (
			<KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
				<View style = {styles.container}>
					<Text>{this.state.initialPosition}</Text>
					<Image 
						style = {styles.logoImage} 
						source = {require('./../images/logo.png')} />
					<TextInput 
						style = {styles.input} 
						underlineColorAndroid = 'transparent'
						placeholder = "Type your city"
						placeholderTextColor = "#FFFFFF"
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
					<Text style = {styles.text}>or</Text>
					<TouchableOpacity
						style = {styles.checkWeatherButton}
						onPress = {this.getLocation} >
						<Text style = {styles.text}>
							Use your device!
						</Text>
					</TouchableOpacity >
				</View>
			</KeyboardAvoidingView>
			);
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