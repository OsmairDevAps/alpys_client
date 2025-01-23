import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

interface Props extends TouchableOpacityProps {
  label?:string;
  title: string;
}

export default function ProductButton({label, title, ...rest}: Props) {
  const styleActive = 'flex justify-center border-2 border-alpys-secondary rounded-lg bg-alpys-primary h-16 px-4'
  const styleInactive = 'flex justify-center border-2 border-alpys-secondary rounded-lg bg-alpys-primary h-16 px-4'
  return (
    <View className='my-2'>
      {label && <Text className="text-alpys-tx-primary">{label}:</Text>}
      <TouchableOpacity 
        className="flex justify-center rounded-lg bg-alpys-bg-input h-16 px-4"
        {...rest}
      >
        <Text className={title === 'Produto' ? "text-alpys-placeholder-input" : "text-alpys-tx-input"}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
