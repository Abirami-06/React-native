import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const PaymentScreen = ({ navigation }) => {
  const [paymentDetails, setPaymentDetails] = useState('');

  const handlePayment = () => {
    alert('Payment Successful!');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Credit Card Details"
        value={paymentDetails}
        onChangeText={setPaymentDetails}
      />
      <Button title="Make Payment" onPress={handlePayment} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default PaymentScreen;


