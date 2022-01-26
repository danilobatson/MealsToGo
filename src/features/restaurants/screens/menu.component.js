import React, { useState } from "react";
import { ScrollView, TouchableOpacity} from "react-native";
import { Card, Button, List } from "react-native-paper";



export const Menu = ({ showMenu, setShowMenu }) => {

  return (
    <>
      <TouchableOpacity
      onPress={() => setShowMenu(!showMenu)}>
      <Button >Go Back</Button>
      </TouchableOpacity>
      
      <List.Section title="Menu">
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
        >
          <List.Item title="Burger w/Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <List.Accordion
          title="Dinnner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Fries" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </List.Section>

    </>
  );
};
