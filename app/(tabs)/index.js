import { useRouter } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const imagenes = [
  { uri: 'https://i.imgur.com/rikzXmD.png' },
  { uri: 'https://i.imgur.com/ei0aSQY.png' },
  { uri: 'https://i.imgur.com/18SZEqL.png' },
  { uri: 'https://i.imgur.com/A2aDzLl.png' },
];

export default function HomeScreen() {
  const router = useRouter();
  const flatListRef = useRef(null);
  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % imagenes.length;
      flatListRef.current?.scrollToIndex({ index: currentIndex, animated: true });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={imagenes}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={item} style={styles.fondo} />
        )}
        style={StyleSheet.absoluteFill}
      />

      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <View style={styles.overlay}>
        <Text style={styles.title}>Bienvenido a VIP Cuts</Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/agendar')}>
          <Text style={styles.buttonText}>Agendar Cita</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/servicios')}>
          <Text style={styles.buttonText}>Servicios</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/barberos')}>
          <Text style={styles.buttonText}>Barberos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/contacto')}>
          <Text style={styles.buttonText}>Contacto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fondo: {
    width: width,
    height: height,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // oscuro transparente para mejor lectura
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#000', // o cualquier color que querás usar
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
