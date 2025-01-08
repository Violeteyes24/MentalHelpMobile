// /app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="moodtracker" options={{ title: 'MoodTracker' }} />
      <Tabs.Screen name="appointment" options={{ title: 'Appointments' }} />
      <Tabs.Screen name="chatbot" options={{ title: 'Chatbot' }} />
    </Tabs>
  );
}
