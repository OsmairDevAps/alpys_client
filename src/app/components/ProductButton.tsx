import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  label?:string;
  title: string;
}

export default function ProductButton({label, title, ...rest}: Props) {
  return (
    <>
      {label && <Text className="text-alpys-tx-primary">{label}:</Text>}
      <TouchableOpacity 
        className="flex justify-center border-2 border-alpys-secondary rounded-lg bg-alpys-primary h-16 px-4"
        {...rest}
      >
        <Text className="text-alpys-placeholder">{title}</Text>
      </TouchableOpacity>
    </>
  )
}