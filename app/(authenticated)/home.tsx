import { Feather } from '@expo/vector-icons';
import { Image, ScrollView, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

import StarRating from '@/components/StarRating';

export default function Home() {
  return (
    <ScrollView className="flex-1 p-4 pb-12">
      <Text variant="titleLarge" className="mb-4">
        Nearest <Text className="font-bold text-blue-700">Car Wash</Text> stations
      </Text>
      <View className="gap-5">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card
            key={i}
            style={{ borderRadius: 14 }}
            className="relative"
            contentStyle={{
              flexDirection: 'row',
            }}>
            <Image
              source={require('@/assets/carwash2.jpg')}
              className="h-full basis-1/3"
              style={{ borderTopLeftRadius: 14, borderBottomLeftRadius: 14 }}
            />
            <View className="my-4">
              <Card.Content>
                <Text variant="titleMedium">John's station</Text>
                <StarRating color="#f97316" />
                <View className="mt-3 flex-row items-baseline gap-x-2">
                  <Feather name="phone" size={12} color="#ea580c" />
                  <Text variant="bodyMedium">0123456789</Text>
                </View>
              </Card.Content>
            </View>
            <View className="my-4 ml-auto mr-2 flex-row items-baseline gap-x-2">
              <Feather name="map-pin" size={12} color="#ea580c" />
              <Text variant="bodyMedium">1.23km</Text>
            </View>
            <Button
              contentStyle={{ height: 35 }}
              labelStyle={{ fontSize: 11, fontWeight: 'bold' }}
              mode="contained"
              className="absolute bottom-0 right-0 rounded-none rounded-br-2xl rounded-tl-2xl">
              Book Now
            </Button>
          </Card>
        ))}
      </View>
      <Text variant="titleLarge" className="my-4">
        Popular <Text className="font-bold text-blue-700">Car Wash</Text> stations
      </Text>
      <View className="gap-5">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card
            key={i}
            style={{ borderRadius: 14 }}
            className="relative"
            contentStyle={{
              flexDirection: 'row',
            }}>
            <Image
              source={require('@/assets/carwash1.jpg')}
              className="h-full basis-1/3"
              style={{ borderTopLeftRadius: 14, borderBottomLeftRadius: 14 }}
            />
            <View className="my-4">
              <Card.Content>
                <Text variant="titleMedium">John's station</Text>
                <StarRating color="#f97316" />
                <View className="mt-3 flex-row items-baseline gap-x-2">
                  <Feather name="phone" size={12} color="#ea580c" />
                  <Text variant="bodyMedium">0123456789</Text>
                </View>
              </Card.Content>
            </View>
            <View className="my-4 ml-auto mr-2 flex-row items-baseline gap-x-2">
              <Feather name="map-pin" size={12} color="#ea580c" />
              <Text variant="bodyMedium">1.23km</Text>
            </View>
            <Button
              contentStyle={{ height: 35 }}
              labelStyle={{ fontSize: 11, fontWeight: 'bold' }}
              mode="contained"
              className="absolute bottom-0 right-0 rounded-none rounded-br-2xl rounded-tl-2xl">
              Book Now
            </Button>
          </Card>
        ))}
      </View>
      {/* <Button onPress={signOut} mode="contained">
          Sign out
        </Button> */}
    </ScrollView>
  );
}
