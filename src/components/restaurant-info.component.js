import React from 'react'
import { StyleSheet, Text} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export const RestaurantInfo = ({ restaurant = {} }) => {
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
      <Text>{name}</Text>
      <Card elevation={5} style={styles.card}>
        <Card.Title  title={name}  />
        <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
        <Card.Content>
          <Paragraph >{address} </Paragraph>
          <Paragraph >Rating: {rating}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </>
  )
}


const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
  title: { padding: 16 },
});
