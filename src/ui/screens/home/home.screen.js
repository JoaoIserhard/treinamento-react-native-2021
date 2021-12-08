import React, { useState, useEffect, useCallback } from "react";
import { View, Text, FlatList} from 'react-native';

import { Screens } from '../../../config/constants'
import { PlaylistCard, Loader } from '../../components'
import { fetchPlaylists } from '../../../services/playlist/playlist.service'

export const HomeScreen = ({navigation}) => {
    const [isLoading, setIsloading] = useState(false)
    const [playlists, setPlaylists] = useState([])

    const getPlaylists = useCallback(async() => {
        try {
            setIsloading(true)
            const fetchedPlaylists = await fetchPlaylists()
            setPlaylists(fetchedPlaylists)
        }catch(e){
            console.error(e)
        } finally {
            setIsloading(false)
        }
    }, [])

    useEffect(() => {
        getPlaylists()
    }, [])

    const handleSelectPlaylist = () => {
        navigation.navigate(Screens.PLAYER_SCREEN)
    }

    const renderItem = ({ item }) => {
        const { imageUrl, title } = item

        return (
            <PlaylistCard
                imageUrl={imageUrl}
                title={title}
                duration={item.duration}
                quantity={item.quantity}
                onPress={handleSelectPlaylist} />
        )
    }

    const Content = () => {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#fff',
                paddingTop: 20,
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    color: '#414141',
                    fontSize: 32,
                    marginTop: 30,
                    marginStart: 20,
                }}
                >Playlists</Text>
                <FlatList
                    data={playlists}
                    keyExtractor={(item) => { item.id }}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingHorizontal: 20 }}
                />
            </View>
        )
    }

    return isLoading ? <Loader /> : <Content />
}