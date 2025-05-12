import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
  screenOptions={{
    tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    headerShown: false,
    tabBarButton: HapticTab,
    tabBarBackground: TabBarBackground,
    tabBarStyle: Platform.select({
      ios: {
        position: 'absolute',
      },
      default: {},
    }),
  }}
>
  <Tabs.Screen
    name="index"
    options={{
      title: 'Home',
      tabBarIcon: ({ color }) => (
        <IconSymbol size={28} name="house.fill" color={color} />
      ),
    }}
  />

  {/* <Tabs.Screen
    name="productos"
    options={{
      title: 'Productos',
      tabBarIcon: ({ color }) => (
        <IconSymbol size={28} name="cart.fill" color={color} />
      ),
    }}
  /> */}
  {/* <Tabs.Screen
  name="galeria-cortes"
  options={{
    title: 'Galería',
    tabBarIcon: ({ color }) => (
      <IconSymbol size={28} name="photo.fill" color={color} />
    ),
  }}
/> */}
<Tabs.Screen
  name="agendar"
  options={{
    title: 'Agendar',
    tabBarIcon: ({ color }) => (
      <IconSymbol size={28} name="scissors" color={color} />
    ),
  }}
/>

<Tabs.Screen
  name="barberos"
  options={{
    href: null, // 👈 esto la oculta del tab bar
  }}
/>
<Tabs.Screen
  name="servicios"
  options={{
    href: null,
  }}
/>
<Tabs.Screen
  name="explore"
  options={{
    href: null,
  }}
/>
<Tabs.Screen
  name="contacto"
  options={{
    href: null,
  }}
/>

</Tabs>

  );
}
