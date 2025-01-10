import { View, TextInput, TextInputProps, Text } from "react-native";

interface Props extends TextInputProps {
  label?: string;
}

export default function Input({ label, ...rest }: Props) {
  return (
    <View className="flex justify-start w-full gap-2 my-2">
      {label && 
        <Text className="text-orange-200 font-semibold text-lg">
          {label}
        </Text>
      }
      <TextInput 
        placeholderTextColor='#A07C7C'
        className="flex border-2 border-alpys-secondary rounded-lg bg-alpys-primary text-alpys-tx-primary h-16 px-4"
        {...rest}
      />
    </View>
  )
}