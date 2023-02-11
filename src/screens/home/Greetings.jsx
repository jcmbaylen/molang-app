import React from 'react'
import { Text, View, SafeAreaView, StyleSheet, Image } from 'react-native'
import { Button, HStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import GreetingsIcon from '../../assets/0greet.png'
import SchoolIcon from '../../assets/0school.png'
import TravelIcon from '../../assets/0travel.png'
import BuySomeIcon from '../../assets/0buying.png'

export default function GreetingsMain () {
	const router = useNavigation()
	const Greetings = () => {
		router.navigate( 'CategoryGreetings' ) 
	}
	const School = () => {
		router.navigate( 'School' ) 
	}
	const Travel = () => {
		router.navigate( 'Travel' ) 
	}
	const BuySome = () => {
		router.navigate( 'BuySome' ) 
	}

	return (
		<SafeAreaView
			contentInsetAdjustmentBehavior="automatic"
			style={ styles.container }
		>
			<Button
				onPress={ Greetings }
				style={ styles.quiz }
			>
				<HStack 
					style={ styles.hStack }
				>
					<View
						style={ styles.textCon }
					>
						<Text 
							style={ styles.quizText }
						>
							GREETINGS
						</Text>
					</View>
					<View 
						style={ styles.iCon }
					>
						<Image
							source={ GreetingsIcon }
							style={ {
								...styles.image
							} }
						/>
					</View>
				</HStack>
			</Button>
			<Button
				onPress={ School }
				style={ styles.quiz }
			>
				<HStack 
					style={ styles.hStack }
				>
					<View
						style={ styles.textCon }
					>
						<Text 
							style={ styles.quizText }
						>
							SCHOOL
						</Text>
					</View>
					<View 
						style={ styles.iCon }
					>
						<Image
							source={ SchoolIcon }
							style={ {
								...styles.image
							} }
						/>
					</View>
				</HStack>
			</Button>  
			<Button
				onPress={ Travel }
				style={ styles.quiz }
			>
				<HStack 
					style={ styles.hStack }
				>
					<View
						style={ styles.textCon }
					>
						<Text 
							style={ styles.quizText }
						>
							TRAVEL
						</Text>
					</View>
					<View 
						style={ styles.iCon }
					>
						<Image
							source={ TravelIcon }
							style={ {
								...styles.image
							} }
						/>
					</View>
				</HStack>
			</Button>  
			<Button
				onPress={ BuySome }
				style={ styles.quiz }
			>
				<HStack 
					style={ styles.hStack }
				>
					<View
						style={ styles.textCon }
					>
						<Text 
							style={ styles.quizText }
						>
							BUYING {'\n'} SOMETHING
						</Text>
					</View>
					<View 
						style={ styles.iCon }
					>
						<Image
							source={ BuySomeIcon }
							style={ {
								...styles.image
							} }
						/>
					</View>
				</HStack>
			</Button>    
		</SafeAreaView>
	)
}

const styles = StyleSheet.create ({
	container: {
		height: '100%',
		backgroundColor: 'rgb(255,255,255)'
	},
	quiz: {
		width: '80%',
		height: '20%',
		borderWidth: 2,
		marginTop: '5%',
		marginLeft: '10%',
		alignItems: 'center',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		backgroundColor: '#87cefa'
	},
	quizText: {
		fontSize: 25,
		color: '#000',
		fontWeight:'bold',
		textAlign: 'center'
	},
	iCon: {
		width: '40%',
		height: '100%'
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover'
	},
	hStack: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	textCon: {
		width: '60%',
		height: '100%',
		justifyContent: 'center'
	},
}) 