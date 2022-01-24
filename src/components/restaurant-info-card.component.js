import React from 'react'
import { Button, Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg'
import star from '../../assets/star'
import open from '../../assets/open'

import {RestaurantCard, Closed, IconView, Rating, CardCover, Address, Title} from './styles/restaurant-info-card-styles'



export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 Main Ave. Miami, FL",
    isOpenNow = false,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)))

  return (
    <>
      <RestaurantCard elevation={5} >
        <Title >{name}</Title>
        <CardCover key={name} source={{ uri: photos[0] }} />
        <Card.Content>
          <Address >{address} </Address>
          <IconView>
            <Rating>
              {ratingArray.map((rating, idx) => {
                return (
                  <SvgXml key={idx} xml={star} width={20} height={20} />
                )
              })}
            </Rating>
            {isClosedTemporarily && (
              <Closed variant="label">
                CLOSED TEMPORARILY
              </Closed>
            )}
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          </IconView>
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </RestaurantCard>
    </>
  )
}
