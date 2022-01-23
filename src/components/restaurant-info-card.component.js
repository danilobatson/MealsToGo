import React from 'react'
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import styled from 'styled-components'

const RestaurantCard = styled(Card)`
  backgroundColor: white;
`
const RestaurantCardTitle = styled(Card.Title)`
  color: red;
`
const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
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
        <RestaurantCardTitle  title={name} />
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Card.Content>
          <Paragraph >{address} </Paragraph>
          <Paragraph >Rating: {rating}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </RestaurantCard>
    </>
  )
}
