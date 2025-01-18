import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
    icon: 'arrow-left' | 'arrow-right' | 'x';
}

export default function NavButton({ icon, ...rest }: Props) {
    return (
        <TouchableOpacity {...rest}>
            <Feather name={icon} size={24} color='#D45C05' />
        </TouchableOpacity>
    )
}