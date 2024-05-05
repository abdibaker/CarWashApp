import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'expo-dev-client';
import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import '../global.css';

const queryClient = new QueryClient({});

export default function RootLayout() {

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(authenticated)" />
        </Stack>
      </PaperProvider>
    </QueryClientProvider>
  );
}
