import { Feather } from "@expo/vector-icons";
import { View, TextInput, TextInputProps, Text } from "react-native";
import theme from "@/theme";

interface Props extends TextInputProps {
  label?: string;
  icon?: keyof typeof Feather.glyphMap;
  color?: string;
}

export default function Input({ label, icon, color, ...rest }: Props) {
  return (
    <View className="flex justify-start w-full gap-2 my-2">
      {label && <Text className="text-alpys-tx-text font-semibold text-lg">{label}</Text>}
      
      <View className="w-full flex-row items-center rounded-lg bg-alpys-bg-input overflow-hidden">
        { icon &&
          <View className="p-4 justify-center items-center border-r-[1px] border-alpys-placeholder-input">
            <Feather name={icon} size={24} color={color} />
          </View>
        }
        <TextInput 
          placeholderTextColor={theme.color.alpys_placeholder_input}
          className="flex flex-1 text-alpys-tx-input h-16 w-full px-4"
          {...rest}
        />
      </View>

    </View>
  )
}