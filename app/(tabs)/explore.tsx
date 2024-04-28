import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const INITIAL_REGION = {
  latitude: -6.1659,
  longitude: 39.2026,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default function Explore() {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
      />
    </View>
  );
}
