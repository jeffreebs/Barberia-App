import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DashboardAdmin() {
const router = useRouter();

  // Datos simulados
const resumen = {
    citasHoy: 12,
    barberosActivos: 3,
    ganancias: 84000
};

return (
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>Panel Administrativo</Text>

    <View style={styles.card}>
        <Text style={styles.label}>Citas Hoy</Text>
        <Text style={styles.value}>{resumen.citasHoy}</Text>
    </View>

    <View style={styles.card}>
        <Text style={styles.label}>Barberos Activos</Text>
        <Text style={styles.value}>{resumen.barberosActivos}</Text>
    </View>

    <View style={styles.card}>
        <Text style={styles.label}>Ganancias Estimadas</Text>
        <Text style={styles.value}>₡{resumen.ganancias}</Text>
    </View>

    <Text style={styles.subtitulo}>Navegación</Text>

    <TouchableOpacity style={styles.button} onPress={() => router.push('/admi/citas-totales')}>
        <Text style={styles.buttonText}>Ver Todas las Citas</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={() => router.push('/admi/control-barberos')}>
        <Text style={styles.buttonText}>Control de Barberos</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={() => router.push('/admi/control-servicios')}>
        <Text style={styles.buttonText}>Control de Servicios</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={() => router.push('/admi/estadisticas')}>
        <Text style={styles.buttonText}>Estadísticas</Text>
    </TouchableOpacity>
    </ScrollView>
);
}

const styles = StyleSheet.create({
container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1
},
title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
},
card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
},
label: {
    fontSize: 18,
    color: '#555'
},
value: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111'
},
subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10
},
button: {
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10
},
buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
}
});
