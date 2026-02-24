import { Tabs } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';


export default function TabLayout() {
  return (
    <Tabs 
        screenOptions={{
        tabBarActiveTintColor: '#007AFF',      
        tabBarInactiveTintColor: '#888', 
        tabBarShowLabel: false,     
        tabBarStyle: {
          backgroundColor: '#fff',             
          borderTopWidth: 1,
          borderTopColor: '#eee',
          height: 60,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        headerShown: false,                    
      }}
    >
      <Tabs.Screen name="home"
          options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen name="explore"
          options={{
          title: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="explore" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen name="messages"
          options={{
          title: 'Messages',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="wechat" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen name="profile"
        options={{
          title: 'Progile',
          tabBarIcon: ({ color, size }) => (
            <Octicons name="person-fill" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}