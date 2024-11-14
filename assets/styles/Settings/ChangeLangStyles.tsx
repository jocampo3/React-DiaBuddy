import { StyleSheet } from 'react-native';

const changeLangStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
    },
    languageButton: {
        width: '80%',
        paddingVertical: 15,
        backgroundColor: '#007AFF',
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
    },
    languageText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    },
});

export default changeLangStyles;
