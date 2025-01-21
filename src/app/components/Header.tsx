import { View, Image, Text, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import theme from '@/theme'

export default function Header() {
  const router = useRouter()

  function logout() {
    router.push('/')
  }

  return (
    <View className='flex flex-row justify-between items-center w-ful p-6 bg-alpys-background'>
      <Image style={{width: 60, height: 60}} source={require('../../assets/user.png')} />
      <Image style={{width: 60, height: 60}} source={require('../../assets/logo_alpys.png')} />
      <TouchableOpacity onPress={logout}>
        <FontAwesome name='sign-out' size={32} color={theme.color.alpys_secondary} />
      </TouchableOpacity>
    </View>
  )
}