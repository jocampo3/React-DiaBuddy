import * as React from 'react';
import { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, TextInput, StyleSheet, FlatList, SafeAreaView, Alert } from 'react-native';
import { router } from "expo-router";
import buttonStyles from "@/assets/styles/buttonStyles";
import { dbSave, dbRetrieve, dbUpdate, dbDelete, GlucoseLog } from "@/app/database";

const handleSave = async (
    breakfast: string,
    lunch: string,
    dinner: string,
    bedtime: string,
    notes: string,
    id?: number
): Promise<void> => {
    if (id) {
        await dbUpdate(id, breakfast, lunch, dinner, bedtime, notes);
        Alert.alert("Success", "Log updated successfully!");
    } else {
        const savedId = await dbSave(breakfast, lunch, dinner, bedtime, notes);
        if (savedId) {
            console.log(`Log saved with ID: ${savedId}`);
        }
    }
    router.replace("/pages/HomePage");
};

const handleDelete = async (id: number): Promise<void> => {
    await dbDelete(id);
    Alert.alert("Success", "Log deleted successfully!");
    router.replace("/pages/HomePage");
};

export default function RecordGlucosePage(): JSX.Element {
    const [breakfast, setBreakfast] = useState<string>("");
    const [lunch, setLunch] = useState<string>("");
    const [dinner, setDinner] = useState<string>("");
    const [bedtime, setBedtime] = useState<string>("");
    const [notes, setNotes] = useState<string>("");
    const [savedLogs, setSavedLogs] = useState<GlucoseLog[]>([]);
    const [editId, setEditId] = useState<number | null>(null);

    useEffect(() => {
        const fetchLogs = async () => {
            const logs = await dbRetrieve();
            setSavedLogs(logs);
        };
        fetchLogs();
    }, []);

    const handleEdit = (log: GlucoseLog) => {
        setBreakfast(log.breakfast);
        setLunch(log.lunch);
        setDinner(log.dinner);
        setBedtime(log.bedtime);
        setNotes(log.notes);
        setEditId(log.id || null);
    };

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
            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={[styles.actionButton, styles.editButton]}
                    onPress={() => handleEdit(item)}
                >
                    <Text style={styles.actionButtonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.actionButton, styles.deleteButton]}
                    onPress={() => handleDelete(item.id!)}
                >
                    <Text style={styles.actionButtonText}>Delete</Text>
                </TouchableOpacity>
            </View>
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
                    onPress={() => handleSave(breakfast, lunch, dinner, bedtime, notes, editId || undefined)}
                >
                    <Text style={styles.saveButtonText}>{editId ? "Update" : "Save"}</Text>
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
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    actionButton: {
        flex: 1,
        paddingVertical: 8,
        marginHorizontal: 4,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    editButton: {
        backgroundColor: '#4CAF50',
    },
    deleteButton: {
        backgroundColor: '#F44336',
    },
    actionButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
