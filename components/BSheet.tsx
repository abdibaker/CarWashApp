import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { observer } from '@legendapp/state/react';
import { forwardRef } from 'react';
import { StyleSheet, Text } from 'react-native';

export default observer(
  forwardRef<any>((_, ref) => {
    return (
      <BottomSheet
        ref={ref}
        snapPoints={['70%']}
        enablePanDownToClose
        index={-1}
        style={styles.contentContainer}>
        <BottomSheetView>
          <Text>Awesome 🎉</Text>
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
    alignItems: 'center',
  },
});
