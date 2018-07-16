import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/home';
import TestContainer from './src/test-container';



export default createStackNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions:{
				title: 'Main',
			},
		},
		TestContainer: {
			screen: TestContainer,
		}
	},
	{
		navigationOptions:{
			headerStyle:{
				backgroundColor: '#cc0000',
			},
			headerTintColor: '#fff',
		}
	}
)