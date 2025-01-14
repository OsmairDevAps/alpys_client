import { IProduct } from "@/constants/interface";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

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
    <FlatList 
      className="mt-60 bg-alpys-background"
      data={products}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={{ gap: 2 }}
      renderItem={({ item }) => 
        <TouchableOpacity 
          onPress={() => SelectProduct(item)}
          className="flex flex-row justify-start items-center h-14 px-6 bg-alpys-primary"
        >
          <Text className="text-alpys-tx-primary">{item.name}</Text>
          <Text className="text-alpys-tx-primary px-4">-</Text>
          <Text className="text-alpys-tx-primary">
            ({Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(item.price)})
          </Text>
        </TouchableOpacity>
      }
    />
  )
}