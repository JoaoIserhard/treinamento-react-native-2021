import React, { useState, useEffect, useCallback } from "react";
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from "react-redux";

import { Screens } from '../../../config/constants';
import { PlaylistCard, Loader } from '../../components';
import { fetchPlaylists } from '../../../services/playlist/playlist.service';
import { savePlaylists, selectPlaylist } from "../../../state/playlist/playlist.actions";

export const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const playlists = useSelector((store) => store.playlistReducer.playlists)

    const [isLoading, setIsloading] = useState(false)

    const getPlaylists = useCallback(async () => {
        try {
            setIsloading(true)
            const fetchedPlaylists = await fetchPlaylists()
            dispatch(savePlaylists(fetchedPlaylists))
        } catch (e) {
            console.error(e)
        } finally {
            setIsloading(false)
        }
    }, [])

    useEffect(() => {
        getPlaylists()
    }, [])

    const handleSelectPlaylist = (id) => {
        navigation.navigate(Screens.PLAYER_SCREEN)
        dispatch(selectPlaylist(id))
    }

    const renderItem = ({ item }) => {
        const { imageUrl, title } = item

        return (
            <PlaylistCard
                imageUrl={imageUrl}
                title={title}
                duration={item.duration}
                quantity={item.quantity}
                onPress={() => handleSelectPlaylist(item.id)} />
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