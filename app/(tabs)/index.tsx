import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, Pressable } from 'react-native';
import { Icon } from '@rneui/themed';
import { useRouter } from 'expo-router';
import CustomDivider from '../../components/ui/divider'; // Import your custom divider

const { width, height } = Dimensions.get('window');

export default function HomePage() {

  const router = useRouter();

  const navigateToHome = () => router.push('/(tabs)');
  const navigateToMoodTracker = () => router.push('/(tabs)/moodtracker');
  const navigateToChatbot = () => router.push('/(tabs)/chatbot');
  const navigateToAppointment = () => router.push('/(tabs)/appointment');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const slideAnim = useState(new Animated.Value(width))[0]; // Initial position off-screen to the right

  const toggleDrawer = () => {
    Animated.timing(slideAnim, {
      toValue: drawerOpen ? width : width * 0.4, // Slide in or out (from right to left)
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setDrawerOpen(!drawerOpen); // Toggle the drawer state after the animation
    });
  };

  const closeDrawer = () => {
    if (drawerOpen) {
      Animated.timing(slideAnim, {
        toValue: width, // Slide the drawer back to the right (closed position)
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setDrawerOpen(false); // Ensure the drawer state is set to closed after the animation
      });
    }
  };

  return (
    <View style={styles.container}>
      {/* Menu Icon */}
      <View style={{ position: 'absolute', top: '5%', right: '5%' }}>
        <Icon
          name="menu"
          type="feather"
          size={28}
          color="#000"
          onPress={toggleDrawer} // Toggle the drawer
        />
      </View>

      {/* Overlay */}
      {drawerOpen && (
        <Pressable style={styles.overlay} onPress={closeDrawer}>
          {/* Tapping on the overlay closes the drawer */}
        </Pressable>
      )}

      {/* Sliding Drawer */}
      <Animated.View
        style={[
          styles.drawer, // Ensure the drawer has no transparency
          { transform: [{ translateX: slideAnim }] },
        ]}
      >
        <TouchableOpacity onPress={() => console.log('Profile pressed')}>
          <Text style={styles.drawerItem}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Messages pressed')}>
          <Text style={styles.drawerItem}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Notifications pressed')}>
          <Text style={styles.drawerItem}>Notifications</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 0 }}>
          <TouchableOpacity onPress={() => console.log('Logout pressed')}>
            <Text style={[styles.drawerItem, styles.logout]}>Logout</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>
          <Text style={styles.gradientText}>Mental </Text>
          <Text style={styles.markedText}>Help</Text>
        </Text>
        <CustomDivider />
        <Text style={styles.subtitle}>Your mental health companion</Text>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem} onPress={navigateToHome}>
          <Icon name="heart" type="font-awesome" color="#fff" size={24} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={navigateToMoodTracker}>
          <Icon name="smile-o" type="font-awesome" color="#fff" size={24} />
          <Text style={styles.navText}>Mood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={navigateToChatbot}>
          <Icon name="comments" type="font-awesome" color="#fff" size={24} />
          <Text style={styles.navText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={navigateToAppointment}>
          <Icon name="calendar" type="font-awesome" color="#fff" size={24} />
          <Text style={styles.navText}>Appointments</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },

  drawer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '60%', // Adjust to fit your design
    backgroundColor: '#ffffff', // Fully opaque white background
    opacity: 1,  // Ensure no transparency
    padding: 20,
    shadowColor: '#000', // Add a shadow for better separation
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Shadow for Android
    zIndex: 1,
  },

  drawerItem: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 15,
    color: '#000',
  },
  logout: {
    color: 'red',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent', // Semi-transparent background
    zIndex: 0,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: '800',
    color: '#1f2937',
    textAlign: 'center',
  },
  gradientText: {
    color: '#000',
    backgroundColor: 'transparent',
  },
  markedText: {
    paddingHorizontal: 8,
    color: '#fff',
    backgroundColor: '#34d399',
    borderRadius: 4,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#6ee7b7',
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
