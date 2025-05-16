import { mockUsuarios } from '@/data/mockUsuarios';
import { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';

export default function LoginScreen() {
const [correo, setCorreo] = useState('');
const [password, setPassword] = useState('');
const [usuarioActual, setUsuarioActual] = useState(null);

const manejarLogin = () => {
    const usuario = mockUsuarios.find(
    u => u.correo === correo && u.password === password
    );

    if (usuario) {
    setUsuarioActual(usuario);
    Alert.alert('Bienvenido', `Hola ${usuario.nombre}!`);
      // Aquí puedes redirigir según el rol con router.push()
    } else {
    Alert.alert('Error', 'Credenciales incorrectas');
    }
};

return (
<View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', padding: 20 }}>
    <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>
    Iniciar Sesión
    </Text>

    <TextInput
    placeholder="Correo"
    placeholderTextColor="#888"
    value={correo}
    onChangeText={setCorreo}
    style={{
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
        color: '#000'
    }}
    />

    <TextInput
    placeholder="Contraseña"
    placeholderTextColor="#888"
    secureTextEntry
    value={password}
    onChangeText={setPassword}
    style={{
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
        color: '#000'
    }}
    />

    <Button title="Iniciar sesión" onPress={manejarLogin} />

    {usuarioActual && (
    <Text style={{ marginTop: 20, textAlign: 'center' }}>
        Sesión iniciada como: {usuarioActual.nombre} ({usuarioActual.rol})
    </Text>
    )}
</View>
);

}
