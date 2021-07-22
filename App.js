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

/* import Tab from './components/Navigator'; */

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
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const data = new DataSaver();
const Stack = createStackNavigator();

import GalleryScreen from 'C:/Users/Reda/Desktop/gallery/PhotoSharingAppUI-complete/PhotoSharingAppUI-complete/src/navigation/index';
import ChatScreen from './components/ChatScreen';
import MoroccoScreen from './components/MoroccoScreen';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// The theme we'll be using for our navigator
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FAFAFA'
  },
};
const Tab = createBottomTabNavigator();
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
    
    ba3iya = () =>{
        return (<Stack.Navigator initialRouteName="Home" >
              <Stack.Screen name="Home"  options={{ title: 'الرئيسية' }}>
                  {props => <Home {...props} data={data}/>}
              </Stack.Screen>
              {data.component.map((c,i)=>
                  <Stack.Screen name={c.name} options={{headerShown: false}} key={i}>
                      {props => <Chat {...props} data={data} theme={c.name} />}
                  </Stack.Screen>
              )}  
        </Stack.Navigator>)
    }

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
      <NavigationContainer theme={MyTheme} >
          <Tab.Navigator
            initialRouteName="Chat"
            activeColor= "#fff"
            inactiveColor="#787878"
            barStyle= {{ backgroundColor: '#282828' }}
          >
            <Tab.Screen
                name="Gallery"
                component={GalleryScreen}
                options={{
                    tabBarLabel: 'Gallery',
                    tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'ios-images-sharp'} />
                    </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Chat"
                //children={this.ba3iya}
                component={this.ba3iya}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'ios-chatbubbles-sharp'} />
                    </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Morocco"
                children={MoroccoScreen}
                options={{
                    tabBarLabel: 'Morocco',
                    tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'ios-book-sharp'} />
                    </View>
                    ),
                }}
            />



          </Tab.Navigator>
      </NavigationContainer>
    );
  }
}