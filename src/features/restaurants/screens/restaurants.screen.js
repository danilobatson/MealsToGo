import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard} from '../../../components/restaurant-info-card.component'


export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'green',
  },
  search: {
    padding: 16
  },
  list: {
    flex: 1, padding: 16, backgroundColor: "blue"
  }
});
