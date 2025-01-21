import { View, Text, Image } from 'react-native'
import { useRouter, Link } from 'expo-router'
import Input from './components/Input'
import Button from './components/Button'
import SocialButton from './components/SocialButton'
import theme from '../theme' 

export default function Home() {
  const router = useRouter()
 
  function login() {
    router.replace('/(tabs)')
  }

  return (
    <View className='flex flex-1 bg-alpys-background p-6 gap-4 justify-center items-center'>
      <View className='flex justify-center items-center'>
        <Text className='text-alpys-white text-3xl'>Pensou presente,</Text>
        <Text className='text-alpys-white text-3xl'>Pensou Alpys</Text>
      </View>
      <Image style={{ width: 200, height: 200 }} source={require('../assets/logo_alpys.png')} />
      
      <View className='flex gap-2 w-full p-4'>
        <Text className='text-alpys-tx-primary'>Faça seu login:</Text>
        <Input 
          icon='mail' 
          color={theme.color.alpys_secondary}
          placeholder='e-mail' 
        />
        <Input 
          icon='key' 
          color={theme.color.alpys_secondary}
          placeholder='senha' 
          secureTextEntry={true} 
        />
        <Button title='Entrar' onPress={login} />
        
        <View className='flex flex-row justify-center items-center mt-2 mb-4 gap-4'>
          <Text className='text-alpys-tx-primary'>Esqueci a senha</Text>
          <Text className='text-alpys-tx-primary'>|</Text>
          <Link href='/screens/register'><Text className='text-alpys-tx-primary'>Não tenho cadastro</Text></Link>
        </View>

        <SocialButton 
          logotipo='../assets/logo_google.png'
          title='Entre com Google'
          type='google'
        />

        <SocialButton 
          logotipo='../assets/logo_apple.png'
          title='Entre com Apple'
          type='apple'
        />
      </View>
    </View>
  )
}