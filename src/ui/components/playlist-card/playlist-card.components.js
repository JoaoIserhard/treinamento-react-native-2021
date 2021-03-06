import React from 'react';
import { 
    View, 
    StyleSheet, 
    Text, 
    Image, 
    Platform,
    TouchableOpacity, 
} from 'react-native';

import { ArrowIcon } from '../../../assets/icons/arrow.icon'

export const PlaylistCard = ({ imageUrl, title, duration, quantity, onPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
                <View style={styles.overlay} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.description}>{duration} . </Text>
                    <Text style={styles.description}>{quantity} vídeos </Text>
                </View>
            </View>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <ArrowIcon/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 140,
        marginVertical: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 150,
        height: 100,
        borderRadius: 10,
        zIndex: 1,
    },
    imageContainer: {
        width: 150,
        height: 100,
        position: 'relative',
        ...Platform.OS == 'ios' ?
            {
                shadowColor: '#000',
                shadowOffset: {
                    widht: 0,
                    height: 5
                },
                shadowOpacity: 0.25,
                shadowRadius: 5,
            }
            : {
                elevation: 5,
            }
    },
    overlay: {
        width: 150,
        height: 100,
        backgroundColor: 'grey',
        position: 'absolute',
        borderRadius: 10,
        opacity: 0.5,
        zIndex: 2,
    },
    textContainer: {
        marginStart: 10,
        flex: 1,
        flexDirection: 'column',

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#414141',
    },
    description: {
        fontSize: 12,
        lineHeight: 14,
        color: '#A0A0A0',
    },
    button: {
        height:100,
        justifyContent: 'center',
        alignItems: 'flex-end',
    }
})
