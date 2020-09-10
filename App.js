import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Awesome from './App/Components/Awesome';
import TripsAwseom from './App/Components/TripsAwseome';
import ItemCard from './App/Components/ItemCard';
import Passengers from './App/Components/Passsenegers';
import DriverComing from './App/Components/DriverIsComing';

export default function App() {
  return (
    <View style={styles.container}>
      <DriverComing></DriverComing>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
