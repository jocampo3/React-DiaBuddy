import * as React from 'react';
import { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, TextInput, StyleSheet } from 'react-native';
import { router } from "expo-router";
import buttonStyles from "@/assets/styles/buttonStyles";
import { dbSave, dbRetrieve } from "@/app/database";
import { Double } from 'react-native/Libraries/Types/CodegenTypes';
import { use } from 'i18next';

const handleSave = async (breakfast:string, lunch:string, dinner:string, bedtime:string, notes:string): Promise<void> => {
     console.log("calling dbSave")
     dbSave(breakfast, lunch, dinner, bedtime, notes);
     router.replace("/pages/HomePage");
}

export default function RecordGlucosePage(): JSX.Element {
    const [breakfast, setBreakfast] = useState<string>("");
    const [lunch, setLunch] = useState<string>("");
    const [dinner, setDinner] = useState<string>("");
    const [bedtime, setBedtime] = useState<string>("");
    const [notes, setNotes] = useState<string>("");

    useEffect(() => {
        console.log("retrieving existing logs")
        dbRetrieve();
    }, [])
    
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
