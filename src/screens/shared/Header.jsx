import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, HStack, VStack } from 'native-base'

import LogInIcon from '../../assets/logIn.png'

export default function Header() {
	const router = useNavigation()
    const handleNavigateSignIn = () => {
        router.navigate( 'SignIn' )
	}

	return (
		<View 
            style={ styles.header }
        >
			<TouchableOpacity
                onPress={ handleNavigateSignIn }
            >
                <Image
                    style={ styles.imageHeader }
                    source={ LogInIcon }
                />
            </TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
    header: {
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '2%',
        marginLeft: '85%'
    },
    imageHeader: {
        height: 50,
        width: 50
    }
})
