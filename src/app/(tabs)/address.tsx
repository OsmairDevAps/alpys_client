import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

type AdressProps = {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export default function Address() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState<AdressProps | null>(null);
  const [error, setError] = useState('');

  const buscarEndereco = async () => {
    setError('');
    setEndereco(null);

    if (!cep.match(/^\d{5}-?\d{3}$/)) {
      setError("CEP inválido. Use o formato 12345-678 ou 12345678.");
      return;
    }

    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (data.erro) {
        setError("CEP não encontrado.");
      } else {
        setEndereco(data);
      }
    } catch (err) {
      setError("Erro ao buscar endereço.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Endereço</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o CEP"
        keyboardType="numeric"
        value={cep}
        onChangeText={setCep}
      />
      <Button title="Buscar" onPress={buscarEndereco} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {endereco && (
        <View style={styles.result}>
          <Text>Logradouro: {endereco.logradouro}</Text>
          <Text>Bairro: {endereco.bairro}</Text>
          <Text>Cidade: {endereco.localidade}</Text>
          <Text>Estado: {endereco.uf}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 8 },
  error: { color: 'red', textAlign: 'center' },
  result: { marginTop: 16, padding: 8, backgroundColor: '#f5f5f5' },
});

