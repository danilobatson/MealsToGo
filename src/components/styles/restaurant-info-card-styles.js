import { Card } from 'react-native-paper';
import { View, Text } from 'react-native';
import styled from 'styled-components';


export const RestaurantCard = styled(Card)`
  backgroundColor: white;
  marginBottom: ${props => props.theme.space.L};
`
export const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${props => props.theme.colors.ui.primary};
  fontSize: ${props => props.theme.fontSizes.h4};
`
export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${props => props.theme.colors.ui.primary};
  fontSize: ${props => props.theme.fontSizes.title};
`

export const CardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space.L};
  background-color: white;
`;

export const Rating = styled(View)`
  flexDirection: row;
  paddingTop: ${props => props.theme.space.MD};
  paddingBottom: ${props => props.theme.space.MD};
  flexGrow: 8;
`
export const IconView = styled(View)`
  flexDirection: row;
  justify-content: space-between;
  align-items: center;
`
export const RightIconsView = styled(View)`
  flexDirection: row;
  justify-content: space-around;
  align-items: center;
  flexGrow: 1;
`
export const Closed = styled(Text)`
  font-family: ${(props) => props.theme.fonts.monospace};
  fontSize: ${(props) => props.theme.fontSizes.body};
  color: ${props => props.theme.colors.ui.error};
  flexGrow: 8;
  align-items: center;
  justify-content: flex-start
  `

export const ModalView = styled(View)`
flex: 1;
justifyContent: center;
  flexDirection: row;
  align-items: center;
  flexGrow: 1;
  marginTop: 22px;
  height: 100%;
  width: 100%;
  backgroundColor: ${props => props.theme.colors.brand.muted};
  borderRadius: 20px;
  padding: 35px;

`
