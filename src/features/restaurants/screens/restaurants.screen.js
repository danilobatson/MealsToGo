import React, { useContext } from 'react'
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from '../../../components/restaurant-info-card.component'
import { RestaurantsContext} from '../../../services/restaurants/restaurants.context'
import { SearchContainer, RestaurantList } from './styles/restaurants.screen.styles'
import { SafeArea } from '../../../components/utils/safe-area.component'


export const RestaurantsScreen = () => {

  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchContainer >
        <Searchbar />
      </SearchContainer>
      <RestaurantList data={restaurants} renderItem={({item}) => <RestaurantInfoCard restaurant={item} />} keyExtractor={(item) => item.name} />
    </SafeArea>
  )
}
