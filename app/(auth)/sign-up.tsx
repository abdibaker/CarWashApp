import { observer, useObservable } from '@legendapp/state/react';
import { useMutation } from '@tanstack/react-query';
import { Link, router } from 'expo-router';
import { Alert, Image, KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { Button, Divider, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { api } from '@/api.config';
import { $user } from '@/context/authContext';

export default observer(() => {
  const { email, password } = useObservable<{ email: string; password: string }>();
  const showPassword = useObservable<boolean>();

  const { mutate: signIn, isPending } = useMutation({
    mutationFn: () => {
      return api.get(`/login-auth/${email.get()}/${password.get()}`);
    },
    onSuccess: (data) => {
      $user.set(data.data);
      router.replace('/home');
    },
    onError: (error) => {
      console.log('🚀 ~ observer ~ error:', JSON.stringify(error, null, 2));
      Alert.alert('🚫 Error', 'Invalid email or password');
    },
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="bg-black">
          <Image source={require('@/assets/carwash.jpg')} className="h-auto w-full" />
        </View>
        <View className="mt-12 px-6">
          <Text variant="titleLarge" className="mb-3 text-center">
            Welcome Back | Wash & Go
          </Text>
          <Text variant="displayMedium" className="mb-8 text-center font-bold">
            Login
          </Text>
          <KeyboardAvoidingView>
            <View className="mb-12 gap-6">
              <TextInput
                mode="outlined"
                placeholder="Email"
                value={email.get()}
                onChangeText={email.set}
              />
              <TextInput
                mode="outlined"
                placeholder="Password"
                value={password.get()}
                onChangeText={password.set}
                secureTextEntry={!showPassword.get()}
                right={
                  <TextInput.Icon
                    icon={showPassword.get() ? 'eye-outline' : 'eye-off-outline'}
                    onPress={() => showPassword.set(!showPassword.get())}
                  />
                }
              />
            </View>
            <Button
              onPress={() => signIn()}
              mode="contained"
              contentStyle={{ height: 52 }}
              loading={isPending}
              uppercase>
              Sign in
            </Button>
          </KeyboardAvoidingView>
          <Divider className="mb-8 mt-10" bold />
          <Text variant="labelMedium" className="text-center">
            Don`t have an account?
            <Link href="/sign-up">
              <Text className="text-blue-700"> Sign up</Text>
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});
