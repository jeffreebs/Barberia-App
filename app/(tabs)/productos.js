import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const productos = [
{
    id: '1',
    nombre: 'Pomada para el cabello',
    descripcion: 'Fijación fuerte con acabado mate.',
    precio: '₡6,500',
    imagen: 'https://i.pinimg.com/736x/bb/bf/ac/bbbfacb1f772d2cebf907950d3e29829.jpg', // Reemplazá por tus URLs
},
{
    id: '2',
    nombre: 'Cera modeladora',
    descripcion: 'Ideal para peinados clásicos.',
    precio: '₡5,000',
    imagen: 'https://i.pinimg.com/736x/f9/fc/ee/f9fceededd9534ef4b787f6b2936bdec.jpg',
},
{
    id: '3',
    nombre: 'Shampoo anticaspa',
    descripcion: 'Fórmula suave y efectiva.',
    precio: '₡4,000',
    imagen: 'https://i.pinimg.com/736x/f6/5d/1d/f65d1da1a6e7263a950df005bff5b802.jpg',
},
];

export default function Productos() {
return (
    <ScrollView style={styles.container}>
    <Text style={styles.title}>Nuestros Productos</Text>
    {productos.map((p) => (
        <View key={p.id} style={styles.card}>
        <Image source={{ uri: p.imagen }} style={styles.imagen} />
        <Text style={styles.nombre}>{p.nombre}</Text>
        <Text style={styles.descripcion}>{p.descripcion}</Text>
        <Text style={styles.precio}>{p.precio}</Text>
        </View>
    ))}
    </ScrollView>
);
}

const styles = StyleSheet.create({
container: {
    padding: 16,
    backgroundColor: '#000',
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
},
card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
},
imagen: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
},
nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
},
descripcion: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    textAlign: 'center',
},
precio: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
},
});
