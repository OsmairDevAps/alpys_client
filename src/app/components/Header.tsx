import { View, Image, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default function Header() {
  return (
    <View className='flex flex-row justify-between items-center w-ful p-6 bg-alpys-background'>
      <FontAwesome name='navicon' size={32} color="#D45C05" />
      <Image style={{width: 60, height: 60}} source={require('../../assets/logo_branco.png')} />
      <Image style={{width: 60, height: 60}} source={require('../../assets/user.png')} />
    </View>
  )
}