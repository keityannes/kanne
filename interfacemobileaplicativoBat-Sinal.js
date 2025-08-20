// Exemplo de interface mobile do Bat-Sinal em React Native

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function App() {
  const [ativo, setAtivo] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bat-Sinal</Text>
      <TouchableOpacity
        style={[styles.button, ativo && styles.buttonAtivo]}
        onPress={() => setAtivo(!ativo)}
      >
        <Text style={styles.buttonText}>
          {ativo ? 'Desligar Sinal' : 'Acionar Bat-Sinal'}
        </Text>
      </TouchableOpacity>
      {ativo && (
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Batman-Symbol.png' }}
          style={styles.image}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#222', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 28, color: '#FFD700', marginBottom: 30, fontWeight: 'bold' },
  button: { backgroundColor: '#444', padding: 15, borderRadius: 10 },
  buttonAtivo: { backgroundColor: '#FFD700' },
  buttonText: { color: '#222', fontSize: 18, fontWeight: 'bold' },
  image: { width: 180, height: 180, marginTop: 30 }
});