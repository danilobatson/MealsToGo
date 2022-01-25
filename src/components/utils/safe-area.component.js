import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { SearchContainer, RestaurantList } from '../../features/restaurants/screens/styles/restaurants.screen.styles'


export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
