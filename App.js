import 'react-native-gesture-handler';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Feather from '@expo/vector-icons/Feather'
import { useFonts, Nunito_400Regular as NunitoRegular, Nunito_700Bold as NunitoBold } from '@expo-google-fonts/nunito';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Navigator from './src/navigation';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['VirtualizedLists']);

/* import * as React from 'react'; */
import { Text, View } from 'react-native';

import TabNavigator from './components/Navigator';

import DataSaver from './data/DataSaver';
import Image from "react-native-web/dist/exports/Image";
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';

import {Button, Item, Input} from 'native-base';
import { Audio, Video } from 'expo-av';

import LottieView from "lottie-react-native";
import Chat from "./components/Chat";
import Home from "./components/home";
import {addWhitelistedInterpolationParam} from "react-native-web/dist/vendor/react-native/Animated/NativeAnimatedHelper";

const data = new DataSaver();
const Stack = createStackNavigator();


// The theme we'll be using for our navigator
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FAFAFA'
  },
};

// Loads the Feather icons (https://docs.expo.io/guides/icons/)
function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default class App extends React.Component {
  /* const = {
    assetsReady: useState(false),
    setAssetsReady: useState(false),
  } */

  async _loadFonts() {
    const iconFontAssets = cacheFonts([Feather.font])
    await Promise.all([...iconFontAssets]);
  }

  // Loads the Nunito font (https://docs.expo.io/guides/using-custom-fonts/)
  /* let = {
    fontsLoaded: useFonts({NunitoRegular, NunitoBold}),
  } */

  render() {
    // If the fonts or assets are not loaded, we show a default App Loading screen.
    // Otherwise, we return our Photo Sharing App!
    /* if (!fontsLoaded || !assetsReady) {
      return <AppLoading
                startAsync={_loadFonts}
                onFinish={() => setAssetsReady(true)}
                onError={console.warn}
              />
    } */
    return (
      /* <NavigationContainer theme={MyTheme}>
        <Navigator />
      </NavigationContainer> */
      <NavigationContainer theme={MyTheme}>
        
        <TabNavigator/>
      </NavigationContainer>
    );
  }
}