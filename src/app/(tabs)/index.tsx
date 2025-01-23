import { useCallback, useState } from 'react'
import { View, Text, Image, ScrollView, ActivityIndicator, useWindowDimensions } from 'react-native'
import Input from '../components/Input'
import YoutubeIframe from 'react-native-youtube-iframe'
import * as ScreenOrientation from 'expo-screen-orientation'
import { useCategorySupabase } from '@/database/useCategoryDatabase'

import theme from '@/theme'

export default function Home() {
  const categoryDatabase = useCategorySupabase()
  const [videoReady, setVideoReady] = useState(false)
  const video_height=180
  const { width } = useWindowDimensions()
  const video_width = width - 74

  async function loadCategory() {
    try {
      const catgories = await categoryDatabase.list()
    } catch (error) {
      console.log(error)
    }
  }

  const onFullScreenChange = useCallback((isFullScreen: boolean) => {
    if(isFullScreen) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  },[])

  return (
    <View className='flex-1 p-6 bg-alpys-background'>
      <View className='gap-6 bg-alpys-background p-4'>
        <View>
          <Text className='text-center text-alpys-tx-title text-2xl font-bold'>Pensou presente,</Text>
          <Text className='text-center text-alpys-tx-title text-2xl font-bold'>Pensou Alpys</Text>
        </View>
        
        <View className='mt-7'>
          <Input icon='search' color={theme.color.alpys_tx_text} placeholder='Pesquisar produto' />
        </View>

        <ScrollView horizontal={true} className='gap-2'>
          <Text className='text-alpys-tx-title font-semibold mx-2'>
            Pão de Mel
          </Text>        
          <Text className='text-alpys-tx-text font-semibold mx-2'>
            Bombom
          </Text>        
          <Text className='text-alpys-tx-text font-semibold mx-2'>
            Panetone
          </Text>
          <Text className='text-alpys-tx-text font-semibold mx-2'>
            Cápsulas
          </Text>        
        </ScrollView>

        <ScrollView horizontal={true}>
          <Image 
            className='mx-2 border-2 border-alpys-border-block p-1 rounded-lg' 
            source={require('../../assets/produto1.png')} 
            style={{width:100, height:100}} 
          />
          <Image 
            className='mx-2 border-2 border-alpys-border-block p-1 rounded-lg' 
            source={require('../../assets/produto1.png')} 
            style={{width:100, height:100}} 
          />
          <Image 
            className='mx-2 border-2 border-alpys-border-block p-1 rounded-lg' 
            source={require('../../assets/produto1.png')} 
            style={{width:100, height:100}} 
          />
          <Image 
            className='mx-2 border-2 border-alpys-border-block p-1 rounded-lg' 
            source={require('../../assets/produto1.png')} 
            style={{width:100, height:100}} 
          />
          <Image 
            className='mx-2 border-2 border-alpys-border-block p-1 rounded-lg' 
            source={require('../../assets/produto1.png')} 
            style={{width:100, height:100}} 
          />
          <Image 
            className='mx-2 border-2 border-alpys-border-block p-1 rounded-lg' 
            source={require('../../assets/produto1.png')} 
            style={{width:100, height:100}} 
          />
        </ScrollView>

        <View className='flex justify-center items-center border-2 border-alpys-border-block rounded-lg bg-alpys-border-block'>
          <YoutubeIframe 
            videoId='lT504Mp59Pk'
            width={video_width}
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