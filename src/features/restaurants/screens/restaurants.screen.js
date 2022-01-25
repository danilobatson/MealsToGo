import React from 'react'
import { SafeAreaView,View, StatusBar, FlatList } from 'react-native';
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from '../../../components/restaurant-info-card.component'
import styled from "styled-components/native";

import {SafeArea, SearchContainer, RestaurantList} from './styles/restaurants.screen.styles'

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer >
        <Searchbar />
      </SearchContainer>
      <RestaurantList data={[{ name: 1 }, { name: 2 }, { name: 3 }, {name: 4 }, { name: 5 }, { name: 6}]} renderItem={() => <RestaurantInfoCard />} keyExtractor={(item) => item.name} />
    </SafeArea>
  )
}
