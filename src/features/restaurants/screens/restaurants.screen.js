import React, { useContext } from 'react'

import { ActivityIndicator } from "react-native-paper";

import { RestaurantInfoCard } from '../../../components/restaurant-info-card.component'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'

import { RestaurantList } from './styles/restaurants.screen.styles'
import { SafeArea } from '../../../components/utils/safe-area.component'
import { Search } from '../components/search.component'

import { colors } from '../../../infrastructure/theme/colors'



export const RestaurantsScreen = () => {

  const { isLoading, restaurants,  } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <Search />
        {isLoading ?
          <ActivityIndicator size='large' animating={true} color={colors.brand.muted} /> :
          <RestaurantList data={restaurants} renderItem={({ item }) =>
              <RestaurantInfoCard restaurant={item} />
          } keyExtractor={(item) => item.name} />
        }
    </SafeArea>
  )
}
