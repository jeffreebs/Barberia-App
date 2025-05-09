import { Image, StyleSheet, Text, View } from 'react-native';
import FlipCard from 'react-native-flip-card';

const FlipCardBarbero = ({ barbero }) => {
return (
    
    <View style={styles.cardContainer}> 
    <FlipCard
        flipHorizontal
        flipVertical={false}
        clickable={true}
    >
        {/* Cara frontal */}
        <View style={styles.face}>
        <Image source={{ uri: barbero.imagen }} style={styles.image} />
        <Text style={styles.nombre}>{barbero.nombre}</Text>
        </View>

        {/* Cara trasera */}
        <View style={styles.back}>
        <Text style={styles.especialidad}>{barbero.especialidad}</Text>
        <Text style={styles.experiencia}>{barbero.experiencia} de experiencia</Text>
        </View>
    </FlipCard>
    </View>
);
};

const styles = StyleSheet.create({
cardContainer: {
    width: '90%',
    height: 260,
    marginVertical: 12,
    alignSelf: 'center',
},
face: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a69e6a',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
},
back: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7c7772',
    borderRadius: 10,
    padding: 10,
},
image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
},
nombre: {
    fontSize: 18,
    fontWeight: 'bold',
},
especialidad: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 5,
    color: '#fff',
},
experiencia: {
    fontSize: 14,
    color: '#ccc',
},
});

export default FlipCardBarbero;
