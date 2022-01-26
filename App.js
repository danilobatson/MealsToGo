import React from 'react';
import { Platform, Text, Dimensions, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import {MapScreen} from './src/features/map/screens/map.screen'
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/infrastructure/theme'
import { Ionicons } from '@expo/vector-icons'
import { LocationContextProvider } from "./src/services/location/location.context";
import { Modal, Portal, Button, Provider } from 'react-native-paper';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigation } from "./src/infrastructure/navigation"

import { SafeArea } from './src/components/utils/safe-area.component'

import { colors } from './src/infrastructure/theme/colors'

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

import { ModalContextProvider} from './src/services/modal/modal.context'

const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);


const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <ModalContextProvider>
          <Navigation />
            </ModalContextProvider>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
