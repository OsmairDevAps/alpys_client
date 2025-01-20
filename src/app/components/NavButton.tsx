import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
    icon: keyof typeof Feather.glyphMap;
    color: string;
    title?: string;
}

export default function NavButton({ icon, color, title, ...rest }: Props) {
    return (
        <TouchableOpacity {...rest} className='flex flex-row gap-2 items-center'>
            <Feather name={icon} size={24} color={color} />
            {title && <Text style={{color: color}}>{title}</Text>}
        </TouchableOpacity>
    )
}