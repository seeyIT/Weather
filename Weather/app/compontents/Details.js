import React from 'react';
import { StyleSheet, View, Text, Image  } from 'react-native';

export default class Details extends React.Component{

	constructor(props) {
		super(props);
		
		const data = this.props.navigation.state.params;
		this.state = {
			latitude: data.coord.lat,
			longitude: data.coord.lon,
			city: data.name,
			main: data.weather[0].main,
			description: data.weather[0].description,
			temperature: data.main.temp - 272.15,
			minTemp: data.main.temp_min - 272.15,
			maxTemp: data.main.temp_max - 272.15,
			pressure: data.main.pressure,
			humidity: data.main.humidity,
			sunrise: data.sys.sunrise ,
			sunset: data.sys.sunset
		}
	}

	static navigationOptions = {
      title: 'Details',
      headerStyle: {
        backgroundColor: '#2e2ee6',
      },
      headerTitleStyle:{
        color: '#fff',
      }
	};
	  
	componentDidMount = () => {
		var sunrise = this.millisecondsToDate(this.state.sunrise * 1000);
		var sunriseMessage = sunrise.getHours().toString() + ":" + sunrise.getMinutes().toString();
		this.setState({sunrise:sunriseMessage})

		var sunset = this.millisecondsToDate(this.state.sunset * 1000);
		var sunsetMessage = sunset.getHours().toString() + ":" + sunset.getMinutes().toString();
		this.setState({sunset:sunsetMessage})
	}

	millisecondsToDate = (milliseconds) => {
		return (new Date(milliseconds));
	}

	render()
	{
		return  (
				<View style = {styles.container}>
					<View style = {styles.locationContainer} >
						<Text style = {styles.rowItem}>{`Latitude:\n`}{this.state.latitude}</Text>
						<Text style = {styles.rowItem}>{`Longitute:\n`}{this.state.longitude}</Text>
						<Text style = {styles.rowItem}>City: {this.state.city}</Text>
					</View>
					<Text style = {styles.mainWeather}>{this.state.main}</Text>
					<Text style = {styles.descriptionWeather}>{this.state.description}</Text>
					<Text style = {styles.temperature}>{this.state.temperature} C</Text>
					<View style = {styles.temperatureContainer} >
						<Text style = {styles.rowItem}>Min temp: {this.state.minTemp}</Text>
						<Text style = {styles.rowItem}>Max temp: {this.state.maxTemp}</Text>
					</View>
					<Text style = {styles.alignLeftText}>Pressure: {this.state.pressure}</Text>
					<Text style = {styles.alignLeftText}>Humidity: {this.state.humidity}</Text>
					<View style = {styles.sunContainer} >
						<Text style = {styles.rowItem}>{`Sunrise:\n`}{this.state.sunrise}</Text>
						<Text style = {styles.rowItem}>{`Sunset:\n`}{this.state.sunset}</Text>
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
		flexDirection: 'row'
	},
	temperatureContainer: {
		flexDirection: 'row',
		marginBottom: 24
	},
	sunContainer: {
		flexDirection: 'row'
	},
	mainWeather: {
		fontSize: 28,
		color: '#ffffff',
	},
	descriptionWeather: {
		fontSize: 16,		
		color: '#ffffff',
	},
	temperature: {
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
	}	
})