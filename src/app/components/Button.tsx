import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

interface Props extends TouchableOpacityProps  {
  title: string;
  type?: string;
}

export default function Button({ title, type, ...rest }: Props) {
  const styleSubmit = 'flex justify-center items-center mt-2 w-full h-16 bg-alpys-bg-submit rounded-xl'
  const styleNormal = 'flex justify-center items-center mt-2 w-full h-16 bg-alpys-bg-button rounded-xl'
  return (
    <TouchableOpacity 
      {...rest}
      className={type === 'Padrao' ? styleNormal : styleSubmit}
    >
      <Text className="text-alpys-tx-button text-2xl">{ title }</Text>
    </TouchableOpacity>
  )
}