import { Text, View, TouchableOpacity, Alert, StyleSheet, Image } from "react-native";

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
            <Text>Please select your language</Text>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => Alert.alert("English Selected")}
                >
                    <Text style={styles.buttonText}>English</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => Alert.alert("Espanol Escogido")}
                >
                    <Text style={styles.buttonText}>Spanish</Text>
                </TouchableOpacity>
            </View>

            <Image
                source={require('../assets/images/DiaBuddyHeros/Hero1.png')}
            />
        </View>
    );
}
