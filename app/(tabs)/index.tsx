import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Icon } from '@rneui/themed'; // Icons for the navigation

export default function HomePage() {
  const router = useRouter();

  const navigateToHome = () => router.push('/(tabs)');
  const navigateToMoodTracker = () => router.push('/(tabs)/moodtracker');
  const navigateToChatbot = () => router.push('/(tabs)/chatbot');
  const navigateToAppointment = () => router.push('/(tabs)/appointment');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Mental Help!</Text>
      <Text style={styles.subtitle}>Your mental health companion</Text>

      {/* Bottom Navigation Bar */}
      <View style={styles.navBar}>
        <View style={styles.navItem} onTouchEnd={navigateToHome}>
          <Icon name="heart" type="font-awesome" color="#fff" size={24} />
          <Text style={styles.navText}>Home</Text>
        </View>
        <View style={styles.navItem} onTouchEnd={navigateToMoodTracker}>
          <Icon name="smile-o" type="font-awesome" color="#fff" size={24} />
          <Text style={styles.navText}>Mood</Text>
        </View>
        <View style={styles.navItem} onTouchEnd={navigateToChatbot}>
          <Icon name="comments" type="font-awesome" color="#fff" size={24} />
          <Text style={styles.navText}>Chat</Text>
        </View>
        <View style={styles.navItem} onTouchEnd={navigateToAppointment}>
          <Icon name="calendar" type="font-awesome" color="#fff" size={24} />
          <Text style={styles.navText}>Appointments</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#6ee7b7', // Purple background
    height: 70,
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
});
