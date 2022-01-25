import React, { useContext } from 'react'
import { Searchbar, ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from '../../../components/restaurant-info-card.component'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'
import { SearchContainer, RestaurantList } from './styles/restaurants.screen.styles'
import { SafeArea } from '../../../components/utils/safe-area.component'

import { colors } from '../../../infrastructure/theme/colors'



export const RestaurantsScreen = () => {

  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchContainer >
        <Searchbar />
      </SearchContainer>
      {isLoading ?
        <ActivityIndicator size='large' animating={true} color={colors.brand.muted} /> :
        <RestaurantList data={restaurants} renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />} keyExtractor={(item) => item.name} />}
    </SafeArea>
  )
}
