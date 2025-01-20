import { View, Image, Text, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

export default function Header() {
  const router = useRouter()

  function logout() {
    router.push('/')
  }

  return (
    <View className='flex flex-row justify-between items-center w-ful p-6 bg-alpys-background'>
      <Image style={{width: 60, height: 60}} source={require('../../assets/user.png')} />
      <Image style={{width: 60, height: 60}} source={require('../../assets/logo_branco.png')} />
      <TouchableOpacity onPress={logout}>
        <FontAwesome name='sign-out' size={32} color='#D45C05' />
      </TouchableOpacity>
    </View>
  )
}