import { IProduct } from "@/constants/interface";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Button from "./Button";

interface Props {
  products: IProduct[]
  setSelectProduct: (product:IProduct) => void
  setModalOpen: (value: boolean) => void
}

export default function SelectProduct({products, setSelectProduct, setModalOpen}: Props) {
  function SelectProduct(product:IProduct) {
    setSelectProduct(product)
    setModalOpen(false)
  }

  return (
    <View className="flex-1 mt-60 mx-4 bg-alpys-background border-2 border-orange-500 p-2">
      <FlatList 
        data={products}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={{ gap: 2 }}
        renderItem={({ item }) => 
          <TouchableOpacity 
            onPress={() => SelectProduct(item)}
            className="flex flex-row justify-between items-center h-14 px-4 bg-alpys-primary"
          >
            <Text className="text-alpys-tx-primary">{item.name}</Text>
            <Text className="text-alpys-tx-primary">
              {Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(item.price)} (unid)
            </Text>
          </TouchableOpacity>
        }
      />
      <Button title="Cancelar" onPress={() => setModalOpen(false)} />
    </View>
  )
}