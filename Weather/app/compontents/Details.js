import React from 'react';
import { StyleSheet, View, Text, Image  } from 'react-native';

export default class Register extends React.Component{

	constructor()
	{
		super();
		this.state = {
			latitude: -150.23,
			longitude: -140.25,
			city: 'New York City',
			main: 'rain',
			description: 'duzo deszucz pada bo jest zima i jest cieplo',
			temp: -43.4,
			minTemp: -43.2,
			maxTemp: -11.3,
			pressure: 1025,
			humidity: 99,
			sunrise: 1531212323,
			sunset: 2323232323,
		}
	}

	static navigationOptions = 
  {
      title: 'as',
      headerStyle: {
        backgroundColor: '#ff00ff',
      },
      headerTitleStyle:{
        color: '#fff',
      }
  };

	render()
	{
		return  (
				<View style = {styles.container}>
					<View style = {styles.locationContainer} >
						<Text style = {styles.rowItem}>{`Latitude:\n`} {this.state.latitude}</Text>
						<Text style = {styles.rowItem}>{`Longitute:\n`} {this.state.longitude}</Text>
						<Text style = {styles.rowItem}>City: {this.state.city}</Text>
					</View>
					<Text style = {styles.mainWeather}>{this.state.main}</Text>
					<Text style = {styles.descriptionWeather}>{this.state.description}</Text>
					<Text style = {styles.temp}>{this.state.temp} C</Text>
					<View style = {styles.tempContainer} >
						<Text style = {styles.rowItem}>Min temp: {this.state.minTemp}</Text>
						<Text style = {styles.rowItem}>Max temp: {this.state.maxTemp}</Text>
					</View>
					<Text style = {styles.alignLeftText}>Pressure: {this.state.pressure}</Text>
					<Text style = {styles.alignLeftText}>Humidity: {this.state.humidity}</Text>
					<View style = {styles.sunContainer} >
						<Text style = {styles.rowItem}>Sunrise: {this.state.sunrise}</Text>
						<Text style = {styles.rowItem}>Sunset: {this.state.sunset}</Text>
					</View>
				</View>
			)
	}
}

const styles = StyleSheet.create({	
	container: {
		flex:1,
		height: '100%',
		width: '100%',
		backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
	}, 
	locationContainer: {
		flexDirection: 'row',
		marginBottom: 24
	},
	tempContainer: {
		flexDirection: 'row',
		marginBottom: 24
	},
	sunContainer: {
		flexDirection: 'row',
		marginTop: 24
	},
	mainWeather: {
		fontSize: 28,
		color: '#ffffff',
	},
	descriptionWeather: {
		fontSize: 16,		
		color: '#ffffff',
	},
	temp: {
		marginTop: 16,
		fontSize: 64,
		color: '#ffffff',
	},
	rowItem: {
		flex: 1,
		fontSize: 22,
		padding: 16,
		color: '#ffffff',
		textAlign: 'center'
	},
	alignLeftText: {
		width: 350,
		color: '#ffffff',
		fontSize: 22,
		textAlign: 'left',
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