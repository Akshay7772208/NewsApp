// Import necessary modules
import React from 'react';
import {View, SafeAreaView, StyleSheet } from 'react-native';
import QRCodeScreen from './screens/qrcodeScanner';



const App = () => {
 
  return (
    <SafeAreaView style={styles.container}>
        <QRCodeScreen/>  
    </SafeAreaView>
    
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default App;
