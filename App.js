import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Discord from "./Screens/Discord";
import Reddit from "./Screens/Reddit";

export default class App extends React.Component {

  render(){
    return(
      <AppContainer />
    )
  };

}


const TabNavigator = createBottomTabNavigator({

  Reddit: { screen: Reddit },
  Discord: { screen: Discord }

});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});