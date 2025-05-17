import { StyleSheet, Text, View } from 'react-native';

export default function ControlServicios() {
return (
    <View style={styles.container}>
    <Text style={styles.title}>Control de Servicios</Text>
      {/* Aquí puedes mostrar la lista de servicios disponibles */}
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
},
});
