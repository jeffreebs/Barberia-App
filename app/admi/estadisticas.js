import { StyleSheet, Text, View } from 'react-native';

export default function Estadisticas() {
return (
    <View style={styles.container}>
    <Text style={styles.title}>Estadísticas</Text>
      {/* Aquí puedes colocar gráficas o datos analíticos */}
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

