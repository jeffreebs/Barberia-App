import { StyleSheet, Text, View } from 'react-native';

export default function Configuracion() {
return (
    <View style={styles.container}>
    <Text style={styles.title}>Configuración General</Text>
    {/* Aquí podrás añadir opciones como: 
        - Cambiar horario
        - Agregar administrador
        - Ajustes de notificaciones
          - etc. */}
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
