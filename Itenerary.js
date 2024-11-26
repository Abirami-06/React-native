import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ItineraryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Itinerary Plan</Text>
      <Text>Destination: Paris</Text>
      <Text>Duration: 5 Days</Text>
      <Button title="Book Now" onPress={() => navigation.navigate('Booking')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
});

export default ItineraryScreen;

