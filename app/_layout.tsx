import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'expo-dev-client';
import { Stack } from 'expo-router';
import { DefaultTheme, PaperProvider } from 'react-native-paper';
import '../global.css';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const queryClient = new QueryClient({});

const theme = {
  ...DefaultTheme,
  roundness: 4,
  ElevationLevels: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1d4ed8',
    secondary: 'yellow',
  },
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <PaperProvider theme={theme}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(authenticated)" />
          </Stack>
        </PaperProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
