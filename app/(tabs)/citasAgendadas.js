import { FlatList, StyleSheet, Text, View } from 'react-native';

// Simulación de citas agendadas
const mockReservas = [
{
    id: 1,
    cliente: "Jeffree Berrocal Sequeira",
    barbero: "Omar",
    servicio: "Corte y Barba",
    fecha: "2025-05-17",
    hora: "10:30 AM"
},
{
    id: 2,
    cliente: "Luis",
    barbero: "Brayan",
    servicio: "Corte",
    fecha: "2025-05-18",
    hora: "12:00 PM"
}
];

export default function CitasAgendadas() {
const nombreCliente = "Jeffree Berrocal Sequeira";

  // Filtrar solo las citas de Jeffree
const citasDeJeffree = mockReservas.filter(r => r.cliente === nombreCliente);

return (
    <View style={styles.container}>
    <Text style={styles.title}>Citas Agendadas</Text>

    {citasDeJeffree.length === 0 ? (
        <Text style={styles.mensaje}>No tienes citas agendadas, {nombreCliente}.</Text>
    ) : (
        <FlatList
        data={citasDeJeffree}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <View style={styles.card}>
            <Text style={styles.info}>Barbero: {item.barbero}</Text>
            <Text style={styles.info}>Servicio: {item.servicio}</Text>
            <Text style={styles.info}>Fecha: {item.fecha}</Text>
            <Text style={styles.info}>Hora: {item.hora}</Text>
            </View>
        )}
        />
    )}
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
},
mensaje: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 30
},
card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
},
info: {
    fontSize: 16
}
});
