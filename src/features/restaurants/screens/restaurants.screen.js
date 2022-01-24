import React from 'react'
import { SafeAreaView,View, StatusBar } from 'react-native';
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from '../../../components/restaurant-info-card.component'
import styled from "styled-components/native";


const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled.View`
  padding: ${props => props.theme.space.L};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${props => props.theme.space.L};
  background-color: ${props => props.theme.colors.brand.primary};
`;
export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer >
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  )
}
