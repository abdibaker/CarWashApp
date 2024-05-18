import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const INITIAL_REGION = {
  latitude: -6.1,
  longitude: 39.36,
  latitudeDelta: 0.4,
  longitudeDelta: 0.4,
};

const carWashLocations = [
  {
    latitude: -6.2,
    longitude: 39.3,
    title: 'Car Wash 1',
    description: 'Description 1',
  },
  {
    latitude: -6.3,
    longitude: 39.4,
    title: 'Car Wash 2',
    description: 'Description 2',
  },
  {
    latitude: -6.2,
    longitude: 39.43,
    title: 'Car Wash 3',
    description: 'Description 3',
  },
];

export default function Explore() {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        showsUserLocation
        showsMyLocationButton>
        {carWashLocations.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.title}
            description={marker.description}
            image={require('../../assets/map-pin.png')}
            onPress={() => console.log(marker.title)}
          />
        ))}
      </MapView>
    </View>
  );
}
