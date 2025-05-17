import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Alert,
    Modal,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function Perfil() {
const router = useRouter();
const [menuVisible, setMenuVisible] = useState(false);
const [verHistorial, setVerHistorial] = useState(false);
const [nombre, setNombre] = useState('Juan Pérez');
const [correo, setCorreo] = useState('juanperez@email.com');
const [edad, setEdad] = useState('28');
const [genero, setGenero] = useState('Masculino');

const cerrarSesion = () => {
    setMenuVisible(false);
    router.replace('/'); // Aquí podrías limpiar el estado de login
};

return (
    <SafeAreaView style={styles.container}>
      {/* Encabezado */}
    <View style={styles.header}>
        <Text style={styles.title}>Mi Perfil</Text>
        <TouchableOpacity onPress={() => setMenuVisible(true)}>
        <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
    </View>

    <View style={styles.infoContainer}>
<TextInput
    style={styles.input}
    placeholder="Nombre"
    placeholderTextColor="#888"
    value={nombre}
    onChangeText={setNombre}
/>
<TextInput
    style={styles.input}
    placeholder="Correo electrónico"
    placeholderTextColor="#888"
    value={correo}
    onChangeText={setCorreo}
    keyboardType="email-address"
/>
<TextInput
    style={styles.input}
    placeholder="Edad"
    placeholderTextColor="#888"
    value={edad}
    onChangeText={setEdad}
    keyboardType="numeric"
/>
<TextInput
    style={styles.input}
    placeholder="Género"
    placeholderTextColor="#888"
    value={genero}
    onChangeText={setGenero}
/>

<TouchableOpacity
    style={[styles.menuItem, { backgroundColor: '#444', marginTop: 15 }]}
    onPress={() => Alert.alert('Guardado', 'Tu información fue actualizada')}
>
    <Text style={[styles.menuText, { color: '#fff', textAlign: 'center' }]}>
    Guardar Cambios
    </Text>
</TouchableOpacity>

<TouchableOpacity
    onPress={() => setVerHistorial(true)}
    style={[styles.menuItem, { backgroundColor: '#333', marginTop: 10 }]}
>
    <Text style={[styles.menuText, { color: '#fff', textAlign: 'center' }]}>
        Ver Historial de Citas
    </Text>
</TouchableOpacity>
</View>


      {/* Menú Modal */}
    <Modal
        transparent
        animationType="fade"
        visible={menuVisible}
        onRequestClose={() => setMenuVisible(false)}
    >
        <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPressOut={() => setMenuVisible(false)}
        >
        <View style={styles.modal}>
            {[
            { label: 'Agendar Cita', route: '/agendar' },
            {
                label: 'Citas Agendadas',
                action: () => {
                    setMenuVisible(false);
                    setVerHistorial(true);
                }
            },

            { label: 'Perfil', route: '/perfil' },
            { label: 'Productos', route: '/productos' },
            { label: 'Cambiar Contraseña', route: '/cambiar-pass' }
            ].map((item, index) => (
            <TouchableOpacity
                key={index}
                onPress={() => {
                    setMenuVisible(false);
                    if (item.route) {
                        router.push(item.route);
                    } else if (item.action) {
                        item.action();
                    }
                }}
                style={styles.menuItem}
>
                <Text style={styles.menuText}>{item.label}</Text>
            </TouchableOpacity>

            ))}
            <TouchableOpacity onPress={cerrarSesion} style={styles.menuItem}>
            <Text style={[styles.menuText, { color: 'red' }]}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </View>
        </TouchableOpacity>
    </Modal>

      {/* Modal de historial de citas */}
    <Modal
        visible={verHistorial}
        transparent
        animationType="slide"
        onRequestClose={() => setVerHistorial(false)}
    >
        <View style={styles.modalOverlay}>
        <View style={styles.modal}>
            <Text style={[styles.title, { color: '#000', marginBottom: 10 }]}>
            Historial de Citas
            </Text>

            {[
            '03/04/2024 - Corte con Juan',
            '10/04/2024 - Corte y Barba con Omar',
            '24/04/2024 - Corte VIP con Brayan',
            ].map((cita, index) => (
            <Text key={index} style={styles.menuText}>
                {cita}
            </Text>
            ))}

            <TouchableOpacity
            onPress={() => setVerHistorial(false)}
            style={[styles.menuItem, { marginTop: 20 }]}
            >
            <Text style={[styles.menuText, { textAlign: 'center' }]}>
                Cerrar
            </Text>
            </TouchableOpacity>
        </View>
        </View>
    </Modal>
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
},
header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
},
infoContainer: {
    backgroundColor: '#1a1a1a',
    padding: 15,
    borderRadius: 8,
},
text: {
    color: '#fff',
    marginBottom: 10,
    fontSize: 16,
},
modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-start',
    paddingTop: 60,
    paddingHorizontal: 20,
},
modal: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
},
menuItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
},
menuText: {
    fontSize: 16,
    color: '#000',
},
input: {
backgroundColor: '#333',
color: '#fff',
padding: 12,
borderRadius: 8,
marginBottom: 12,
},

});
