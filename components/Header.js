import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Shows & Festivais</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    header: {
        backgroundColor:'#9B4D96', 
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'#FFFFFF',
    },
});