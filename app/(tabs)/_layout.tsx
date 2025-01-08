import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"   // Home tab screen
        options={{ title: 'Home' }}
      />
      <Tabs.Screen
        name="explore" // Explore tab screen
        options={{ title: 'Explore' }}
      />
      <Tabs.Screen
        name="appointment" // Appointment screen
        options={{ title: 'Appointments' }}
      />
      <Tabs.Screen
        name="chatbot" // Chatbot screen
        options={{ title: 'Chatbot' }}
      />
    </Tabs>
  );
}
