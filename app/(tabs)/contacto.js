import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import {
    ImageBackground,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const fondoContacto = { uri: 'https://i.imgur.com/18SZEqL.png' }; // Podés cambiar por cualquier fondo

export default function ContactoScreen() {
const handleWhatsApp = () => {
    const phoneNumber = '50686231369';
    const message = 'Hola, me gustaría agendar una cita en VIP Cuts 💈';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    Linking.openURL(url);
};

const handleInstagram = () => {
    const url = 'https://www.instagram.com/vip_cuts_cr?igsh=MTZycXc0YWZxMThleQ==';
    Linking.openURL(url);
};

return (
    <ImageBackground source={fondoContacto} style={styles.fondo} resizeMode="cover">
    <View style={styles.overlay}>
        <Text style={styles.title}>Contacto</Text>

        <View style={styles.infoRow}>
        <FontAwesome name="whatsapp" size={24} color="#25D366" style={styles.icon} />
        <Text style={styles.info}><Text style={styles.label}>WhatsApp:</Text> +506 8888-8888</Text>
        </View>

        <View style={styles.infoRow}>
        <MaterialIcons name="location-on" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.info}><Text style={styles.label}>Dirección:</Text> 100 metros norte del parque central, San Ramón</Text>
        </View>

        <View style={styles.infoRow}>
        <MaterialIcons name="schedule" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.info}><Text style={styles.label}>Horario:</Text> Lunes a Sábado, 9:00 am - 7:00 pm</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleWhatsApp}>
        <Text style={styles.buttonText}>Contactar por WhatsApp</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.instagramLink} onPress={handleInstagram}>
        <FontAwesome name="instagram" size={28} color="#fff" style={styles.icon} />
        <Text style={styles.instagramText}>@vip_cuts_cr</Text>
        </TouchableOpacity>
    </View>
    </ImageBackground>
);
}

const styles = StyleSheet.create({
    fondo: {
    flex: 1,
    width: '100%',
    height: '100%',
    },
    overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 25,
    justifyContent: 'center',
    },
    title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#fff',
    },
    infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    },
    icon: {
    marginRight: 10,
    },
    info: {
    fontSize: 16,
    flex: 1,
    color: '#fff',
    },
    label: {
    fontWeight: 'bold',
    color: '#fff',
    },
    button: {
    marginTop: 30,
    backgroundColor: '#25D366',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    },
    buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    },
    instagramLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    },
    instagramText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 8,
    },
});
