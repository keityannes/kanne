// Exemplo de App de Portfólio em React Native

import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Linking, TouchableOpacity } from 'react-native';

const projetos = [
  { id: '1', nome: 'Gerenciador de Podcasts', descricao: 'API Node.js e TypeScript para podcasts.', link: 'https://github.com/seuusuario/podcast-manager' },
  { id: '2', nome: 'Minimal API F1', descricao: 'API Fastify para dados da Fórmula 1.', link: 'https://github.com/seuusuario/minimal-api-f1' },
  { id: '3', nome: 'Bat-Sinal Mobile', descricao: 'App React Native para acionar o Bat-Sinal.', link: 'https://github.com/seuusuario/bat-sinal-mobile' }
];

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/1?v=4' }}
        style={styles.avatar}
      />
      <Text style={styles.nome}>Seu Nome</Text>
      <Text style={styles.titulo}>Desenvolvedor(a) Mobile</Text>
      <Text style={styles.subtitulo}>Projetos</Text>
      <FlatList
        data={projetos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.projetoNome}>{item.nome}</Text>
            <Text style={styles.projetoDesc}>{item.descricao}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
              <Text style={styles.link}>Ver no GitHub</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#222', alignItems: 'center', paddingTop: 40 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  nome: { fontSize: 24, color: '#FFD700', fontWeight: 'bold' },
  titulo: { fontSize: 18, color: '#fff', marginBottom: 20 },
  subtitulo: { fontSize: 20, color: '#FFD700', marginVertical: 10 },
  card: { backgroundColor: '#333', padding: 15, borderRadius: 10, marginVertical: 8, width: 320 },
  projetoNome: { fontSize: 16, color: '#FFD700', fontWeight: 'bold' },
  projetoDesc: { fontSize: 14, color: '#fff', marginBottom: 8 },
  link: { color: '#FFD700', textDecorationLine: 'underline', fontSize: 14 }
});

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Linking, TouchableOpacity, ScrollView } from 'react-native';

// Dados de contatos importantes
const contatos = [
  { id: '1', nome: 'LinkedIn', link: 'https://linkedin.com/in/seuusuario' },
  { id: '2', nome: 'GitHub', link: 'https://github.com/seuusuario' },
  { id: '3', nome: 'Email', link: 'mailto:seuemail@dominio.com' }
];

// Dados de habilidades
const habilidades = [
  { id: '1', nome: 'JavaScript', nivel: 'Avançado' },
  { id: '2', nome: 'React Native', nivel: 'Intermediário' },
  { id: '3', nome: 'Node.js', nivel: 'Intermediário' },
  { id: '4', nome: 'TypeScript', nivel: 'Básico' }
];

export default function App() {
  const [tela, setTela] = useState('main');

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => setTela('main')}>
          <Text style={[styles.menuItem, tela === 'main' && styles.menuItemAtivo]}>Main Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTela('skills')}>
          <Text style={[styles.menuItem, tela === 'skills' && styles.menuItemAtivo]}>Skill Screen</Text>
        </TouchableOpacity>
      </View>
      {tela === 'main' ? (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
          <Image
            source={{ uri: 'https://avatars.githubusercontent.com/u/1?v=4' }}
            style={styles.avatar}
          />
          <Text style={styles.nome}>Seu Nome</Text>
          <Text style={styles.titulo}>Desenvolvedor(a) Mobile</Text>
          <Text style={styles.subtitulo}>Conecte-se comigo:</Text>
          {contatos.map(item => (
            <TouchableOpacity key={item.id} onPress={() => Linking.openURL(item.link)}>
              <Text style={styles.link}>{item.nome}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
          <Image
            source={{ uri: 'https://avatars.githubusercontent.com/u/1?v=4' }}
            style={styles.avatar}
          />
          <Text style={styles.nome}>Seu Nome</Text>
          <Text style={styles.titulo}>Árvore de Habilidades</Text>
          {habilidades.map(item => (
            <View key={item.id} style={styles.skillCard}>
              <Text style={styles.skillNome}>{item.nome}</Text>
              <Text style={styles.skillNivel}>{item.nivel}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#222', paddingTop: 40 },
  menu: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20 },
  menuItem: { color: '#FFD700', fontSize: 18, marginHorizontal: 20, paddingBottom: 5 },
  menuItemAtivo: { borderBottomWidth: 2, borderBottomColor: '#FFD700' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  nome: { fontSize: 24, color: '#FFD700', fontWeight: 'bold' },
  titulo: { fontSize: 18, color: '#fff', marginBottom: 20 },
  subtitulo: { fontSize: 20, color: '#FFD700', marginVertical: 10 },
  link: { color: '#FFD700', textDecorationLine: 'underline', fontSize: 16, marginBottom: 8 },
  skillCard: { backgroundColor: '#333', padding: 15, borderRadius: 10, marginVertical: 8, width: 320, alignItems: 'center' },
  skillNome: { fontSize: 16, color: '#FFD700', fontWeight: 'bold' },
  skillNivel: { fontSize: 14, color: '#fff', marginTop: 4 }
});