import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const EventScreen = () => {
  const navigation = useNavigation();

  // Sample events data
  const [events, setEvents] = useState([
    { id: '1', title: 'Music Concert', date: '2024-12-01', description: 'Join us for an unforgettable night of music.' },
    { id: '2', title: 'Art Exhibition', date: '2024-12-05', description: 'Explore the best local artwork from talented artists.' },
    { id: '3', title: 'Tech Conference', date: '2024-12-10', description: 'Learn about the latest advancements in tech.' },
  ]);


  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };


  const handleRSVP = (event) => {
    Alert.alert('RSVP Success', `You have successfully RSVP'd for the ${event.title} event!`);
  };


  const renderEventItem = ({ item }) => {
    return (
      <View style={styles.eventCard}>
        <Text style={styles.eventTitle}>{item.title}</Text>
        <Text style={styles.eventDate}>{item.date}</Text>
        <Text style={styles.eventDescription}>{item.description}</Text>
        <TouchableOpacity style={styles.rsvpButton} onPress={() => handleRSVP(item)}>
          <Text style={styles.rsvpText}>RSVP</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Events</Text>


      <FlatList
        data={events}
        renderItem={renderEventItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.eventList}
      />


      <View style={styles.line}></View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigateTo('Dashboard')}>
          <Text style={styles.footerText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigateTo('Event')}>
          <Text style={styles.footerText}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigateTo('Profile')}>
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
  eventList: {
    width: '100%',
    marginTop: 20,
  },
  eventCard: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  eventDate: {
    fontSize: 14,
    color: '#777',
    marginVertical: 5,
  },
  eventDescription: {
    fontSize: 16,
    color: '#555',
    marginVertical: 10,
  },
  rsvpButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  rsvpText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#ddd', // Light grey horizontal line
    marginVertical: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  footerButton: {
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});

export default EventScreen;
