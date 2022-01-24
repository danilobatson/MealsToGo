import { Card } from 'react-native-paper';
import { Text, View } from 'react-native'
import styled from 'styled-components'


export const RestaurantCard = styled(Card)`
  backgroundColor: white;
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
`
export const IconView = styled(View)`
  flexDirection: row;
  justify-content: space-between;
  align-items: center
`

export const Closed = styled(Text)`
  font-family: ${(props) => props.theme.fonts.monospace};
  fontSize: ${(props) => props.theme.fontSizes.h5};
  color: ${props => props.theme.colors.ui.error}
  `
