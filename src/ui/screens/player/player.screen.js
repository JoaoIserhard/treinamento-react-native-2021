import React, { useState, useCallback, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';

import { useTheme } from '../../../contexts/theme-provider';
import { Surface } from '../../containers/surface.containers';
import { fetchVideoById } from '../../../services/videos/videos.service';
import { Loader } from '../../components';

import { styles } from './player.style'
import { PreviousIcon, NextIcon, PlayFilledIcon, PauseIcon } from '../../../assets/icons'



const StatusBar = () => {
  return <View style={styles.statusBar} />
}

const Info = ({ video }) => {
  return (
    <View style={styles.textContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{video.title}</Text>
        <Text style={styles.description}>1:00 | 3:00</Text>
      </View>
      <Text>{video.description}</Text>
    </View>)
}

const Buttons = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const { toggleTheme } = useTheme();

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.touchable}>
        <PreviousIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.playContainer} onPress={toggleTheme}>
        <View style={styles.playButton}>
          {isPlaying ? <PlayFilledIcon /> : <PauseIcon fill={'white'} />

          }

        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable}>
        <NextIcon />
      </TouchableOpacity>
    </View>)
};

const SoundBar = () => {
  return <View />
}

export const PlayerScreen = () => {
  const selectedPlaylist = useSelector((store) => store.playlistReducer.selectedPlaylist)

  const [queue, setQueue] = useState([])
  const [currentVideo, setCurrentVideo] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getVideo = useCallback(async (id) => {
    try {
      const video = await fetchVideoById(id)
      setCurrentVideo(video)
    } catch (e) {
      console.error(e)
    }
  }, [])

  useEffect(() => {
    if (selectedPlaylist) {
      setQueue(selectedPlaylist.videos)
    }

    return ((setCurrentVideo(null)))
  }, [selectedPlaylist])

  useEffect(() => {
    getVideo(queue[0])
  }, [queue])

  if (!currentVideo) return <Loader />

  const theme = useTheme()
  return (
    <Surface style={[styles.container]}>
      <Image style={styles.videoImage} source={{ uri: currentVideo.imageUri }} />
      <StatusBar />
      <View style={styles.mediaContainer}>
        <Info video={currentVideo} />
        <Buttons />
        <SoundBar />
      </View>
    </Surface>
  )
}