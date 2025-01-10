import { useCallback, useState } from 'react'
import { View, Text, Image, ScrollView, ActivityIndicator, useWindowDimensions } from 'react-native'
import Input from '../components/Input'
import YoutubeIframe from 'react-native-youtube-iframe'
import * as ScreenOrientation from 'expo-screen-orientation'

export default function Home() {
  const [videoReady, setVideoReady] = useState(false)
  const video_height=180
  const { width } = useWindowDimensions()

  const onFullScreenChange = useCallback((isFullScreen: boolean) => {
    if(isFullScreen) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  },[])

  return (
    <View className='flex-1 p-6 bg-alpys-background'>
      <View className='flex-1 bg-alpys-background p-4'>
        <Text className='text-center text-alpys-white text-2xl font-bold'>Pensou presente,</Text>
        <Text className='text-center text-alpys-white text-2xl font-bold'>Pensou Alpys</Text>
        
        <View className='mt-7'>
          <Input />
        </View>
      </View>

      <View className='flex flex-1 justify-start items-start'>
        <ScrollView horizontal={true} className='gap-2'>
          <Text className='text-alpys-tx-primary'>Pão de Mel</Text>        
          <Text className='text-alpys-tx-primary'>Bombom</Text>        
          <Text className='text-alpys-tx-primary'>Panetone</Text>        
          <Text className='text-alpys-tx-primary'>Cápsulas</Text>        
        </ScrollView>

        <ScrollView horizontal={true}>
          <Image source={require('../../assets/produto1.png')} style={{width:100, height:100}} />
          <Image source={require('../../assets/produto1.png')} style={{width:100, height:100}} />
          <Image source={require('../../assets/produto1.png')} style={{width:100, height:100}} />
        </ScrollView>

        <View className='flex justify-center items-center'>
          <YoutubeIframe 
            videoId='0GOUF8vNqzE'
            width={width}
            height={videoReady ? video_height : 0}
            onReady={() => setVideoReady(true)}
            onFullScreenChange={onFullScreenChange}
          />
          {!videoReady && <ActivityIndicator color='red' />}
        </View>

      </View>

    </View>
  )
}