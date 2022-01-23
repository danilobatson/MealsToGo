import React from 'react';
import { Platform } from 'react-native';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';


const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';


export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
