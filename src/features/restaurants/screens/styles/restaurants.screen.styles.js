import { SafeAreaView, StatusBar, FlatList, View } from 'react-native';
import styled from "styled-components/native";


export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

export const  SearchContainer = styled(View)`
  padding: ${props => props.theme.space.L};
`;


export const  RestaurantList = styled(FlatList)`
  flex: 1;
  padding: ${props => props.theme.space.L};
  background-color: ${props => props.theme.colors.brand.secondary};
`;
