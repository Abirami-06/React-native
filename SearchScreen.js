import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

const destinations = [
  { id: '1', name: 'Paris' },
  { id: '2', name: 'New York' },
  { id: '3', name: 'Tokyo' },
  { id: '4', name: 'Dubai' },
];

const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Destinations"
        value={query}
        onChangeText={setQuery}
      />
      <FlatList
        data={filteredDestinations}
        renderItem={({ item }) => (
          <View style={styles.destination}>
            <Text>{item.name}</Text>
            <Button title="Select" onPress={() => navigation.navigate('Itinerary')} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  destination: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default SearchScreen;

