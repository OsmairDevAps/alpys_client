import { useState } from "react";
import { TouchableOpacity, TouchableOpacityProps, Text, Image } from "react-native";

interface Props extends TouchableOpacityProps  {
  title: string;
  type: string;
}

export default function SocialButton({ title, type, ...rest }: Props) {
  const logoApple = '../../assets/logo_apple.png'
  const logoGoogle = '../../assets/logo_google.png'
  const colorBgApple = 'flex flex-row justify-center items-center gap-6 w-full h-16 bg-alpys-bg-apple rounded-xl'
  const colorBgGoogle = 'flex flex-row justify-center items-center gap-6 w-full h-16 bg-alpys-bg-google rounded-xl'
  const colorTxApple = 'text-alpys-tx-apple text-xl'
  const colorTxGoogle = 'text-alpys-tx-google text-xl'

  return (
    <TouchableOpacity 
      {...rest}
      className={type === 'apple' ? colorBgApple : colorBgGoogle}
    >
      <Image source={type === 'apple' ? require(logoApple) : require(logoGoogle) } style={{width: 24, height: 24}} />
      <Text className={type === 'apple' ? colorTxApple : colorTxGoogle}>{ title }</Text>
    </TouchableOpacity>
  )
}