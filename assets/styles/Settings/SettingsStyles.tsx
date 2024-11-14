import { StyleSheet } from 'react-native';

const settingsStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50, // Space at the top
        paddingHorizontal: 20,
        backgroundColor: '#f5f5f5',
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Spreads content across row
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    settingText: {
        fontSize: 18,
        color: '#333',
    },
    arrowIcon: {
        fontSize: 18,
        color: '#999',
    },
});

export default settingsStyles;
