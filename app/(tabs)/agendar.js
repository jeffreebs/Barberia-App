import DateTimePicker from '@react-native-community/datetimepicker';
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
  View
} from 'react-native';

export default function AgendarCita() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('+506');
  const [fecha, setFecha] = useState(new Date());
  const [mostrarFecha, setMostrarFecha] = useState(false);
  const [hora, setHora] = useState('');
  const [mostrarHora, setMostrarHora] = useState(false);

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

    Alert.alert(
      'Cita agendada',
      `Nombre: ${nombre}\nFecha: ${fecha.toLocaleDateString()}\nHora: ${hora}`
    );

    setNombre('');
    setEmail('');
    setTelefono('+506');
    setHora('');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Agendar Cita</Text>

          <Text style={styles.label}>Nombre completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa acá tu nombre completo "
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

          <Text style={styles.label}>Fecha</Text>
          <TouchableOpacity onPress={() => setMostrarFecha(true)} style={styles.input}>
            <Text style={{ color: '#000' }}>{fecha.toLocaleDateString()}</Text>
          </TouchableOpacity>

          {mostrarFecha && (
            <DateTimePicker
              value={fecha}
              mode="date"
              minimumDate={new Date()}
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

          <TouchableOpacity style={styles.button} onPress={agendar}>
            <Text style={styles.buttonText}>Confirmar Cita</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center',
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
    color: '#fFF',
    fontSize: 16,
  },
});
