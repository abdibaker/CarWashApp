import { Feather } from '@expo/vector-icons';
import BottomSheet from '@gorhom/bottom-sheet';
import { useRef, useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

import BSheet from '@/components/BSheet';
import StarRating from '@/components/StarRating';
import { CarWash, useCarWash } from '@/queries/useCarWash';

export default function Home() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [selectedCarWash, setSelectedCarWash] = useState<CarWash>();
  const { data } = useCarWash();

  function handleSheetOpen(data: CarWash) {
    setSelectedCarWash(data);
    bottomSheetRef.current?.expand();
  }

  return (
    <>
      <ScrollView className="flex-1 p-4">
        {data && (
          <>
            <Text variant="titleLarge" className="mb-4">
              Nearest <Text className="font-bold text-blue-700">Car Wash</Text> stations
            </Text>
            <View className="gap-5">
              {data.slice(0, 3).map((item, i) => (
                <Card
                  key={i}
                  style={{ borderRadius: 14 }}
                  className="relative"
                  onPress={() => handleSheetOpen(item)}
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
                      <Text variant="titleMedium" className="w-11/12 text-clip capitalize">
                        {item.name}
                      </Text>
                      <StarRating color="#f97316" rate={item.rate} isRatable={false} />
                      <View className="mt-3 flex-row items-baseline gap-x-2">
                        <Feather name="phone" size={12} color="#ea580c" />
                        <Text variant="bodyMedium">{item.contactNumber}</Text>
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
            <View className="gap-5 pb-12">
              {data
                .slice()
                .sort((a, b) => b.rate - a.rate)
                .slice(0, 3)
                .map((item, i) => (
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
                        <Text variant="titleMedium" className="w-11/12 text-clip capitalize">
                          {item.name}
                        </Text>
                        <StarRating color="#f97316" rate={item.rate} />
                        <View className="mt-3 flex-row items-baseline gap-x-2">
                          <Feather name="phone" size={12} color="#ea580c" />
                          <Text variant="bodyMedium">{item.contactNumber}</Text>
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
          </>
        )}
      </ScrollView>
      <BSheet ref={bottomSheetRef} data={selectedCarWash!} />
    </>
  );
}
