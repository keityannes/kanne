// Exemplo de consumo de API em React Native + Expo + TypeScript

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

// Tipo para os dados da API
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export default function PerfilDestaqueDIO() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  // Consome a API ao montar o componente
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfis de Destaque DIO</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#FFD700" />
      ) : (
        <FlatList
          data={users}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.username}>@{item.username}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#222', paddingTop: 40, paddingHorizontal: 16 },
  title: { fontSize: 24, color: '#FFD700', fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  card: { backgroundColor: '#333', padding: 15, borderRadius: 10, marginVertical: 8 },
  name: { fontSize: 18, color: '#FFD700', fontWeight: 'bold' },
  username: { fontSize: 16, color: '#fff' },
  email: { fontSize: 14, color: '#FFD700' }
});