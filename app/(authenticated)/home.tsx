import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { $user, signOut } from '@/context/authContext';

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Text>{$user.get()?.username}</Text>
        <Button onPress={signOut} mode="contained">
          Sign out
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
