import * as React from 'react';
import { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, TextInput, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { router } from "expo-router";
import buttonStyles from "@/assets/styles/buttonStyles";
import { dbSave, dbRetrieve, GlucoseLog } from "@/app/database";

const handleSave = async (
    breakfast: string,
    lunch: string,
    dinner: string,
    bedtime: string,
    notes: string
): Promise<void> => {
    const savedId = await dbSave(breakfast, lunch, dinner, bedtime, notes);
    if (savedId) {
        console.log(`Log saved with ID: ${savedId}`);
    }
    router.replace("/pages/HomePage");
}

export default function RecordGlucosePage(): JSX.Element {
    const [breakfast, setBreakfast] = useState<string>("");
    const [lunch, setLunch] = useState<string>("");
    const [dinner, setDinner] = useState<string>("");
    const [bedtime, setBedtime] = useState<string>("");
    const [notes, setNotes] = useState<string>("");
    const [savedLogs, setSavedLogs] = useState<GlucoseLog[]>([]);

    useEffect(() => {
        const fetchLogs = async () => {
            const logs = await dbRetrieve();
            setSavedLogs(logs);
        };
        fetchLogs();
    }, []);

    const renderLogItem = ({ item }: { item: GlucoseLog }) => (
        <View style={styles.logItem}>
            <Text style={styles.logDate}>Date: {item.datereading}</Text>
            <View style={styles.logReadings}>
                <Text>Breakfast: {item.breakfast}</Text>
                <Text>Lunch: {item.lunch}</Text>
                <Text>Dinner: {item.dinner}</Text>
                <Text>Bedtime: {item.bedtime}</Text>
            </View>
            {item.notes && <Text style={styles.logNotes}>Notes: {item.notes}</Text>}
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputSection}>
                <Text style={styles.title}>Record my glucose levels</Text>
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
                    style={[styles.input, styles.notesInput]}
                    placeholder="Notes"
                    multiline
                    value={notes}
                    onChangeText={setNotes}
                />
                <TouchableOpacity
                    style={[buttonStyles.button, styles.saveButton]}
                    onPress={() => handleSave(breakfast, lunch, dinner, bedtime, notes)}
                >
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.logsSection}>
                <Text style={styles.logHeader}>Saved Logs:</Text>
                <FlatList
                    data={savedLogs}
                    renderItem={renderLogItem}
                    keyExtractor={(item) => item.id?.toString() || ''}
                    contentContainerStyle={styles.flatListContent}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    inputSection: {
        height: 'auto',
        padding: 16,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
    },
    notesInput: {
        height: 60,
    },
    saveButton: {
        backgroundColor: "orange",
        marginTop: 10,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        alignSelf: 'center',
        borderRadius: 5,
    },
    saveButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    logsSection: {
        flex: 1,
        marginTop: 20,
    },
    logHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: 16,
    },
    flatListContent: {
        padding: 16,
    },
    logItem: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        padding: 12,
        marginBottom: 8,
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
    },
    logDate: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    logReadings: {
        marginVertical: 5,
    },
    logNotes: {
        marginTop: 5,
        fontStyle: 'italic',
        color: '#666',
    },
});

