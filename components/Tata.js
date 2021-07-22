import React from 'react';
import {  View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import DataSaver from '../data/DataSaver';

import Chat from "./Chat";
import Home from "./home";

const data = new DataSaver();
const Stack = createStackNavigator();
Tata = (props) => {
    return (<Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home"  options={{ title: 'الرئيسية' }}>
            {props => <Home {...props} data={data}/>}
        </Stack.Screen>
        {data.component.map((c,i)=>
            <Stack.Screen name={c.name} options={{headerShown: false}} key={i}>
            {props => <Chat {...props} data={data} theme={c.name} />}
            </Stack.Screen>
        )}  
    </Stack.Navigator>);
}


export default Tata;