import React, { useRef, useState } from 'react';
import {
    Animated,
    Image,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

export default function FlipCardBarbero({ barbero, onPress }) {
const rotate = useRef(new Animated.Value(0)).current;
const [flipped, setFlipped] = useState(false);

const frontInterpolate = rotate.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
});

const backInterpolate = rotate.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
});

const flipCard = () => {
    if (flipped) {
    Animated.spring(rotate, {
        toValue: 0,
        useNativeDriver: true,
    }).start();
    } else {
    Animated.spring(rotate, {
        toValue: 180,
        useNativeDriver: true,
    }).start();
    }
    setFlipped(!flipped);
    if (onPress) onPress(); // Ejecutar onPress si fue pasado como prop
};

return (
    <TouchableWithoutFeedback onPress={flipCard}>
    <View style={styles.container}>
        <Animated.View
        style={[styles.card, { transform: [{ rotateY: frontInterpolate }] }]}
        >
        <Image source={{ uri: barbero.imagen }} style={styles.image} />
        <Text style={styles.name}>{barbero.nombre}</Text>
        </Animated.View>

        <Animated.View
        style={[
            styles.card,
            styles.cardBack,
            { transform: [{ rotateY: backInterpolate }] },
        ]}
        >
        <Text style={styles.info}>Especialidad: {barbero.especialidad}</Text>
        <Text style={styles.info}>Experiencia: {barbero.experiencia}</Text>
        </Animated.View>
    </View>
    </TouchableWithoutFeedback>
);
}

const styles = StyleSheet.create({
container: {
    width: 200,
    height: 250,
    margin: 10,
},
card: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    backfaceVisibility: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    elevation: 4,
},
cardBack: {
    backgroundColor: '#0b4f6c',
    transform: [{ rotateY: '180deg' }],
},
image: {
    width: 100,
    height: 100,
    borderRadius: 50,
},
name: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
},
info: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
},
});
