import { useState, useEffect } from 'react'
import { TouchableWithoutFeedback, Keyboard, View, Text, Modal, Switch, Alert } from 'react-native'
import Input from '../components/Input'
import Button from '../components/Button'
import ProductButton from '../components/ProductButton'
import { IProduct } from '@/constants/interface'
import SelectProduct from '../components/SelectProduct'
import { supabase } from '@/database/supabase'
import { dataProduct } from '@/database/db'
import { useOrderSupabase } from '@/database/useOrderDatabase'
import { FontAwesome } from '@expo/vector-icons'

export default function Orders() {
  const orderSupabase = useOrderSupabase()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [clientName, setClientName] = useState('')
  const [phoneClient, setPhoneClient] = useState('')
  const [amount, setAmount] = useState('')
  const [isDelivery, setIsDelivery] = useState(false)
  const [address, setAddress] = useState('')
  const [obs, setObs] = useState('')
  const [products, setProducts] = useState<IProduct[]>([])
  const [product, setProduct] = useState<IProduct>({
    id: 0,
    name: 'Produto',
    price: 0,
    photo: ''
  })

  async function onSave() {
    let priceDelivery = 0
    if (clientName==='') {
      Alert.alert('O nome precisa ser preenchido.')
      return
    }
    if (phoneClient === '') {
      Alert.alert('O telefone precisa ser informado.')
      return
    } 
    if (product.id === 0) {
      Alert.alert('O produto precisa ser informado.')
      return
    } 
    if (amount==='') {
      Alert.alert('A quantidade precisa ser preenchida.')
      return
    }
    if (isDelivery) {
      if (address === '') {
        Alert.alert('O endereço de entrega precisa ser informado.')
        return
      } 
      priceDelivery = 10
    }
    try {
      await orderSupabase.create({
        client_name: clientName,
        phone_client: phoneClient,
        product_name: product.name,
        amount: Number(amount),
        price: (product.price * Number(amount)) + priceDelivery,
        isdelivery: isDelivery,
        deliveryfee: priceDelivery,
        address: address,
        obs: obs
      })
      Alert.alert('Encomenda solicitada com sucesso!')
      //apos gravar
      setClientName('')
      setPhoneClient('')
      setProduct({
        id: 0,
        name: 'Produto',
        price: 0,
        photo: ''
      })
      setAmount('')
      setIsDelivery(false)
      setAddress('')
      setObs('')
    } catch (error) {
      console.log(error)
    }
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
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss} >
      <View className='flex-1 bg-alpys-background p-4'>
        <Text className='text-alpys-white text-xl'>ENCOMENDAS</Text>

        <View>
          <Input
            placeholder="Nome completo"
            onChangeText={setClientName}
            value={clientName}
          />

          <Input
            placeholder="Telefone"
            onChangeText={setPhoneClient}
            keyboardType='number-pad'
            value={phoneClient}
          />

          <ProductButton 
            title={product.name} 
            onPress={() => setIsModalOpen(true)} 
          />
          
          <Input 
            placeholder='Quantidade'
            keyboardType='numeric'
            onChangeText={setAmount}
            value={amount}
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

          <Input 
            placeholder='Endereço de entrega'
            onChangeText={setAddress}
            value={address}
          />

          <Input 
            placeholder='Observação'
            onChangeText={setObs}
            value={obs}
          />
          
          <Button title="Submit" onPress={onSave} />
        </View>
              
        <Button title='Minhas encomendas' type='Padrao' />

        <Modal transparent={true}
          animationType='fade'
          visible={isModalOpen}
          onRequestClose={() => {
            setIsModalOpen(!isModalOpen)
        }}>
          <SelectProduct 
            products={products}
            setSelectProduct={setProduct}
            setModalOpen={setIsModalOpen}
          />
        </Modal>

      </View>
    </TouchableWithoutFeedback>
  )
}