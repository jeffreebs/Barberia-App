import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const categorias = ['Servicio Sencillo', 'Servicio VIP', 'Corte de Niños'];

const dataServicios = {
  'Servicio Sencillo': [
    {
      id: '1',
      nombre: 'Corte',
      precio: '₡7000',
      duracion: '30 min Aproximadamente',
      detalles: 'Incluye asesoría de imagen según tu estilo y tipo de rostro.',
    },
    {
      id: '2',
      nombre: 'Corte y Barba',
      precio: '₡10,000',
      duracion: '45 min Aproximadamente',
      detalles: 'Incluye: lavado, secado, bebida y barba a vapor',
    },
  ],
  'Servicio VIP': [
    {
      id: '1',
      nombre: 'Corte',
      precio: '₡10,000',
      duracion: '45 min Aproximadamente',
      detalles: 'Incluye Asesoría de corte según tu estilo de rostro, Servicio VIP.',
    },
    {
      id: '2',
      nombre: 'Corte y Barba',
      precio: '₡15,000',
      duracion: '60 min Aproximadamente',
      detalles: 'Perfil de cejas, Lavado y Secado, Bebida, Vapor con Exfoliación y Mascarilla negra- Masaje',
    },
  ],
  'Corte de Niños': [
    {
      id: '1',
      nombre: 'Corte de niños',
      precio: '₡6000',
      duracion: '25 min Aproximadamente',
      detalles: 'Servicio de calidad reflejado en un gran corte para los chiquitines',
    },
  ],
};

export default function Servicios() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const router = useRouter();

  const renderBotonesCategorias = () => (
    <View style={styles.categoriaContainer}>
      {categorias.map((cat) => (
        <TouchableOpacity
          key={cat}
          style={[
            styles.categoriaBoton,
            categoriaSeleccionada === cat && styles.categoriaBotonActivo,
          ]}
          onPress={() => setCategoriaSeleccionada(cat)}
        >
          <Text
            style={[
              styles.categoriaTexto,
              categoriaSeleccionada === cat && styles.categoriaTextoActivo,
            ]}
          >
            {cat}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderServicios = () => {
    if (!categoriaSeleccionada) return null;

    const servicios = dataServicios[categoriaSeleccionada];

    return (
      <FlatList
        data={servicios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.servicioCard}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.precio}>Precio: {item.precio}</Text>
            <Text style={styles.duracion}>Duración: {item.duracion}</Text>
            {item.detalles ? (
              <Text style={styles.detalles}>{item.detalles}</Text>
            ) : null}

            <TouchableOpacity
              style={styles.botonAgendar}
              onPress={() =>
                router.push({
                  pathname: '/agendar',
                  params: { servicio: item.nombre },
                })
              }
            >
              <Text style={styles.textoBoton}>Agendar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    );
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.imgur.com/85kBXia.png' }}
      style={styles.fondo}
      resizeMode="cover"
    >
      <View style={styles.contenido}>
        <Text style={styles.title}>Nuestros Servicios</Text>
        {renderServicios()}
      </View>

      <View style={styles.barraInferior}>{renderBotonesCategorias()}</View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  contenido: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#000',
  },
  categoriaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  categoriaBoton: {
    backgroundColor: '#ddd',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    width: 100,
    height: 100,
  },
  categoriaBotonActivo: {
    backgroundColor: '#000',
  },
  categoriaTexto: {
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  categoriaTextoActivo: {
    color: '#fff',
  },
  servicioCard: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  precio: {
    fontSize: 16,
    marginTop: 5,
  },
  duracion: {
    fontSize: 14,
    marginTop: 2,
    color: '#555',
  },
  detalles: {
    marginTop: 5,
    fontSize: 14,
    fontStyle: 'italic',
    color: '#444',
  },
  botonAgendar: {
    marginTop: 10,
    backgroundColor: '#000',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  barraInferior: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
  },
});
