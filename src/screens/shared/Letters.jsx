import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, StyleSheet, Text, Image, View } from 'react-native'
import { Button, HStack } from 'native-base'
import { useRoute } from '@react-navigation/native'

import { ALPHABET_DATA } from '../../data/alphabet'

export default function AlphabetContent() {
  const route = useRoute()
  const router = useNavigation()
  const handleBack = () => {
	router.goBack()
	// const currentPosition = ALPHABET_DATA.findIndex(
	// 	(ALPHABET) => ALPHABET.id === route.params.id
	// )

	// if (currentPosition === 0) {
	// 	router.goBack()

	// 	return
	// }

	// const nextItem = ALPHABET_DATA[ currentPosition - 1 ]

	// router.navigate('AlphabetContent', nextItem)
  }
  const currentPosition = ALPHABET_DATA.findIndex(
	(ALPHABET) => ALPHABET.id === route.params.id
	)
	const isLastItem = (currentPosition + 1) === ALPHABET_DATA.length
  const handleNext = () => {
	const nextItem = ALPHABET_DATA[ isLastItem ? 0 : (currentPosition + 1) ]

	router.navigate('AlphabetContent', nextItem)
  }

	return (
		<SafeAreaView
			contentInsetAdjustmentBehavior="automatic"
		>
			<View 
				style={ styles.h1Con }
			>
				<Text 
					style={ styles.h1 }
				>
					This is letter " {route.params.letter} "
				</Text>
			</View>
			<View 
				style={ styles.imageCon }
			>
				<Image
					style={ styles.image }
					source={ route.params.path }
				/>
			</View>
			<View >
				<Text 
					style={ styles.h2 }
				>
					HOW?
				</Text>
			</View>
			<View 
				style={ styles.paragraphCon }
			>
				<Text 
					style={ styles.paragraph }
				>
					{ route.params.description }
				</Text>
			</View>
			<HStack
				style={ styles.hStack }
			>
				<Button 
					onPress={ handleBack }
					style={ {
						...styles.button,
						...styles.quizButton,
						...styles.marginRight
					} }
				>
					<Text 
						style={ styles.quizText }
					>
						Back
					</Text>
				</Button>
				{ !isLastItem && (
					<Button 
						title={ styles.letter }
						style={ {
							...styles.quizButton,
							...styles.button
						} }
						onPress={handleNext}
					>
						<Text 
							style={ styles.quizText }
						>
							Next
						</Text>
					</Button>
				) }
			</HStack>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create ({ 
	h1Con: {
		height: '15%',
		paddingTop: '5%'
	},
	h1: {
		fontSize: 40,
		color: '#000',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover'
	},
	imageCon: {
		width: '70%',
		height: '40%',
		borderWidth: 5,
		marginLeft: '15%',
		backgroundColor: '#87cefa'
	},
	button: {
		borderWidth: 2,
		height: '100%'
	},
	quizButton: {
		width: '47%',
		backgroundColor: '#87cefa'
	},
	hStack: {
		width: '100%',
		marginHorizontal: 15,
		display: 'flex',
		justifyContent: 'center'
	},
	marginRight: {
		marginRight: '6%'
	},
	quizText: {
		fontSize: 30,
		color: '#000',
		fontWeight: 'bold'
	},
	h2: {
		fontSize: 28, 
		color: '#000', 
		paddingTop: '5%', 
		fontWeight: '700', 
		textAlign:'center'
	},
	paragraphCon: {
		width: '90%', 
		height: '25%', 
		marginLeft: '5%',
		marginBottom: '3.5%'
	},
	paragraph: {
		fontSize: 18, 
		color: '#000', 
		height: '100%',
		paddingTop: '2%',
		fontWeight: '700', 
		marginBottom: '3%',
		textAlign: 'center'
	}
})