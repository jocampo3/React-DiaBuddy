import { Text, View, Button, Alert, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonStyle: {
        margin: 10,
        width: 100,
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
      <Text>Welcome to DiaBuddy.</Text>
        <Text>Please select your language</Text>
        <View style={{ flexDirection:"row" }}>
            <View style={styles.buttonStyle}>
                <Button
                    title="English"
                    onPress={() => Alert.alert('English Selected')}
                />
            </View>
            <View style={styles.buttonStyle}>
                <Button
                    title="Spanish"
                    onPress={() => Alert.alert('Espanol Escogido')}
                />
            </View>
        </View>

    </View>
  );
}
