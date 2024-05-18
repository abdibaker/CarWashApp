import { Tabs } from 'expo-router';
import { Image, View } from 'react-native';

import { TabBarIcon } from '../../components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerLeft: () => (
          <View className="bg-red-700">
            <Image
              source={require('@/assets/logo.png')}
              style={{ height: 40, width: 80, margin: 10 }} // Removed the 'objectFit' property
            />
          </View>
        ),
        headerRight: () => (
          <View className="bg-red-700">
            <Image
              source={require('@/assets/avatar.png')}
              style={{ height: 40, width: 40, margin: 10 }} // Removed the 'objectFit' property
            />
          </View>
        ),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <TabBarIcon name="map-marker" color={color} />,
        }}
      />
      <Tabs.Screen
        name="book-mark"
        options={{
          title: 'Book Mark',
          tabBarIcon: ({ color }) => <TabBarIcon name="bookmark" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
