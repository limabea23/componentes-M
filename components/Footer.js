import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}> Todos os direitos reservados.</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    footer: {
        backgroundColor:'#9B4D96', 
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'#FFFFFF',
    },
});