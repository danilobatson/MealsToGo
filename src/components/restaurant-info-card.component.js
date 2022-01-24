import React from 'react'
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import {Text} from 'react-native'
import styled from 'styled-components'

const RestaurantCard = styled(Card)`
  backgroundColor: white;
`
const RestaurantCardTitle = styled(Text)`
  color: ${props => props.theme.colors.ui.primary};
  fontSize: ${props => props.theme.fontSizes.h4};
`
const RestaurantAddress = styled(Text)`
  color: ${props => props.theme.colors.ui.primary};
  fontSize: ${props => props.theme.fontSizes.title};
`
const RestaurantRating = styled(Text)`
  color: ${props => props.theme.colors.ui.secondary};
  fontSize: ${props => props.theme.fontSizes.body};
`
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space.L};
  background-color: white;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 Main Ave. Miami, FL",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <>
      <RestaurantCard elevation={5} >
        <RestaurantCardTitle >{name}</RestaurantCardTitle>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Card.Content>
          <RestaurantAddress >{address} </RestaurantAddress>
          <RestaurantRating >Rating: {rating}</RestaurantRating>
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </RestaurantCard>
    </>
  )
}
