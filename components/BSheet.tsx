import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { observer } from '@legendapp/state/react';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { forwardRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Divider, Text } from 'react-native-paper';

import { CarWash } from '@/queries/useCarWash';
import { usePackages } from '@/queries/usePackages';

interface Props {
  data: CarWash;
}

export default observer(
  forwardRef<BottomSheet, Props>(({ data }, ref) => {
    const { data: packages, isLoading, isError, error } = usePackages(data?.carWashId);
    const [selectedPackage, setSelectedPackage] = useState<string>('');
    const [date, setDate] = useState(new Date(1598051730000));

    const onChange = (event: any, selectedDate: any) => {
      const currentDate = selectedDate;
      setDate(currentDate);
    };

    const showMode = (currentMode: any) => {
      DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: currentMode,
        is24Hour: true,
      });
    };

    if (isLoading) {
      return <Text>Loading...</Text>;
    }

    if (isError) {
      return <Text>Error: {error?.message}</Text>;
    }

    return (
      <BottomSheet
        ref={ref}
        snapPoints={['90%']}
        enablePanDownToClose
        index={-1}
        style={styles.contentContainer}>
        <BottomSheetView>
          <Text className="text-center">{data?.name}</Text>
          <View className="px-4">
            <Text className="my-4 text-xl font-semibold">Choose The Package</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                padding: 8,
                borderRadius: 8,
                marginBottom: 16,
                gap: 4,
              }}>
              {packages?.map((item, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => setSelectedPackage(item.packageName)}
                  style={{
                    backgroundColor: '#dbeafe',
                    paddingVertical: 6,
                    paddingHorizontal: 16,
                    borderRadius: 4,
                  }}>
                  <Text variant="labelMedium">{item.packageName}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <Divider />
            <Text className="my-4 text-xl font-semibold">Choose Your Modal</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                padding: 8,
                borderRadius: 8,
                marginBottom: 16,
                gap: 4,
              }}>
              {selectedPackage &&
                packages
                  ?.filter((i) => i.packageName === selectedPackage)
                  .map((item, i) => (
                    <TouchableOpacity
                      key={i}
                      style={{
                        alignItems: 'center',
                        backgroundColor: '#fff7ed',
                        paddingVertical: 6,
                        paddingHorizontal: 16,
                        borderRadius: 4,
                      }}>
                      <Text variant="labelMedium">{item.car_id.carType}</Text>
                      <Text variant="labelMedium">{formatMoney(item.price)}</Text>
                    </TouchableOpacity>
                  ))}
              <Button mode="contained" onPress={() => showMode('date')}>
                Select Date
              </Button>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    );
  }),
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
  },
});

function formatMoney(amount: number) {
  return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + ' TZS';
}
