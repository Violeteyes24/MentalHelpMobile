// /app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#90EE90',
          height: 0, // I successfully hid using this.
        },
        tabBarShowLabel: false, // Ensure it only shows labels/icons
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="moodtracker" options={{ title: 'MoodTracker' }} />
      <Tabs.Screen name="appointment" options={{ title: 'Appointments' }} />
      <Tabs.Screen name="chatbot" options={{ title: 'Chatbot' }} />
    </Tabs>
  );
}
