import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { observer } from '@legendapp/state/react';
import { forwardRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { CarWash } from '@/queries/useCarWash';

interface Props {
  data: CarWash;
}

export default observer(
  forwardRef<BottomSheet, Props>(({ data }, ref) => {
    return (
      <BottomSheet
        ref={ref}
        snapPoints={['90%']}
        enablePanDownToClose
        index={-1}
        style={styles.contentContainer}>
        <BottomSheetView>
          <Text className="text-center">{data?.name}</Text>
          <View>
            <Text className="">Choose Your Modal</Text>
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
