import { forwardRef } from "react";
import { TextInput, View, TextInputProps, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Controller, UseControllerProps } from 'react-hook-form';
import clsx from 'clsx'

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
          <View className="flex-row items-center  border-2 rounded-lg border-alpys-secondary bg-alpys-primary">
            <View className="p-4 justify-center items-center border-r-2 border-alpys-secondary">
              <Feather 
                name={icon} 
                size={24} 
                color={clsx({
                  ['#aa0000']: error.length > 0,
                  ['#F5F2F2']: (error.length === 0 && field.value),
                  ['#D45C05']: (!field.value && error.length === 0),
                })}
              />
            </View>
            <TextInput
              {...inputProps} 
              value={field.value}
              onChangeText={field.onChange}
              ref={ref}
              className="flex-1 pl-4 w-full text-alpys-tx-primary text-lg"
              placeholderTextColor='#D45C05'
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