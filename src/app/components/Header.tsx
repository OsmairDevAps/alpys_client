import { View, Image, Text, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import theme from '@/theme'

export default function Header() {
  const router = useRouter()

  function logout() {
    router.navigate('/')
  }

  return (
    <View className='flex flex-row justify-between items-center w-ful p-6 bg-alpys-background border-b-[1px] border-alpys-border-block'>
      <View className='w-14 h-14 bg-alpys-border-block rounded-full'>

      </View>
      <Image style={{width: 60, height: 60}} source={require('../../assets/logo_alpys.png')} />
      <TouchableOpacity onPress={logout}>
        <FontAwesome name='sign-out' size={32} color={theme.color.alpys_border_block} />
      </TouchableOpacity>
    </View>
  )
}