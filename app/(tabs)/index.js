import { useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
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

      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Sección superior: título + login/registro */}
        <View style={styles.overlay}>
          <View style={styles.heroContent}>
            <Text style={styles.title}>Bienvenido a VIP Cuts</Text>

          |<View style={styles.authButtons}>
            <TouchableOpacity style={styles.authButton} onPress={() => router.push('/login')}>
              <Text style={styles.authText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.authButton} onPress={() => router.push('/registro')}>
              <Text style={styles.authText}>Registrarse</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>


        {/* Sección inferior: botones de navegación */}
        <View style={styles.botonesSection}>
          <TouchableOpacity style={styles.button} onPress={() => router.push('/agendar')}>
            <Text style={styles.buttonText}>Agendar Cita</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => router.push('/servicios')}>
            <Text style={styles.buttonText}>Servicios</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => router.push('/barberos')}>
            <Text style={styles.buttonText}>Barberos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/galeria-cortes')}>
            <Text style={styles.buttonText}>Galería de Cortes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/productos')}>
            <Text style={styles.buttonText}>Productos</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.button} onPress={() => router.push('/contacto')}>
            <Text style={styles.buttonText}>Contacto</Text>
          </TouchableOpacity>

          
          <View style={{ height: 80 }} />
        </View>

      </ScrollView>
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
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  overlay: {
    minHeight: height * 0.8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  authButtons: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  authButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  authText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  botonesSection: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: 40,
    paddingBottom: 100,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: 'rgba(124, 119, 114, 0.6)',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },

  heroContent: {
  marginTop: 60,
  alignItems: 'center',
},

});
