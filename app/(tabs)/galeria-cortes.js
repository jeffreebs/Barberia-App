import { SafeAreaView, StyleSheet } from 'react-native';
import GaleriaCortes from '../../components/galeria-cortes'; // Ajustá si usás alias como @/components

export default function GaleriaCortesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <GaleriaCortes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
