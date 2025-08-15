// Exemplo de componente React Native para um sequenciador de senhas do Batman

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const batmanChars = 'BATMAN123!@#';

function gerarSenha(tamanho) {
  let senha = '';
  for (let i = 0; i < tamanho; i++) {
    senha += batmanChars[Math.floor(Math.random() * batmanChars.length)];
  }
  return senha;
}

export default function App() {
  const [tamanho, setTamanho] = useState('8');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sequenciador de Senhas do Batman 🦇</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={tamanho}
        onChangeText={setTamanho}
        placeholder="Tamanho da senha"
      />
      <Button
        title="Gerar Senha"
        color="#222"
        onPress={() => setSenha(gerarSenha(Number(tamanho)))}
      />
      {senha !== '' && (
        <Text style={styles.senha}>Senha: {senha}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1a1a1a' },
  title: { fontSize: 22, color: '#FFD700', marginBottom: 20, fontWeight: 'bold' },
  input: { backgroundColor: '#333', color: '#FFD700', padding: 10, width: 150, marginBottom: 15, borderRadius: 8, textAlign: 'center' },
  senha: { marginTop: 20, fontSize: 18, color: '#FFD700', fontFamily: 'monospace'