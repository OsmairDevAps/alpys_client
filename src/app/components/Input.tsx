import { Feather } from "@expo/vector-icons";
import { View, TextInput, TextInputProps, Text } from "react-native";

interface Props extends TextInputProps {
  label?: string;
  icon?: keyof typeof Feather.glyphMap;
  color?: string;
}

export default function Input({ label, icon, color, ...rest }: Props) {
  return (
    <View className="flex justify-start w-full gap-2 my-2">
      {label && <Text className="text-orange-200 font-semibold text-lg">{label}</Text>}
      
      <View className="w-full flex-row items-center border-2 border-alpys-secondary rounded-lg bg-alpys-primary overflow-hidden">
        { icon &&
          <View className="p-4 justify-center items-center border-r-2 border-alpys-secondary">
            <Feather name={icon} size={24} color={color} />
          </View>
        }
        <TextInput 
          placeholderTextColor='#D45C05'
          className="flex flex-1 text-alpys-tx-primary h-16 w-full px-4"
          {...rest}
        />
      </View>

    </View>
  )
}