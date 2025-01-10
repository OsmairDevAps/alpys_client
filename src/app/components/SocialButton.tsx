import { useState } from "react";
import { TouchableOpacity, TouchableOpacityProps, Text, Image } from "react-native";

interface Props extends TouchableOpacityProps  {
  logotipo: string;
  title: string;
  type: string;
}

export default function SocialButton({ logotipo, title, type, ...rest }: Props) {
  const colorBgApple = 'flex flex-row justify-center items-center w-full h-16 bg-alpys-bg-apple rounded-xl'
  const colorBgGoogle = 'flex flex-row justify-center items-center w-full h-16 bg-alpys-bg-google rounded-xl'
  const colorTxApple = 'text-alpys-tx-apple text-xl'
  const colorTxGoogle = 'text-alpys-tx-google text-xl'

  return (
    <TouchableOpacity 
      {...rest}
      className={type === 'apple' ? colorBgApple : colorBgGoogle}
    >
      <Image source={{uri: logotipo}} style={{width: 50, height: 50}} />
      <Text className={type === 'apple' ? colorTxApple : colorTxGoogle}>{ title }</Text>
    </TouchableOpacity>
  )
}