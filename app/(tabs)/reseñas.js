import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import {
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

export default function Reseñas() {
const [barbero, setBarbero] = useState('');
const [servicio, setServicio] = useState('');
const [comentario, setComentario] = useState('');
const [estrellas, setEstrellas] = useState(0);
const [mostrarPickerBarbero, setMostrarPickerBarbero] = useState(true);
const [mostrarPickerServicio, setMostrarPickerServicio] = useState(true);



const enviarReseña = () => {
if (!barbero || !servicio || estrellas === 0) {
    Alert.alert('Completa los campos obligatorios');
    return;
}

Alert.alert('¡Gracias por tu reseña!');

  // Limpiar todos los campos y restaurar pickers
setBarbero('');
setServicio('');
setComentario('');
setEstrellas(0);
setMostrarPickerBarbero(true);
setMostrarPickerServicio(true);
};


  const barberos = ['Jeff', 'Carlos', 'Andrés']; // reemplaza con datos reales
const servicios = ['Corte Clásico', 'Fade', 'Barba', 'Coloración'];

return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    style={{ flex: 1 }}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
<Text style={styles.title}>Deja tu Reseña</Text>

  {/* Paso 1: Elegir barbero */}
    <Text style={styles.label}>Selecciona el barbero</Text>

{mostrarPickerBarbero ? (
<View style={styles.pickerContainer}>
    <Picker
    selectedValue={barbero}
    onValueChange={(itemValue) => {
        setBarbero(itemValue);
        setServicio('');
        if (itemValue !== '') {
          setMostrarPickerBarbero(false); // Oculta el picker después de seleccionar
        }
    }}
    dropdownIconColor="#fff"
    style={styles.picker}
    >
    <Picker.Item label="-- Selecciona un barbero --" value="" />
    {barberos.map((b, i) => (
        <Picker.Item key={i} label={b} value={b} />
    ))}
    </Picker>
</View>
) : (
<View style={styles.resumenContainer}>
    <Text style={styles.resumenTexto}>👤 Barbero: {barbero}</Text>
    <TouchableOpacity onPress={() => setMostrarPickerBarbero(true)}>
    <Text style={styles.cambiarTexto}>Cambiar</Text>
    </TouchableOpacity>
</View>
)}


  {/* Paso 2: Elegir servicio (si ya hay barbero) */}
{barbero !== '' && (
    <>
        <Text style={styles.label}>Selecciona el servicio</Text>

{mostrarPickerServicio ? (
<View style={styles.pickerContainer}>
    <Picker
    selectedValue={servicio}
    onValueChange={(itemValue) => {
        setServicio(itemValue);
        if (itemValue !== '') {
          setMostrarPickerServicio(false); // Oculta después de seleccionar
        }
    }}
    dropdownIconColor="#fff"
    style={styles.picker}
    >
    <Picker.Item label="-- Selecciona un servicio --" value="" />
    {servicios.map((s, i) => (
        <Picker.Item key={i} label={s} value={s} />
    ))}
    </Picker>
</View>
) : (
<View style={styles.resumenContainer}>
    <Text style={styles.resumenTexto}>✂️ Servicio: {servicio}</Text>
    <TouchableOpacity onPress={() => setMostrarPickerServicio(true)}>
    <Text style={styles.cambiarTexto}>Cambiar</Text>
    </TouchableOpacity>
</View>
)}

    </>
)}

  {/* Paso 3: Reseña y estrellas (si ya hay servicio) */}
{barbero !== '' && servicio !== '' && (
    <>
    <Text style={styles.label}>Comentario (opcional)</Text>
    <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Escribe tu opinión aquí"
        placeholderTextColor="#aaa"
        value={comentario}
        onChangeText={setComentario}
        multiline
    />

    <Text style={styles.label}>Califica tu barbero</Text>
    <View style={styles.starContainer}>
        {[1, 2, 3, 4, 5].map((item) => (
        <Ionicons
            key={item}
            name={item <= estrellas ? 'star' : 'star-outline'}
            size={32}
            color={item <= estrellas ? '#FFD700' : '#555'}
            onPress={() => setEstrellas(item)}
            style={styles.star}
        />
        ))}
    </View>

    <TouchableOpacity style={styles.button} onPress={enviarReseña}>
        <Text style={styles.buttonText}>Enviar Reseña</Text>
    </TouchableOpacity>
    </>
)}
</View>

    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
);
}

const styles = StyleSheet.create({
container: {
    padding: 20,
    backgroundColor: '#96b7a2',
    flex: 1,
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
},
label: {
    color: '#fff',
    marginBottom: 5,
    fontWeight: 'bold',
},
pickerContainer: {
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    marginBottom: 15,
    overflow: 'hidden',
},
picker: {
    color: '#fff',
},
input: {
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: '#fff',
},
textArea: {
    height: 100,
    textAlignVertical: 'top',
},
starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
},
star: {
    marginHorizontal: 5,
},
button: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 8,
},
buttonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
},
resumenContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
backgroundColor: '#1a1a1a',
borderRadius: 8,
paddingVertical: 12,
paddingHorizontal: 15,
marginBottom: 15,
},
resumenTexto: {
color: '#fff',
fontSize: 16,
},
cambiarTexto: {
color: '#FFD700',
fontWeight: 'bold',
},

});
