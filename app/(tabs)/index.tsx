import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';  // Use Expo Router for navigation
import { Button } from '@rneui/themed';   // Optional: If you want styled buttons from React Native Elements

export default function HomePage() {
  const router = useRouter();

  // Navigate to different screens
  const navigateToMoodTracker = () => router.push('/(tabs)/moodtracker');
  const navigateToChatbot = () => router.push('/(tabs)/chatbot');
  const navigateToAppointment = () => router.push('/(tabs)/appointment');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Mental Help!</Text>
      <Text style={styles.subtitle}>Your mental health companion</Text>

      <View style={styles.buttonContainer}>
        <Button title="Mood Tracker" onPress={navigateToMoodTracker} buttonStyle={styles.button} />
        <Button title="Chatbot" onPress={navigateToChatbot} buttonStyle={styles.button} />
        <Button title="Appointments" onPress={navigateToAppointment} buttonStyle={styles.button} />
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
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 30,
    marginTop: 20,
  },
  button: {
    marginBottom: 10,
    backgroundColor: '#4CAF50',  // Green background color
  },
});
