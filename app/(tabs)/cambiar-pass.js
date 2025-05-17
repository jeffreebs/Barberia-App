import { useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default function CambiarContraseña() {
const [actual, setActual] = useState('');
const [nueva, setNueva] = useState('');
const [confirmar, setConfirmar] = useState('');

const manejarCambio = () => {
    if (!actual || !nueva || !confirmar) {
    Alert.alert('Campos incompletos', 'Por favor completa todos los campos.');
    return;
    }

    if (nueva !== confirmar) {
    Alert.alert('Error', 'La nueva contraseña no coincide.');
    return;
    }

    Alert.alert('Éxito', 'Tu contraseña ha sido actualizada correctamente.');
    setActual('');
    setNueva('');
    setConfirmar('');
};

return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
    <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <Text style={styles.title}>Cambiar Contraseña</Text>

        <TextInput
        style={styles.input}
        placeholder="Contraseña actual"
        placeholderTextColor="#888"
        secureTextEntry
        value={actual}
        onChangeText={setActual}
        />
        <TextInput
        style={styles.input}
        placeholder="Nueva contraseña"
        placeholderTextColor="#888"
        secureTextEntry
        value={nueva}
        onChangeText={setNueva}
        />
        <TextInput
        style={styles.input}
        placeholder="Confirmar nueva contraseña"
        placeholderTextColor="#888"
        secureTextEntry
        value={confirmar}
        onChangeText={setConfirmar}
        />

        <TouchableOpacity style={styles.button} onPress={manejarCambio}>
        <Text style={styles.buttonText}>Guardar Cambios</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
},
input: {
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    padding: 12,
    color: '#fff',
    fontSize: 16,
    marginBottom: 15,
},
button: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
},
buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
},
});
