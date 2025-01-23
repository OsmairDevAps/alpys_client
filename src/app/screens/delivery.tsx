import { Text, View } from "react-native";
import NavButton from "../components/NavButton";
import theme from "@/theme";

type Props = {
    setModalOpen: (b:boolean) => void;
}

export default function Delivery({ setModalOpen }:Props) {
    function closeModal() {
        setModalOpen(false)
    }
    return (
        <View className="flex-1 p-4 bg-alpys-background mt-32 flex-row justify-between">
            <Text className="text-alpys-tx-text text-xl">Entregas:</Text>
            <NavButton icon="x" color={theme.color.alpys_tx_text} onPress={closeModal} />
        </View>
    )
}