import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

interface Props extends TouchableOpacityProps  {
  title: string;
}

export default function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity 
      {...rest}
      className="flex justify-center items-center w-full h-16 bg-alpys-secondary rounded-xl"
    >
      <Text className="text-alpys-white text-2xl">{ title }</Text>
    </TouchableOpacity>
  )
}