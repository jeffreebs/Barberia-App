import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const cortes = [
{ id: '1', imagen: 'https://i.pinimg.com/736x/c5/14/73/c51473646ae79cf22f384b6b2617973a.jpg' },
{ id: '2', imagen: 'https://i.pinimg.com/736x/21/1d/ba/211dbaa3006d402fa8254f36ec4ff4c1.jpg' },
{ id: '3', imagen: 'https://i.pinimg.com/736x/45/60/f3/4560f34a0aac6a705513a9d2fb88f5a3.jpg' },
{ id: '4', imagen: 'https://i.pinimg.com/736x/cc/08/e0/cc08e05c2de482a4fea6c7f4730be455.jpg' },
{ id: '5', imagen: 'https://i.pinimg.com/736x/fb/79/6a/fb796abe21d165d5e889568e3a2a3a7b.jpg' },
{ id: '6', imagen: 'https://i.pinimg.com/736x/cf/76/b5/cf76b51e5fe4df27b58c2cef1618c5a1.jpg' },
];

export default function GaleriaCortes() {
return (
    <View style={styles.container}>
    <Carousel
        width={250}
        height={250}
        data={cortes}
        renderItem={({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.imagen }} style={styles.image} />
        </View>
        )}
        mode="parallax"
        loop
    />
    </View>
);
}

const styles = StyleSheet.create({
container: { marginTop: 20 },
card: { borderRadius: 12, overflow: 'hidden' },
image: { width: 250, height: 250, borderRadius: 12 },
});
