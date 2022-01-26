import React from "react";
import styled from "styled-components/native";
import { Image, View } from "react-native";
import { Card, Button } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { TextContent } from '../components/typography/text.component'
import { RestaurantCard, Closed, IconView, RightIconsView, Rating, CardCover, Address, Title } from './styles/restaurant-info-card-styles'
import { Spacer } from "../components/spacer/spacer.component";

import star from "../../assets/star";
import open from "../../assets/open";



export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Delicious Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 Main Ave. Los Angeles, CA",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
    placeId,
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
              {ratingArray.map((_, idx) => (
                <SvgXml
                  key={`star-${placeId}-${idx}`}
                  xml={star}
                  width={30}
                  height={30}
                />
              ))}
            </Rating>
            {isClosedTemporarily ? <Closed variant="label">
              CLOSED TEMPORARILY
            </Closed> :
              <SvgXml xml={open} width={30} height={30} />
            }

            <RightIconsView>

              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </RightIconsView>
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
