import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Icon } from '@rneui/themed'; // Icons for the navigation
import CustomDivider from '../../components/ui/divider'; // Import your custom divider

export default function HomePage() {
  const router = useRouter();

  const navigateToHome = () => router.push('/(tabs)');
  const navigateToMoodTracker = () => router.push('/(tabs)/moodtracker');
  const navigateToChatbot = () => router.push('/(tabs)/chatbot');
  const navigateToAppointment = () => router.push('/(tabs)/appointment');

  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>
          <Text style={styles.gradientText}>Mental </Text>
          <Text style={styles.markedText}>Help</Text>
        </Text>
      {/* Divider */}
      <CustomDivider />
      
        <Text style={styles.subtitle}>Your mental health companion</Text>
      </View>

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
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 48, // Adjusted for a larger header
    fontWeight: '800', // Extra bold
    color: '#1f2937', // Gray-900
    textAlign: 'center',
  },
  gradientText: {
    color: '3b82f6', // Make text transparent
    backgroundColor: 'transparent', // React Native doesn't support gradient text directly
  },
  markedText: {
    paddingHorizontal: 8,
    color: '#fff',
    backgroundColor: '#34d399', // Emerald-600
    borderRadius: 4,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc', // Divider color
    marginBottom: 20,
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#6ee7b7', // Background color
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