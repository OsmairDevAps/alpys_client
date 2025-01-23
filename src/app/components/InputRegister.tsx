import { forwardRef } from "react";
import { TextInput, View, TextInputProps, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Controller, UseControllerProps } from 'react-hook-form';
import clsx from 'clsx'
import theme from "@/theme";

type Props = {
  icon: keyof typeof Feather.glyphMap;
  formProps: UseControllerProps;
  inputProps: TextInputProps;
  error?: string;
}

const InputRegister = forwardRef<TextInput, Props> (({ icon, formProps, inputProps, error='' }, ref) => {
  return (
    <Controller 
      render = {({ field }) => (
        <View className="w-full">
          <View className="flex-row items-center rounded-lg bg-alpys-bg-input">
            <View className="p-4 justify-center items-center border-r-[1px] border-alpys-tx-input">
              <Feather 
                name={icon} 
                size={24} 
                color={clsx({
                  [theme.color.alpys_error]: error.length > 0,
                  [theme.color.alpys_tx_input]: (error.length === 0 && field.value),
                  [theme.color.alpys_placeholder_input]: (!field.value && error.length === 0),
                })}
              />
            </View>
            <TextInput
              {...inputProps} 
              value={field.value}
              onChangeText={field.onChange}
              ref={ref}
              className="flex-1 pl-4 w-full text-alpys-tx-input text-lg"
              placeholderTextColor={theme.color.alpys_placeholder_input}
            />
          </View>
          { error && <Text className="text-md text-alpys-error mt-2">{error}</Text> }
        </View>
      )}
      {...formProps}
    />
  )
})

export default InputRegister