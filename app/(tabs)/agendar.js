import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function AgendarCita() {
  const [nombre, setNombre] = useState('');
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
    if (!nombre || !fecha || !hora) {
      Alert.alert('Por favor completa todos los campos');
      return;
    }

    Alert.alert(
      'Cita agendada',
      `Nombre: ${nombre}\nFecha: ${fecha.toLocaleDateString()}\nHora: ${hora}`
    );

    setNombre('');
    setHora('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar Cita</Text>

      <Text style={styles.label}>Nombre completo</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. Jeff"
        placeholderTextColor="#555"
        value={nombre}
        onChangeText={setNombre}
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
          if (selectedDate) {
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
                hora === h && { backgroundColor: '#ccc' }, // Aplica estilo cuando está seleccionado
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
  opciones: { //CAMBIAR COLOR A OPCIONES DE HORARIO
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
