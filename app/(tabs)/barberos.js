import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import FlipCardBarbero from '../../components/FlipCardBarbero';

const barberos = [
{
    id: '1',
    nombre: 'Juan',
    especialidad: 'Cortes modernos',
    imagen: 'https://i.imgur.com/QSXkBPn.jpeg',
    experiencia: '4 años',
},
{
    id: '2',
    nombre: 'Omar',
    especialidad: 'Fade y barba',
    imagen: 'https://i.imgur.com/eLfmVeB.jpeg',
    experiencia: '6 años',
},
{
    id: '3',
    nombre: 'Brayan',
    especialidad: 'Clásico y elegante',
    imagen: 'https://i.imgur.com/t7itNK1.jpeg',
    experiencia: '5 años',
},
];

export default function Barberos() {
const router = useRouter();

return (
    <View style={styles.container}>
    <Text style={styles.title}>Elige tu barbero</Text>

    <FlatList
        data={barberos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
        <FlipCardBarbero
            barbero={item}
            onPress={() =>
            router.push({
                pathname: '/tabs/agendar',
                params: { barbero: item.nombre },
            })
            }
        />
        )}
        contentContainerStyle={styles.list}
    />
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
},
list: {
    alignItems: 'center',
    gap: 12,
},
});
