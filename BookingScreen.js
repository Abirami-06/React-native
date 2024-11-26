import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BookingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking Details</Text>
      <Text>Destination: Paris</Text>
      <Text>Price: $2000</Text>
      <Button title="Proceed to Payment" onPress={() => navigation.navigate('Payment')} />
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

export default BookingScreen;

