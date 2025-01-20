import { StyleSheet, Text, View } from "react-native";
import Map, { Marker, Callout } from 'react-native-maps'
import { getCurrentPositionAsync, LocationObject, requestForegroundPermissionsAsync } from 'expo-location'
import { useState } from "react";

export default function MapAddress() {
  const [location, setLocation] = useState<LocationObject | null>(null)
  const [cordinate, setCordinate] = useState({
    latitude: -16.330998502691912,
    longitude: -48.949043879460504
  })

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync()
    if(granted) {
      const currentPosition = await getCurrentPositionAsync()
      setLocation(currentPosition)
      setCordinate({
        latitude: currentPosition.coords.latitude,
        longitude: currentPosition.coords.longitude
      })  
    }
  }

  return (
    <View className="flex-1 bg-alpys-background">
      <Map 
        initialRegion={{
          latitude: cordinate.latitude,
          longitude: cordinate.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={StyleSheet.absoluteFill}
      >
        <Marker coordinate={cordinate}>
          <Callout className="p-4 h-10 w-10">
            <View className="border-2 border-slate-800">
              <Text className="text-xl text-blue-800 font-bold">Igreja Mlp</Text>
              <Text className="text-lg text-blue-800">Av. Sen. Alfredo Nasser n. 123</Text>
            </View>
          </Callout>
        </Marker>
      </Map>
    </View>
  )
}