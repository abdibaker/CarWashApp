import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const INITIAL_REGION = {
  latitude: -6.1,
  longitude: 39.36,
  latitudeDelta: 0.4,
  longitudeDelta: 0.4,
};

export default function Explore() {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        showsUserLocation
        showsMyLocationButton
      />
    </View>
  );
}
