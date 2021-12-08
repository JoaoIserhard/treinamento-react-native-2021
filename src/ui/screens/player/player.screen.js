import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native'

import { useTheme } from '../../../contexts/theme-provider';
import { Surface } from '../../containers/surface.containers';

import { styles } from './player.style'
import { PreviousIcon, NextIcon, PlayFilledIcon, PauseIcon } from '../../../assets/icons'

const imageUri =
  'https://wallpaperboat.com/wp-content/uploads/2020/04/funny-raccoon-08-920x518.jpg'

const StatusBar = () => {
  return <View style={styles.statusBar} />
}

const Info = () => {
  return (
    <View style={styles.textContainer}>
      <View style={styles.tittleContainer}>
        <Text style={styles.tittle}>Zumba Class</Text>
        <Text style={styles.description}>1:00 | 3:00</Text>
      </View>
      <Text>Dancing School</Text>
    </View>)
}

const Buttons = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const {toggleTheme} = useTheme();

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.touchable}>
        <PreviousIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.playContainer} onPress={toggleTheme}>
        <View style={styles.playButton}>
          {isPlaying ? <PlayFilledIcon /> : <PauseIcon fill={'white'}/>

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
  const theme = useTheme()
  return (
    <Surface style={[styles.container]}>      
      <Image style={styles.videoImage} source={{ uri: imageUri }} />
      <StatusBar />
      <View style={styles.mediaContainer}>
        <Info />
        <Buttons />
        <SoundBar />
      </View>
    </Surface>
  )
}