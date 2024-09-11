import { Text, View, TouchableOpacity, Alert, StyleSheet, Image } from "react-native";
import { router } from 'expo-router';

const styles = StyleSheet.create({
    buttonStyle: {
        margin: 10,
        width: 100,
        backgroundColor: '#DC7633',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    text: {
        fontWeight: "bold",
        fontSize: 15
    },
});

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text style={ styles.text }>Select your language</Text>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                    style={[styles.buttonStyle, { backgroundColor: "orange" }]}
                    onPress={() => Alert.alert("English Selected")}
                >
                    <Text style={styles.buttonText}>English</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonStyle, { backgroundColor: "lightblue" }]}
                    onPress={() => Alert.alert("Español Escogido")}
                >
                    <Text style={styles.buttonText}>Español</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonStyle, { backgroundColor: "lightgreen" }]}
                    onPress={() => router.replace("/about")
                }
                >
                    <Text style={styles.buttonText}>About</Text>
                </TouchableOpacity>
            </View>

            <Image
                source={require('../assets/images/DiaBuddyHeros/Hero_1.png')}
            />
        </View>
    );
}
