import { addDoc, collection } from 'firebase/firestore';
import { Alert, Button, View } from 'react-native';
import { db } from '../firebasefolder/firebase';



export default function FirebaseTestScreen() {
const guardarTest = async () => {
  console.log('db:', db); // Verificamos qué está llegando

  // 🔍 Verificación adicional por si db no es válido
if (!db || typeof db !== 'object') {
    console.error('🔥 db no es válido:', db);
    Alert.alert('Error crítico', 'La conexión a Firebase no está lista');
    return;
}

try {
    const docRef = await addDoc(collection(db, 'pruebas'), {
    nombre: 'Jeffree',
    mensaje: '¡Conexión exitosa!'
    });
    console.log('Documento creado con ID: ', docRef.id);
    Alert.alert('Éxito', 'Documento guardado en Firebase');
} catch (error) {
    console.error('Error al guardar: ', error);
    Alert.alert('Error', error.message);
}
};


return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button title="Guardar en Firebase" onPress={guardarTest} />
    </View>
);
}
