import { StyleSheet, Text, View } from 'react-native';

export default function CitasTotales() {
return (
    <View style={styles.container}>
    <Text style={styles.title}>Citas Totales</Text>
      {/* Aquí puedes cargar la lista de citas */}
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
