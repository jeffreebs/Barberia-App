import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';



export default function AgendarCita() {
  const [mostrarBarberos, setMostrarBarberos] = useState(false);

  const { barbero: barberoParam } = useLocalSearchParams();
  const [barbero, setBarbero] = useState(barberoParam || '');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('+506');
  const [fecha, setFecha] = useState(new Date());
  const [mostrarFecha, setMostrarFecha] = useState(false);
  const [hora, setHora] = useState('');
  const [mostrarHora, setMostrarHora] = useState(false);
  const [imagenReferencia, setImagenReferencia] = useState(null);

  const elegirImagen = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    quality: 0.7,
  });

  if (!result.canceled && result.assets && result.assets.length > 0) {
    setImagenReferencia(result.assets[0].uri);
  }
};


  const barberosDisponibles = [
  { id: '1', nombre: 'Juan' },
  { id: '2', nombre: 'Omar' },
  { id: '3', nombre: 'Brayan' }
];

const [servicio, setServicio] = useState('');
const [mostrarServicios, setMostrarServicios] = useState(false);

const serviciosDisponibles = [
  { id: '1', nombre: 'Corte', precio: '₡7,000' },
  { id: '2', nombre: 'Corte y Barba', precio: '₡10,000' },
  { id: '3', nombre: 'Corte VIP', precio: '₡10,000' },
  { id: '4', nombre: 'Corte y Barba VIP', precio: '₡12,000' },
  { id: '5', nombre: 'Corte de Niños', precio: '₡6,000' }
];


const maxFecha = new Date();
maxFecha.setDate(maxFecha.getDate() + 31);


  const horariosDisponibles = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
    '06:00 PM', '07:00 PM'
  ];

  const agendar = () => {
    if (!nombre || !fecha || !hora || !email || !telefono) {
      Alert.alert('Por favor completa todos los campos');
      return;
    }

    if (!barbero) {
      Alert.alert('Por favor selecciona un barbero');
      return;
    }

    if (!servicio) {
  Alert.alert('Por favor selecciona un servicio');
  return;
}



    const [horaStr, meridiano] = hora.split(' ');
    let [horaNum, minutos] = horaStr.split(':').map(Number);
    if (meridiano === 'PM' && horaNum !== 12) horaNum += 12;
    if (meridiano === 'AM' && horaNum === 12) horaNum = 0;

    const fechaSeleccionada = new Date(fecha);
    fechaSeleccionada.setHours(horaNum);
    fechaSeleccionada.setMinutes(minutos);
    fechaSeleccionada.setSeconds(0);

    const ahora = new Date();

    if (fechaSeleccionada <= ahora) {
      Alert.alert('Selecciona una fecha y hora futura');
      return;
    }

    console.log({
  nombre,
  email,
  telefono,
  barbero,
  servicio,
  fecha: fecha.toLocaleDateString(),
  hora,
  imagenReferencia, // esta es la URI de la imagen seleccionada
});


    Alert.alert(
      'Cita agendada',
      `Nombre: ${nombre}\nBarbero: ${barbero}\nFecha: ${fecha.toLocaleDateString()}\nHora: ${hora}\nServicio: ${servicio}`
    );

    setNombre('');
    setEmail('');
    setTelefono('+506');
    setHora('');
    setBarbero('');
  };

return (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
>

        <Text style={styles.title}>Agendar Cita</Text>

        <Text style={styles.label}>Nombre completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa acá tu nombre completo"
          placeholderTextColor="#555"
          value={nombre}
          onChangeText={setNombre}
        />

        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. ejemplo@gmail.com"
          placeholderTextColor="#555"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Teléfono celular</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. +50671234567"
          placeholderTextColor="#555"
          value={telefono}
          onChangeText={setTelefono}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Selecciona tu barbero</Text>
        <TouchableOpacity onPress={() => setMostrarBarberos(!mostrarBarberos)} style={styles.input}>
          <Text style={{ color: '#000' }}>
            {barbero ? barbero : 'Toca para seleccionar'}
          </Text>
        </TouchableOpacity>

        {mostrarBarberos && (
          <View style={styles.opciones}>
            {barberosDisponibles.map((b) => (
              <TouchableOpacity
                key={b.id}
                onPress={() => {
                  setBarbero(b.nombre);
                  setMostrarBarberos(false);
                }}
                style={[
                  styles.opcionItem,
                  barbero === b.nombre && { backgroundColor: '#ccc' },
                ]}
              >
                <Text style={styles.opcionText}>{b.nombre}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <Text style={styles.label}>Selecciona tu servicio</Text>
        <TouchableOpacity onPress={() => setMostrarServicios(!mostrarServicios)} style={styles.input}>
          <Text style={{ color: '#000' }}>
            {servicio ? servicio : 'Toca para seleccionar'}
          </Text>
        </TouchableOpacity>

        {mostrarServicios && (
          <View style={styles.opciones}>
            {serviciosDisponibles.map((s) => (
              <TouchableOpacity
                key={s.id}
                onPress={() => {
                  setServicio(`${s.nombre} - ${s.precio}`);
                  setMostrarServicios(false);
                }}
                style={[
                  styles.opcionItem,
                  servicio === `${s.nombre} - ${s.precio}` && { backgroundColor: '#ccc' },
                ]}
              >
                <Text style={styles.opcionText}>{s.nombre} - {s.precio}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <Text style={styles.label}>Fecha</Text>
        <TouchableOpacity onPress={() => setMostrarFecha(true)} style={styles.input}>
          <Text style={{ color: '#000' }}>{fecha.toLocaleDateString()}</Text>
        </TouchableOpacity>

        {mostrarFecha && (
          <DateTimePicker
            value={fecha}
            mode="date"
            minimumDate={new Date()}
            maximumDate={maxFecha}
            display="spinner"
            onChange={(event, selectedDate) => {
              setMostrarFecha(false);
              if (event.type === 'set' && selectedDate) {
                setFecha(selectedDate);
              }
            }}
          />
        )}

        <Text style={styles.label}>Hora</Text>
        <TouchableOpacity onPress={() => setMostrarHora(true)} style={styles.input}>
          <Text style={{ color: '#000' }}>
            {hora || 'Seleccione una hora'}
          </Text>
        </TouchableOpacity>

        {mostrarHora && (
          <View style={styles.opciones}>
            {horariosDisponibles.map((h, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setHora(h);
                  setMostrarHora(false);
                }}
                style={[
                  styles.opcionItem,
                  hora === h && { backgroundColor: '#ccc' },
                ]}
              >
                <Text style={styles.opcionText}>{h}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <Text style={styles.label}>Foto de referencia (opcional)</Text>
        <TouchableOpacity onPress={elegirImagen} style={styles.input}>
          <Text style={{ color: '#000' }}>
            {imagenReferencia ? 'Cambiar imagen' : 'Subir foto de referencia'}
          </Text>
        </TouchableOpacity>

        {imagenReferencia && (
          <Image
            source={{ uri: imagenReferencia }}
            style={{ width: '100%', height: 200, borderRadius: 10, marginTop: 10 }}
            resizeMode="cover"
          />
        )}

        <TouchableOpacity style={styles.button} onPress={agendar}>
          <Text style={styles.buttonText}>Confirmar Cita</Text>
        </TouchableOpacity>
      </ScrollView>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    padding: 20,
    minHeight: '150%',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
    color: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
    color: '#000',
  },
  opciones: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  opcionItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  opcionText: {
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#111',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },

  pickerContainer: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  backgroundColor: '#fff', // <- FONDO BLANCO
  marginBottom: 15,
  overflow: 'hidden',
},


  
});
