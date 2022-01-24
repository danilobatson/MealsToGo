import React from 'react'
import { Button, Card } from 'react-native-paper';
import { Text, View } from 'react-native'
import styled from 'styled-components'
import { SvgXml } from 'react-native-svg'
import star from '../../assets/star'

const RestaurantCard = styled(Card)`
  backgroundColor: white;
`
const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${props => props.theme.colors.ui.primary};
  fontSize: ${props => props.theme.fontSizes.h4};
`
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${props => props.theme.colors.ui.primary};
  fontSize: ${props => props.theme.fontSizes.title};
`

const CardCover = styled(Card.Cover)`
  padding: ${props => props.theme.space.L};
  background-color: white;
`;

const Rating = styled(View)`
flexDirection: row;
  paddingTop: ${props => props.theme.space.MD};
  paddingBottom: ${props => props.theme.space.MD};

`

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

  const ratingArray = Array.from(new Array(Math.floor(rating)))

  return (
    <>
      <RestaurantCard elevation={5} >
        <Title >{name}</Title>
        <CardCover key={name} source={{ uri: photos[0] }} />
        <Card.Content>
          <Address >{address} </Address>
          <Rating>
            {ratingArray.map(() => {
              return (
                <SvgXml xml={star} width={20} height={20} />
              )
            })}
          </Rating>
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </RestaurantCard>
    </>
  )
}
