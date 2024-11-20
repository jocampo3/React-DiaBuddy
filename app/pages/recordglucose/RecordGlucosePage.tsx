import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, View, Text, TextInput, StyleSheet } from 'react-native';
import { router } from "expo-router";
import buttonStyles from "@/assets/styles/buttonStyles";
import db from "@/app/database";
import { Double } from 'react-native/Libraries/Types/CodegenTypes';

const handleSave = async (breakfast:string, lunch:string, dinner:string, bedtime:string, notes:string): Promise<void> => {
    console.log(db);
    if (!db) {
        console.error("Database is not initialized.");
        return;
    }

    try {
        await db.runAsync(
            `INSERT INTO glucoselog (datereading, breakfast, lunch, dinner, bedtime, notes) VALUES (?, ?, ?, ?, ?, ?)`,
            new Date().toISOString().split('T')[0], breakfast, lunch, dinner, bedtime, notes
        );
        router.replace("/pages/HomePage");
    } catch (error) {
        console.error("Error saving glucose log:", error);
    }
};


export default function RecordGlucosePage(): JSX.Element {
    const [breakfast, setBreakfast] = useState<string>("");
    const [lunch, setLunch] = useState<string>("");
    const [dinner, setDinner] = useState<string>("");
    const [bedtime, setBedtime] = useState<string>("");
    const [notes, setNotes] = useState<string>("");

    return (
        <View style={styles.container}>
            <Text>Record my glucose levels</Text>
            <TextInput
                style={styles.input}
                placeholder="Breakfast"
                keyboardType="numeric"
                value={breakfast}
                onChangeText={setBreakfast}
            />
            <TextInput
                style={styles.input}
                placeholder="Lunch"
                keyboardType="numeric"
                value={lunch}
                onChangeText={setLunch}
            />
            <TextInput
                style={styles.input}
                placeholder="Dinner"
                keyboardType="numeric"
                value={dinner}
                onChangeText={setDinner}
            />
            <TextInput
                style={styles.input}
                placeholder="Bedtime"
                keyboardType="numeric"
                value={bedtime}
                onChangeText={setBedtime}
            />
            <TextInput
                style={styles.input}
                placeholder="Notes"
                multiline
                value={notes}
                onChangeText={setNotes}
            />
            <TouchableOpacity style={[buttonStyles.button, { backgroundColor: "orange" }]} onPress={()=>handleSave(breakfast, lunch, dinner, bedtime, notes)}>
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
    },
});
