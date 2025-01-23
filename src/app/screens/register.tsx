import { UserFormProps } from "@/constants/interface";
import { useRouter } from "expo-router";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import Button from "../components/Button";
import Header from "../components/Header";
import InputRegister from "../components/InputRegister";
import NavButton from "../components/NavButton";
import theme from "@/theme";

export default function Register() {
  const router = useRouter()
  const { control, handleSubmit, reset, formState: { errors }, getValues } = useForm<UserFormProps>()
  const emailRef = useRef<TextInput>(null)
  const phoneRef = useRef<TextInput>(null)
  const passwordRef = useRef<TextInput>(null)
  const passwordConfirmationRef = useRef<TextInput>(null)
  
  function cancelRegister() {
    router.replace('/')
  }
  
  function handleSave(data: UserFormProps) {
    console.log(data)
    reset()
  }

  function validationPasswordConfirmation(passwordConfirmation: string) {
    const { password } = getValues()
    return password === passwordConfirmation || 'As senhas devem ser iguais.'
  }

  return (
    <View className="flex-1 bg-alpys-background">
      <Header />
      <View className="p-6 gap-2">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-alpys-tx-text text-xl">Novo Cadastro</Text>
          <NavButton 
            icon="x-square" 
            color={theme.color.alpys_tx_text}
            onPress={cancelRegister} 
          />
        </View>
        
        <View className="gap-4">
          <InputRegister
            error={errors.name?.message}
            icon="user" 
            formProps={{
              control,
              name: 'name',
              rules: {
                required: 'Nome é obrigatório.'
              }
            }}
            inputProps={{
              placeholder: 'Nome',
              onSubmitEditing: () => emailRef.current?.focus(),
              returnKeyType: 'next'
            }}
          />

          <InputRegister
            ref={emailRef}
            icon="mail" 
            error={errors.email?.message}
            formProps={{
              name: 'email',
              control,
              rules: {
                required: 'E-mail é obrigatório',
                pattern: {
                  value: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/,
                  message: 'E-mail inválido'
                }
              }
            }}
            inputProps={{
              placeholder: 'E-mail',
              onSubmitEditing: () => phoneRef.current?.focus(),
              returnKeyType: 'next'
            }}
          />

          <InputRegister
            ref={phoneRef}
            icon="phone" 
            error={errors.phone?.message}
            formProps={{
              name: 'phone',
              control,
              rules: {
                required: 'Telefone é obrigatório.'
              }
            }}
            inputProps={{
              placeholder: 'Telefone',
              onSubmitEditing: () => passwordRef.current?.focus(),
              returnKeyType: 'next'
            }}
          />

          <InputRegister
            ref={passwordRef}
            icon="key" 
            error={errors.password?.message}
            formProps={{
              name: 'password',
              control,
              rules: {
                required: 'Senha é obrigatória.',
                minLength: {
                  value: 6,
                  message: 'A senha deve ter pelo menos 6 dígitos'
                }
              }
            }}
            inputProps={{
              placeholder: 'Senha',
              onSubmitEditing: () => passwordConfirmationRef.current?.focus(),
              returnKeyType: 'next',
              secureTextEntry: true
            }}
          />

          <InputRegister
            ref={passwordConfirmationRef}
            icon="key" 
            error={errors.passwordconfirmation?.message}
            formProps={{
              name: 'passwordconfirmation',
              control,
              rules: {
                required: 'Confirme a senha.',
                validate: validationPasswordConfirmation
              }
            }}
            inputProps={{
              placeholder: 'Confirmação de senha',
              secureTextEntry: true
            }}
          />

          <Button title="Salvar" onPress={handleSubmit(handleSave)} />
          
        </View>
      </View>
    </View>
  )
}