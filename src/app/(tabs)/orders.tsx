import { useState, useEffect } from 'react'
import { View, Text, Modal, Switch } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from '../components/Input'
import Button from '../components/Button'
import ProductButton from '../components/ProductButton'
import { IProduct } from '@/constants/interface'
import SelectProduct from '../components/SelectProduct'
import { supabase } from '@/database/supabase'
import { dataProduct } from '@/database/db'

const orderSchema = z.object({
  client_name: z.string().min(3, {message: 'É necessário informar um nome com no mínimo 3 caracteres.'}),
  // product_name: z.string(),
  // amount: z.number({invalid_type_error:'Numero inválido'}),
  // price: z.number(),
  // isdelivery: z.boolean(),
  // deliveryfee: z.number(),
  address: z
    .string()
    .min(5, {message: 'É necessário informar endereço com no mínimo 5 caracteres'}),
  obs: z
    .string()
    .min(5, {message: 'É necessário informar observação com no mínimo 5 caracteres'})
})

export default function Orders() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDelivery, setIsDelivery] = useState(false)
  const [products, setProducts] = useState<IProduct[]>([])
  const [product, setProduct] = useState<IProduct>({
    id: 0,
    name: 'Produto',
    price: 0,
    photo: ''
  })
  const { handleSubmit, control, formState:{errors} } = useForm({
    resolver: zodResolver(orderSchema)
  })

  function onSubmit(data: any) {
    console.log(data)
  }

  async function loadProducts() {
    try {
      const { data, error } = await supabase.from('products').select('*')
      if (data) {
        setProducts(data)
      }
      if (error) {
        console.log(error)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(() => {
  //   loadProducts()
  // }, [])

  return (
    <View className='flex-1 bg-alpys-background p-4'>
      <Text className='text-alpys-white text-xl'>ENCOMENDAS</Text>

      <View>
        <Controller
          control={control}
          rules={{
          required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Nome do cliente"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="client_name"
        />
        {errors.client_name && <Text>This is required.</Text>}

        <ProductButton 
          title={product.name} 
          onPress={() => setIsModalOpen(true)} 
        />
        
        <Controller 
          control={control}
          rules={{required: true}}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input 
              placeholder='Quantidade'
              keyboardType='numeric'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            )}
          name="amount"
        />
 
        <View className="flex flex-row w-full gap-4 justify-normal items-center h-16">
          <Text className="text-orange-50">Para entrega?</Text>
          <Switch
            trackColor={{false: '#767577', true: '#dde6f5'}}
            thumbColor={isDelivery ? '#ffa726' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setIsDelivery}
            value={isDelivery}
          />
          <Text className="text-orange-50">{isDelivery ? 'Sim' : 'Não'}</Text>
        </View>

        <Controller 
          control={control}
          rules={{required: true}}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input 
              placeholder='Endereço de entrega'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            )}
          name="address"
        />

        <Controller 
          control={control}
          rules={{required: true}}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input 
              placeholder='Observação'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            )}
          name="obs"
        />
        
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
            
      <Modal transparent={true}
        animationType='fade'
        visible={isModalOpen}
        onRequestClose={() => {
           setIsModalOpen(!isModalOpen)
      }}>
        <SelectProduct 
          products={dataProduct}
          setSelectProduct={setProduct}
          setModalOpen={setIsModalOpen}
        />
      </Modal>
    </View>
  )
}