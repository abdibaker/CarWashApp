import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { useCarWash } from '@/queries/useCarWash';

const INITIAL_REGION = {
  latitude: -6.1,
  longitude: 39.36,
  latitudeDelta: 0.4,
  longitudeDelta: 0.4,
};

export default function Explore() {
  const { data } = useCarWash();

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        showsUserLocation
        showsMyLocationButton>
        {data &&
          data.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: Number(marker.latitude),
                longitude: Number(marker.longitude),
              }}
              title={marker.name}
              description={marker.location}
              image={require('../../assets/map-pin.png')}
              onPress={() => console.log(marker.name)}
            />
          ))}
      </MapView>
    </View>
  );
}
