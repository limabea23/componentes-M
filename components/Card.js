import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

export default function Card() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Rock In Rio</Text>
                <Text style={styles.subtitle}>O Rock in Rio é um festival de música gigante que acontece no Rio de Janeiro, com shows de artistas famosos do Brasil e do mundo todo.</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>The Town</Text>
                <Text style={styles.subtitle}>The Town é um festival de música que acontece em São Paulo, no Brasil. Ele foi criado pelos mesmos organizadores do Rock in Rio e é considerado um dos maiores festivais de música do país.</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create ({
container: {
    flex: 1,
    backgroundColor: '#B98BB8',
    padding: 20,
},
card: {
    backgroundColor: '#FF007F', 
    marginBottom: 20,
    borderRadius: 10,
},
title: {
    fontSize: 24,
    color: '#FFFFFF', 
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
},
subtitle: {
    fontSize: 15,
    color: '#FFFFFF', 
    textAlign: 'justify',
},
});