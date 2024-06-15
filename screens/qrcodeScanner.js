// screens/QRCodeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const QRCodeScreen = () => {
  
  const link = "nexalink.co";

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.shareButton}>
        <Icon name="chevron-down" size={13} color="#fff" style={styles.icon} />
        <Text style={styles.shareButtonText}>Share my card</Text>
      </TouchableOpacity>
      <View style={styles.qrCodeContainer}>
        <QRCode
          value={link}
           size={275}
          
        />
          
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Icon name="share-square-o" size={20} color="#000" style={styles.icon} />
          <Text style={styles.optionButtonText}>Share my card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
        <AntDesignIcon name="wallet" size={20} color="#000" style={styles.icon} />
        
           <Text style={styles.optionButtonText}>Add card to wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
        <MaterialIcon name="add-to-home-screen" size={20} color="#000" style={styles.icon} />
       
              <Text style={styles.optionButtonText}>Add card to homescreen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Icon name="envelope" size={20} color="#000" style={styles.icon} />
          <Text style={styles.optionButtonText}>Create Email signature</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Icon name="picture-o" size={20} color="#000" style={styles.icon} />
          <Text style={styles.optionButtonText}>Create virtual background</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.airDropButton}>
      <MaterialIcon name="wifi-tethering" size={27} color="#fff" style={styles.icon} />
        <Text style={styles.airDropButtonText}>Share with AirDrop</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  shareButton: {
    backgroundColor: '#ff6600',
    padding: 10,
    borderRadius: 25,
    marginBottom: 25,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  qrCodeContainer: {
    alignItems: 'center',
    marginBottom: 25,
    justifyContent:'center',
    position: 'relative'
  },

  optionsContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignSelf: 'stretch',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  optionButtonText: {
    fontSize: 16,
    marginLeft: 10,
  },
  airDropButton: {
    backgroundColor: '#ff6600',
    padding: 10,
    borderRadius: 25,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  airDropButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },

 
});

export default QRCodeScreen;
