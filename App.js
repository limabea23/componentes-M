import React from 'react';
import { SafeAreaView, View, StyleSheet } from "react-native";
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.content}>
                <Card />
            </View>   
            <Footer />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#B98BB8',
},
content: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
},
});